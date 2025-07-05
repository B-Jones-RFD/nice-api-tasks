import type { Action } from '../types'
import { safeParseBearerToken } from '../utils/parsers'
import { execute } from '../nice'

/**
 * Get Bearer Token
 *
 * Implements OAuth2 Authentication
 * @see https://developer.niceincontact.com/API/AuthenticationAPI#/Token/getToken
 */
export const getToken: Action<
  {
    clientId: string
    clientSecret: string
    username: string
    password: string
  },
  string
> = async ({ clientId, clientSecret, username, password }) => {
  const route = `/auth/token`
  const headers = new Headers({
    'Content-type': 'application/x-www-form-urlencoded',
  })
  const body = new URLSearchParams({
    grant_type: 'password',
    client_id: clientId,
    client_secret: clientSecret,
    username,
    password,
  })

  const response = await execute({
    route,
    headers,
    body,
  })
  const result = safeParseBearerToken(response)
  return result
}
