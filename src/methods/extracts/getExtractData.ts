import type { Action } from '../../types'
import { runExtract } from './runExtract'

/**
 *  Get Extract Date
 *
 * Runs data extract until completion and returns file text
 * @see https://developer.niceincontact.com/API/DataExtractionAPI#
 */
export const getExtractData: Action<
  {
    entityName: string
    version: string
    startDate: string
    endDate: string
    accessToken: string
  },
  string
> = async (options) => {
  const finalStatus = await runExtract(options)
  if (finalStatus.jobStatus.status !== 'SUCCEEDED') {
    throw new Error(
      finalStatus.jobStatus.result.messageError ??
        'Data extract failed with an unknown error'
    )
  }
  const url = finalStatus.jobStatus.result.url
  const res = await fetch(url)
  if (!res.ok) {
    const message = await res.text()
    throw new Error(message)
  }
  if (!res.body) {
    throw new Error('No data returned from file URL')
  }
  const content = await res.text()
  return content
}
