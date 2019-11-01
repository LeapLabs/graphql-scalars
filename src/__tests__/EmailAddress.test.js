/* global describe, test, expect */

import { Kind } from 'graphql/language';

import { EmailAddress, EmailAddressWithTLD } from '..';

describe('EmailAddress', () => {
  describe('valid', () => {
    test('serialize', () => {
      expect(EmailAddress.serialize('test@test.com')).toBe('test@test.com');
    });

    test('serialize', () => {
      expect(EmailAddress.serialize('test@localDomain')).toBe(
        'test@localDomain',
      );
    });

    test('parseValue', () => {
      expect(EmailAddress.parseValue('test@test.com')).toBe('test@test.com');
    });

    test('parseValue', () => {
      expect(EmailAddress.parseValue('test@localDomain')).toBe(
        'test@localDomain',
      );
    });

    test('parseLiteral', () => {
      expect(
        EmailAddress.parseLiteral({
          value: 'test@test.com',
          kind: Kind.STRING,
        }),
      ).toBe('test@test.com');
    });
  });

  describe('invalid', () => {
    describe('not an email address', () => {
      test('serialize', () => {
        expect(() =>
          EmailAddress.serialize('this is not an email address'),
        ).toThrow(/Value is not a valid email address/);

        expect(() =>
          EmailAddress.serialize('utf8charslikešė@gmail.com'),
        ).toThrow(/Value is not a valid email address/);
      });

      test('parseValue', () => {
        expect(() =>
          EmailAddress.parseValue('this is not an email address'),
        ).toThrow(/Value is not a valid email address/);

        expect(() =>
          EmailAddress.parseValue('utf8charslikešė@gmail.com'),
        ).toThrow(/Value is not a valid email address/);
      });

      test('parseLiteral', () => {
        expect(() =>
          EmailAddress.parseLiteral({
            value: 'this is not an email address',
            kind: Kind.STRING,
          }),
        ).toThrow(/Value is not a valid email address/);
      });
    });

    describe('no TLD', () => {
      test('serialize', () => {
        expect(() =>
          EmailAddressWithTLD.serialize('test@localDomains'),
        ).toThrow(/Value is not a valid email address/);

        expect(() => EmailAddressWithTLD.serialize('test@notTLD.')).toThrow(
          /Value is not a valid email address/,
        );

        expect(() =>
          EmailAddressWithTLD.serialize('utf8charslikešė@gmail.com'),
        ).toThrow(/Value is not a valid email address/);
      });

      test('parseValue', () => {
        expect(() =>
          EmailAddressWithTLD.parseValue('test@localDomain'),
        ).toThrow(/Value is not a valid email address/);

        expect(() => EmailAddressWithTLD.parseValue('test@notTLD.')).toThrow(
          /Value is not a valid email address/,
        );

        expect(() =>
          EmailAddressWithTLD.parseValue('utf8charslikešė@gmail.com'),
        ).toThrow(/Value is not a valid email address/);
      });
    });

    describe('not a string', () => {
      test('serialize', () => {
        expect(() => EmailAddress.serialize(123)).toThrow(
          /Value is not string/,
        );
      });

      test('parseValue', () => {
        expect(() => EmailAddress.parseValue(123)).toThrow(
          /Value is not string/,
        );
      });

      test('parseLiteral', () => {
        expect(() =>
          EmailAddress.parseLiteral({ value: 123, kind: Kind.INT }),
        ).toThrow(/Can only validate strings as email addresses but got a/);
      });
    });
  });
});
