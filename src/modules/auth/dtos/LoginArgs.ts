import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class LoginArgs {
  @Field(() => String)
  email!: string;

  @Field(() => String)
  password!: string;
}
