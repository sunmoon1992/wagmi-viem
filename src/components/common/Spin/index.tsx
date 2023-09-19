import Image from '@/components/common/Image'
import * as classNames from 'classnames'

function Spin({ position }: { position: string }) {
  const icon = position === 'fixed' ? 'waiting' : 'loading'
  return (
    <div className={classNames('libra-loading-wrap', { [position]: position })}>
      <Image className="libra-icon-loading" src={`${icon}.svg`} alt="" />
    </div>
  )
}

Spin.defaultProps = {
  position: 'absolute'
}

export default Spin
