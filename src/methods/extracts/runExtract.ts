import type { Action, ExtractStatusResponse } from '../../types'
import { poll } from '../../utils/poll'
import { startExtract } from './startExtract'
import { getExtractStatus } from './getExtractStatus'

/**
 *  Start Data Extract
 *
 * Runs data extract until completion.
 * @see https://developer.niceincontact.com/API/DataExtractionAPI#
 */
export const runExtract: Action<
  {
    entityName: string
    version: string
    startDate: string
    endDate: string
    accessToken: string
  },
  ExtractStatusResponse
> = async (options) => {
  const jobId = await startExtract(options)
  const result = await poll<ExtractStatusResponse>({
    fn: async () =>
      await getExtractStatus({ jobId, accessToken: options.accessToken }),
    validate: (res) => res && res.jobStatus.status !== 'RUNNING',
    maxAttempts: 30,
    interval: 1000,
  })
  return result
}
