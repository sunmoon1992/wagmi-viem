// @ts-nocheck
import contracts from '@/config/contracts'
import { useAirdrop } from '@/hooks/useAirdrop'
import { useBalances } from '@/hooks/useBalances'
import Index from '@/pages/c/Wallet'
import {
  contractApprove,
  estimateContractGas,
  readContract,
  simulateContract,
  waitForTransaction,
  watchPendingTransactions,
  writeContract
} from '@/utils/callFuncHelpers'
import { Button } from '@arco-design/web-react'
import { useBoolean } from 'ahooks'
import { useTranslation } from 'react-i18next'
import { EstimateContractGasParameters, ReadContractParameters, SimulateContractParameters } from 'viem'
import { WatchPendingTransactionsParameters } from 'viem/dist/types/actions/public/watchPendingTransactions'
import { useAccount, useWalletClient } from 'wagmi'

function Home() {
  const { t } = useTranslation()
  const { address } = useAccount()
  const { data: wc } = useWalletClient()
  const { claim } = useAirdrop()
  const { balances } = useBalances(address)
  const [v1, { setTrue: setTrue1, setFalse: setFalse1 }] = useBoolean(false)
  const [v2, { setTrue: setTrue2, setFalse: setFalse2 }] = useBoolean(false)
  const [v3, { setTrue: setTrue3, setFalse: setFalse3 }] = useBoolean(false)
  const [v4, { setTrue: setTrue4, setFalse: setFalse4 }] = useBoolean(false)
  // console.info(balances)
  // console.info(import.meta.env)
  // console.info(parseUnits(1.99999999999911))
  // console.info(formatUnits(10000000100000001000000010000000n, 8))
  // console.info(publicClient)

  const f1 = async () => {
    // await claim(address)
    await contractApprove({
      account: address,
      address: '0x51BfCD546e0328cAdaa86D696B472505082b76fd',
      abi: [
        {
          inputs: [],
          stateMutability: 'nonpayable',
          type: 'constructor'
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'approved',
              type: 'address'
            },
            {
              indexed: true,
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'Approval',
          type: 'event'
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'operator',
              type: 'address'
            },
            {
              indexed: false,
              internalType: 'bool',
              name: 'approved',
              type: 'bool'
            }
          ],
          name: 'ApprovalForAll',
          type: 'event'
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'address',
              name: 'previousOwner',
              type: 'address'
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'newOwner',
              type: 'address'
            }
          ],
          name: 'OwnershipTransferred',
          type: 'event'
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: 'address',
              name: 'account',
              type: 'address'
            }
          ],
          name: 'Paused',
          type: 'event'
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              indexed: true,
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              indexed: true,
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'Transfer',
          type: 'event'
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: 'address',
              name: 'account',
              type: 'address'
            }
          ],
          name: 'Unpaused',
          type: 'event'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'approve',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            }
          ],
          name: 'balanceOf',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [],
          name: 'baseURI',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'bridgeMint',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'burn',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          name: 'descriptions',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [],
          name: 'genesisCounter',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [],
          name: 'genesisMaxTokenId',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'getApproved',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          name: 'images',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'operator',
              type: 'address'
            }
          ],
          name: 'isApprovedForAll',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'addr',
              type: 'address'
            }
          ],
          name: 'isKeeper',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'quantity',
              type: 'uint256'
            }
          ],
          name: 'mintGenesis',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'quantity',
              type: 'uint256'
            }
          ],
          name: 'mintOdyssey',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [],
          name: 'name',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [],
          name: 'odysseyCounter',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [],
          name: 'odysseyMaxTokenId',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [],
          name: 'odysseyStart',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [],
          name: 'owner',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'ownerOf',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [],
          name: 'pause',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [],
          name: 'paused',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'addr',
              type: 'address'
            }
          ],
          name: 'removeKeeper',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [],
          name: 'renounceOwnership',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'safeTransferFrom',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            },
            {
              internalType: 'bytes',
              name: 'data',
              type: 'bytes'
            }
          ],
          name: 'safeTransferFrom',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'operator',
              type: 'address'
            },
            {
              internalType: 'bool',
              name: 'approved',
              type: 'bool'
            }
          ],
          name: 'setApprovalForAll',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'string',
              name: '_baseURIPrefix',
              type: 'string'
            }
          ],
          name: 'setBaseURI',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'series',
              type: 'uint256'
            },
            {
              internalType: 'string',
              name: '_descriptions',
              type: 'string'
            }
          ],
          name: 'setDescriptions',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'series',
              type: 'uint256'
            },
            {
              internalType: 'string',
              name: '_images',
              type: 'string'
            }
          ],
          name: 'setImages',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'addr',
              type: 'address'
            }
          ],
          name: 'setKeeper',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'bytes4',
              name: 'interfaceId',
              type: 'bytes4'
            }
          ],
          name: 'supportsInterface',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [],
          name: 'symbol',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'tokenURI',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            }
          ],
          name: 'tokensOfOwner',
          outputs: [
            {
              internalType: 'uint256[]',
              name: '',
              type: 'uint256[]'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'start',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'stop',
              type: 'uint256'
            }
          ],
          name: 'tokensOfOwnerIn',
          outputs: [
            {
              internalType: 'uint256[]',
              name: '',
              type: 'uint256[]'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address'
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address'
            },
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'transferFrom',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'newOwner',
              type: 'address'
            }
          ],
          name: 'transferOwnership',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          inputs: [],
          name: 'unpause',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function'
        }
      ],
      args: [address, '0x1969e25cE4ab7040C16de994C813A0f01dCA7c5d']
    } as unknown as ReadContractParameters)
  }
  const f2 = async () => {
    try {
      if (!address || !wc) return
      const claimed = await readContract({
        address: contracts.airdrop.contractAddress,
        abi: [
          {
            inputs: [
              {
                internalType: 'address',
                name: '',
                type: 'address'
              }
            ],
            name: 'claimed',
            outputs: [
              {
                internalType: 'bool',
                name: '',
                type: 'bool'
              }
            ],
            stateMutability: 'view',
            type: 'function'
          }
        ],
        functionName: 'claimed',
        args: [address]
      } as unknown as ReadContractParameters)
      console.info(`claimed:`, claimed)

      const gas = await estimateContractGas({
        address: contracts.airdrop.contractAddress,
        abi: [
          {
            inputs: [],
            name: 'claim',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function'
          }
        ],
        functionName: 'claim',
        account: address,
        value: 0n
      } as unknown as EstimateContractGasParameters)
      console.info(`gas:`, gas)

      const { request } = await simulateContract({
        address: contracts.airdrop.contractAddress,
        abi: [
          {
            inputs: [],
            name: 'claim',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function'
          }
        ],
        functionName: 'claim',
        account: address
      } as unknown as SimulateContractParameters)
      console.info(request)

      const hash = await writeContract(request)
      const receipt = await waitForTransaction({ hash })
      console.info(receipt)
    } catch (e) {
      console.info(e)
    }
  }
  const f3 = () => {
    try {
      watchPendingTransactions({
        onError: (_err) => console.log(_err),
        onTransactions: (hashes) => console.log(hashes)
      } as unknown as WatchPendingTransactionsParameters)
    } catch (e) {
      console.info(e)
    }
  }

  // i18n.changeLanguage('en')

  return (
    <div>
      <h3>Connect Wallet:</h3>
      <Index />
      <Button>button</Button>
    </div>
  )
}

export default Home
