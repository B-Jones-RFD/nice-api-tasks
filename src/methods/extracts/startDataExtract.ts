import type { Action } from '../../types'
import { safeParseStartDataExtract } from '../../utils/parsers'
import { execute } from '../../nice'

/**
 *  Start Data Extract
 *
 * Prepares requested data for extraction.
 * @see https://developer.niceincontact.com/API/DataExtractionAPI#/ExtractingData/extractData
 */
export const startDataExtract: Action<
  {
    entityName: string
    version: string
    startDate: string
    endDate: string
    accessToken: string
  },
  string
> = async ({ entityName, version, startDate, endDate, accessToken }) => {
  const route = '/data-extraction/v1/jobs'

  const headers = new Headers({
    Authorization: `Bearer ${accessToken}`,
  })
  const body = JSON.stringify({
    entityName,
    version,
    startDate,
    endDate,
  })
  const response = await execute({
    route,
    headers,
    body,
  })
  const result = safeParseStartDataExtract(response)
  return result
}
