export interface RpcNodeState {
  loaded: boolean
  fetch: () => Promise<void>
}
