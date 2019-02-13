import { GraphQLScalarType } from 'graphql';

export declare const EmailAddress: GraphQLScalarType;
export declare const DateTime: GraphQLScalarType;
export declare const NonPositiveInt: GraphQLScalarType;
export declare const PositiveInt: GraphQLScalarType;
export declare const NonNegativeInt: GraphQLScalarType;
export declare const NegativeInt: GraphQLScalarType;
export declare const NonPositiveFloat: GraphQLScalarType;
export declare const PositiveFloat: GraphQLScalarType;
export declare const NonNegativeFloat: GraphQLScalarType;
export declare const NegativeFloat: GraphQLScalarType;
export declare const URL: GraphQLScalarType;
export declare const PhoneNumber: GraphQLScalarType;
export declare const PostalCode: GraphQLScalarType;

export declare class RegularExpression extends GraphQLScalarType {
  constructor(name: string, regex: RegExp);
}

export declare const DateTimeScalar: string;
export declare const NonPositiveIntScalar: string;
export declare const PositiveIntScalar: string;
export declare const NonNegativeIntScalar: string;
export declare const UnsignedIntScalar: string;
export declare const NegativeIntScalar: string;
export declare const NonPositiveFloatScalar: string;
export declare const PositiveFloatScalar: string;
export declare const NonNegativeFloatScalar: string;
export declare const UnsignedFloatScalar: string;
export declare const NegativeFloatScalar: string;
export declare const EmailAddressScalar: string;
export declare const URLScalar: string;
export declare const PhoneNumberScalar: string;
export declare const PostalCodeScalar: string;
export declare const RegularExpressionScalar: string;
export declare const OKGScalarDefinitions: string[];
