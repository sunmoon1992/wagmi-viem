import Image from '@/components/Image'
import * as classNames from 'classnames'

function Spin({ position }) {
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
