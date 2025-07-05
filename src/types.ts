export type Action<TConfig, TResponse> = (
  options: TConfig
) => Promise<TResponse>