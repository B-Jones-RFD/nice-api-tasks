export type Action<TConfig, TResponse> = (
  options: TConfig
) => Promise<TResponse>

export type ExtractStatusResponse = {
  jobStatus: {
    id: string
    status: string
    result: {
      url: string
      messageError: string | null
    }
  }
}
