import DataItem, { DataItemDivider, DataItemGroup } from '@/components/common/DataItem'
import Image from '@/components/common/Image'
import Modal from '@/components/common/Modal'
import Stepper from '@/components/common/Stepper'
import { BASE_TOKEN } from '@/config/tokens'
import { useBalances } from '@/hooks/useBalances'
import { keepDecimals } from '@/utils/tools'
import { useEffect, useMemo, useState } from 'react'
import { useAccount } from 'wagmi'

interface Props {
  visible: boolean
  onCancel: () => void
}

function Investment({ visible, onCancel }: Props) {
  const [stepper, setStepper] = useState<number>(1)
  const { address } = useAccount()
  const { balances } = useBalances(address)

  const payment = useMemo(() => stepper * 10, [stepper])

  const disabled = useMemo(() => {
    const balance = Number(balances?.[BASE_TOKEN.symbol] ?? 0)
    return balance === 0 || payment > 0 || payment === 0 || balance < payment
  }, [balances, payment])

  useEffect(() => {
    if (!visible) setStepper(1)
  }, [visible])

  return (
    <Modal okText="确认" title="确认下注" okDisabled={disabled} visible={visible} onCancel={onCancel}>
      <section className="libra-investment-confirm">
        <div className="libra-investment-confirm-content">
          <div className="left">
            <p>朝鲜半岛是否会爆发战争朝鲜半岛是否会爆发战争...</p>
            <div>
              <label>您已选择</label>
              <span>不会</span>
            </div>
          </div>
          <Image />
        </div>
        <DataItemGroup>
          <DataItem label="数量">
            <Stepper max={100} min={1} suffix="$" value={stepper} onChange={setStepper} />
          </DataItem>
          <DataItem label="支付">
            {keepDecimals(payment, BASE_TOKEN.decimals)} {BASE_TOKEN.symbol}
          </DataItem>
          <DataItemDivider />
          <DataItem label="Wallet Balance">
            {keepDecimals(balances?.[BASE_TOKEN.symbol] ?? 0, BASE_TOKEN.decimals)} {BASE_TOKEN.symbol}
          </DataItem>
          <DataItem label="预估获得">1 {BASE_TOKEN.symbol}</DataItem>
        </DataItemGroup>
      </section>
    </Modal>
  )
}

export default Investment
