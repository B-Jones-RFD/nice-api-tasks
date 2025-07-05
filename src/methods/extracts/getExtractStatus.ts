import type { Action, ExtractStatusResponse } from '../../types'
import { safeDataExtractStatusResponse } from '../../utils/parsers'
import { execute } from '../../nice'

/**
 * Get Extract Status
 *
 * Gets status of extract job.
 * @see https://developer.niceincontact.com/API/DataExtractionAPI#/ExtractingData/extractData
 */
export const getExtractStatus: Action<
  {
    jobId: string
    accessToken: string
  },
  ExtractStatusResponse
> = async ({ jobId, accessToken }) => {
  const route = `/data-extraction/v1/jobs/${jobId}`

  const headers = new Headers({
    Authorization: `Bearer ${accessToken}`,
  })

  const response = await execute({
    route,
    headers,
  })

  const result = safeDataExtractStatusResponse(response)
  return result
}
