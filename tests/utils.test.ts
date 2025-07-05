import { describe, it, expect } from 'vitest'

import {
  safeParseBearerToken,
  safeParseStartDataExtract,
} from '../src/utils/parsers'

describe('safeParseBearerToken', () => {
  const fixture = {
    access_token: 'sometoken',
    token_type: 'Bearer',
  }

  it('should pass with correct data', () => {
    const res = fixture
    const expected = fixture.access_token
    const parsed = safeParseBearerToken(res)
    expect(parsed).toStrictEqual(expected)
  })

  it('should fail when token is incorrect type', () => {
    const res = {
      result: 'bad result',
    }
    expect(() => safeParseBearerToken(res)).toThrowError(
      'Incorrect response format; unable to parse token'
    )
  })
})

describe('safeParseStartDataExtract', () => {
  const fixture = 'someJobId'

  it('should pass with correct data', () => {
    const res = fixture
    const expected = fixture
    const parsed = safeParseStartDataExtract(res)
    expect(parsed).toStrictEqual(expected)
  })

  it('should fail when token is incorrect type', () => {
    const res = undefined
    expect(() => safeParseStartDataExtract(res)).toThrowError(
      'Incorrect response format; unable to parse Job ID'
    )
  })
})
