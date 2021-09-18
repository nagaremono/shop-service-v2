import { PrismaClient } from '@prisma/client';
import faker from 'faker';

const prisma = new PrismaClient();

function genRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

async function mainSeed() {
  await prisma.$transaction([
    prisma.soldItem.deleteMany(),
    prisma.product.deleteMany(),
    prisma.transaction.deleteMany(),
    prisma.user.deleteMany(),
  ]);

  const product = [];

  for (let i = 0; i < 100; i++) {
    const newProduct = await prisma.product.create({
      data: {
        name: faker.commerce.productName(),
        price: faker.commerce.price(1000, 999999, 2),
        stock: genRandomInt(10, 10000),
        images: [faker.random.image()],
      },
    });
    product.push(newProduct);
  }

  const people = [];

  for (let i = 0; i < 10; i++) {
    people.push(
      await prisma.user.create({
        data: {
          username: faker.internet.userName(),
          password: faker.internet.password(),
          email: faker.internet.email(),
        },
      }),
    );
  }

  console.log(people.map(({ email, password }) => ({ email, password })));

  for (let i = 0; i < 200; i++) {
    const customer = people[genRandomInt(0, people.length)];
    const purchasedProduct = product[i / 2];
    const boughtQuantity = 5;

    await prisma.transaction.create({
      data: {
        customerid: customer.id,
        createdAt: faker.date.between('2015-01-01', '2021-01-01'),
        totalAmount: (
          purchasedProduct.price.toNumber() * boughtQuantity
        ).toFixed(2),
        paymentStatus: 'paid',
        soldItems: {
          create: {
            price: purchasedProduct.price,
            images: JSON.stringify(purchasedProduct.images),
            name: purchasedProduct.name,
            quantity: boughtQuantity,
            productId: purchasedProduct.id,
          },
        },
      },
    });

    await prisma.product.update({
      where: {
        id: purchasedProduct.id,
      },
      data: {
        stock: {
          decrement: boughtQuantity,
        },
      },
    });
  }
}

mainSeed().catch((e) => console.error(e));
