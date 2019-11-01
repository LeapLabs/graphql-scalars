import { GraphQLScalarType } from 'graphql';
import { GraphQLError } from 'graphql/error';
import { Kind } from 'graphql/language';

const EMAIL_ADDRESS_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const EMAIL_ADDRESS_REGEX_WITH_TLD = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]{2,})$/;

const makeScalar = (regex, opts) =>
  new GraphQLScalarType({
    serialize(value) {
      if (typeof value !== 'string') {
        throw new TypeError(`Value is not string: ${value}`);
      }

      if (!regex.test(value)) {
        throw new TypeError(`Value is not a valid email address: ${value}`);
      }

      return value;
    },

    parseValue(value) {
      if (typeof value !== 'string') {
        throw new TypeError('Value is not string');
      }

      if (!regex.test(value)) {
        throw new TypeError(`Value is not a valid email address: ${value}`);
      }

      return value;
    },

    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(
          `Can only validate strings as email addresses but got a: ${ast.kind}`,
        );
      }

      if (!regex.test(ast.value)) {
        throw new TypeError(`Value is not a valid email address: ${ast.value}`);
      }

      return ast.value;
    },
    ...opts,
  });

export const EmailAddress = makeScalar(EMAIL_ADDRESS_REGEX, {
  name: 'EmailAddress',

  description:
    'A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/.',
});
export default EmailAddress;
export const EmailAddressWithTLD = makeScalar(EMAIL_ADDRESS_REGEX_WITH_TLD, {
  name: 'EmailAddressWithTLD',

  description:
    'A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/ with a Top level domain. Addresses with local domains are invalid with this scalar',
});
