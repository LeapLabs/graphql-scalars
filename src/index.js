import DateTime from './DateTime';
import NonPositiveInt from './NonPositiveInt';
import PositiveInt from './PositiveInt';
import NonNegativeInt from './NonNegativeInt';
import NegativeInt from './NegativeInt';
import NonPositiveFloat from './NonPositiveFloat';
import PositiveFloat from './PositiveFloat';
import NonNegativeFloat from './NonNegativeFloat';
import NegativeFloat from './NegativeFloat';
import {
  EmailAddress,
  EmailAddressWithTLD,
  EMAIL_ADDRESS_REGEX_WITH_TLD,
} from './EmailAddress';
import URL from './URL';
import PhoneNumber from './PhoneNumber';
import PostalCode from './PostalCode';
import RegularExpression from './RegularExpression';
import {
  DateTimeScalar,
  EmailAddressScalar,
  NegativeFloatScalar,
  NegativeIntScalar,
  NonNegativeFloatScalar,
  NonNegativeIntScalar,
  NonPositiveFloatScalar,
  NonPositiveIntScalar,
  PhoneNumberScalar,
  PositiveFloatScalar,
  PositiveIntScalar,
  PostalCodeScalar,
  RegularExpressionScalar,
  UnsignedFloatScalar,
  UnsignedIntScalar,
  URLScalar,
} from './scalars';

export { default as ScalarDefinitions } from './scalars';

export {
  // Resolvers
  DateTime,
  NonPositiveInt,
  PositiveInt,
  NonNegativeInt,
  NonNegativeInt as UnsignedInt,
  NegativeInt,
  NonPositiveFloat,
  PositiveFloat,
  NonNegativeFloat,
  NonNegativeFloat as UnsignedFloat,
  NegativeFloat,
  EmailAddress,
  EmailAddressWithTLD,
  URL,
  PhoneNumber,
  PostalCode,
  RegularExpression,
  // Scalars
  DateTimeScalar,
  EmailAddressScalar,
  NegativeFloatScalar,
  NegativeIntScalar,
  NonNegativeFloatScalar,
  NonNegativeIntScalar,
  NonPositiveFloatScalar,
  NonPositiveIntScalar,
  PhoneNumberScalar,
  PositiveFloatScalar,
  PositiveIntScalar,
  PostalCodeScalar,
  RegularExpressionScalar,
  UnsignedFloatScalar,
  UnsignedIntScalar,
  URLScalar,
  EMAIL_ADDRESS_REGEX_WITH_TLD,
};

export default {
  // as part of a default object
  DateTime,
  PositiveInt,
  NonNegativeInt,
  UnsignedInt: NonNegativeInt,
  NegativeInt,
  PositiveFloat,
  NonNegativeFloat,
  UnsignedFloat: NonNegativeFloat,
  NegativeFloat,
  EmailAddress,
  EmailAddressWithTLD,
  URL,
  PhoneNumber,
  PostalCode,
  RegularExpression,
};
