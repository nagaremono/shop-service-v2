import { registerEnumType } from 'type-graphql';

export enum AuthMessage {
  CREDENTIALS_ACCEPTED = 'CREDENTIAL_ACCEPTED',
  INCORRECT_CREDENTIALS = 'INCORRECT_CREDENTIALS',
  NONEXISTENT_ACCOUNT = 'NONEXISTENT_ACCOUNT',
}

registerEnumType(AuthMessage, {
  name: 'AuthMessage',
});
