import type { ExtractStatusResponse } from '../types'

export function safeParseBearerToken(response: any): string {
  if (response?.access_token && typeof response.access_token === 'string')
    return response.access_token
  throw new Error('Incorrect response format; unable to parse token')
}

export function safeParseStartDataExtract(response: any): string {
  if (response && typeof response === 'string') return response
  throw new Error('Incorrect response format; unable to parse Job ID')
}

export function safeDataExtractStatusResponse(
  response: any
): ExtractStatusResponse {
  if (
    'jobStatus' in response &&
    'id' in response.jobStatus &&
    typeof response.jobStatus.id === 'string' &&
    'status' in response.jobStatus &&
    typeof response.jobStatus.status === 'string' &&
    'result' in response.jobStatus &&
    'url' in response.jobStatus.result &&
    typeof response.jobStatus.result.url === 'string' &&
    'messageError' in response.jobStatus.result
  )
    return response
  throw new Error(
    'Incorrect response format; unable to parse extract status response'
  )
}
