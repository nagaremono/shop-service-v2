import { registerEnumType } from 'type-graphql';

export enum AuthMessage {
  CREDENTIALS_ACCEPTED = 'CREDENTIAL_ACCEPTED',
  INCORRECT_CREDENTIALS = 'INCORRECT_CREDENTIALS',
  NONEXISTENT_ACCOUNT = 'NONEXISTENT_ACCOUNT',
  LOGGED_OUT = 'LOGGED_OUT',
  UNAUTHORIZED = 'UNAUTHORIZED',
}

registerEnumType(AuthMessage, {
  name: 'AuthMessage',
});
