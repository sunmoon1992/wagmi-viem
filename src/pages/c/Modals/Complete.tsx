import Image from '@/components/Image'
import Modal from '@/components/Modal'
import { EXPLORER_SCAN_URL, MEDIA_LINKS, ZERO } from '@/config'
import { hideString } from '@/utils/tools'

interface Props {
  visible: boolean
  onCancel: () => void
}

function Complete({ visible, onCancel }: Props) {
  return (
    <Modal footer={null} visible={visible} onCancel={onCancel}>
      <dl className="libra-investment-complete">
        <dt>
          <h4>Complete! 🎉</h4>
          <p>恭喜下注成功</p>
        </dt>
        <dd>
          <section>
            <span>信息</span>
            <span>
              <a href={`${EXPLORER_SCAN_URL}/tx/${'txid'}`} target="_blank" rel="noreferrer">
                在Etherscan上查看
              </a>
            </span>
          </section>
          <section>
            <span>ID</span>
            <span>{hideString(ZERO, 10, 5)}</span>
          </section>
        </dd>
        <dd>
          <p>关注我们</p>
          <div>
            <a href={MEDIA_LINKS.tw} target="_blank" rel="noreferrer">
              <Image src="tw.svg" alt="" />
            </a>
            <a href={MEDIA_LINKS.tg} target="_blank" rel="noreferrer">
              <Image src="tg.svg" alt="" />
            </a>
            <a href={MEDIA_LINKS.dc} target="_blank" rel="noreferrer">
              <Image src="dc.svg" alt="" />
            </a>
          </div>
        </dd>
      </dl>
    </Modal>
  )
}

export default Complete
