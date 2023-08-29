import Image from '@/components/common/Image'
import Modal from '@/components/common/Modal'

interface Props {
  visible: boolean
  onCancel: () => void
}

function Failure({ visible, onCancel }: Props) {
  return (
    <Modal okText="重新下注" visible={visible} onCancel={onCancel}>
      <section className="libra-investment-failure">
        <Image src="failure.svg" alt="" />
        <p>下注失败</p>
      </section>
    </Modal>
  )
}

export default Failure
