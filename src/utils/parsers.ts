export function safeParseBearerToken(response: any): string {
  if (response?.access_token && typeof response.access_token === 'string')
    return response.access_token
  throw new Error('Incorrect response format; unable to parse token')
}

export function safeParseStartDataExtract(response: any): string {
  if (response && typeof response === 'string') return response
  throw new Error('Incorrect response format; unable to parse Job ID')
}
