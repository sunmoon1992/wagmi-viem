import { Button, Grid, Input } from '@arco-design/web-react'
import { useToggle } from 'ahooks'
import { motion } from 'framer-motion'

const { Row, Col } = Grid

export const Advanced = () => {
  const [state, { toggle }] = useToggle(false)
  return (
    <div className="advanced">
      <Button size="large" onClick={toggle}>
        {state ? 'Hide Advanced Settings' : 'Show Advanced Settings'}
      </Button>
      <section>
        <motion.div
          className="motion-div"
          initial={{ height: 0 }}
          animate={{ height: state ? 'auto' : 0 }}
          transition={{ duration: 0.075 }}
        >
          <div>
            <label htmlFor="Properties">Properties</label>
            <Row gutter={24}>
              <Col span={12}>
                <Input />
              </Col>
              <Col span={12}>
                <Input />
              </Col>
            </Row>
          </div>
          <div>
            <label htmlFor="Alternative">Alternative text for NFT</label>
            <Input />
            <p>
              <small>Text that will be used in VoiceOver for people with disabilities</small>
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
