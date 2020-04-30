import { GraphQLScalarType } from 'graphql';
import { GraphQLError } from 'graphql/error';
import { Kind } from 'graphql/language';

export const EMAIL_ADDRESS_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// copied from https://stackoverflow.com/a/201378/671457
// eslint-disable-next-line
export const EMAIL_ADDRESS_REGEX_WITH_TLD = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

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
    'A field whose value should conform to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/.',
});
export default EmailAddress;
export const EmailAddressWithTLD = makeScalar(EMAIL_ADDRESS_REGEX_WITH_TLD, {
  name: 'EmailAddressWithTLD',

  description:
    'A field whose value should conform to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/ with a Top level domain. Valid RFC822 addresses with local domains are invalid with this scalar',
});
