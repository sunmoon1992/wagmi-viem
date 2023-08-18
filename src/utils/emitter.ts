import { EventEmitter } from 'fbemitter'

export default new EventEmitter()

export enum EventTypes {
  connectWallet = 'CONNECT_WALLET'
}
