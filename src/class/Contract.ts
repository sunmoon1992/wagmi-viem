import { _getAddress, addressCheck } from '@/class/Token'
import { ChainIdRec, ContractKeys } from '@/typings'

class Contract {
  readonly name: ContractKeys
  readonly address: ChainIdRec

  constructor(name: ContractKeys, address: ChainIdRec) {
    this.name = name
    this.address = Contract.checkAddress(address, name)
  }

  get contractAddress() {
    return _getAddress(this.address)
  }

  static checkAddress<T>(address: T, name: ContractKeys): T {
    let obj = Object.create(null)
    for (const key in address) {
      if (Object.prototype.hasOwnProperty.call(address, key)) {
        const check = addressCheck(String(address[key]), `${name}-${key}`)
        obj = { ...obj, [key]: check }
      }
    }
    return obj as T
  }
}

export default Contract
