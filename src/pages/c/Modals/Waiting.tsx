import Image from '@/components/Image'
import Modal from '@/components/Modal'

interface Props {
  visible: boolean
  onCancel: () => void
}

function Waiting({ visible, onCancel }: Props) {
  return (
    <Modal title="正在等待确认" footer={null} visible={visible} onCancel={onCancel}>
      <dl className="libra-tx-waiting">
        <dt>
          <Image src="waiting.svg" alt="" />
        </dt>
        <dd>
          <p>确认中</p>
          <span>Send transaction with your wallet</span>
        </dd>
      </dl>
    </Modal>
  )
}

export default Waiting
