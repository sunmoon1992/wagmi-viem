import { Comment, Avatar, Space, Divider } from "@arco-design/web-react";
import Null from "@/components/common/Null";
import { IconFindReplace } from "@arco-design/web-react/icon";

// We couldn't find anything with this criteria
export default function Notification() {
  return (
    <section className='xyz-notification'>
      <Null icon={<IconFindReplace />} description="Nothing found" />
      <Space direction='vertical' size='mini'>
        <Comment
          align='right'
          author='系统通知'
          avatar={
            <Avatar>
              <img
                alt='avatar'
                src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp'
              />
            </Avatar>
          }
          content={
            <div>
              A design is a plan or specification for the construction of an object or system or for the
              implementation of an activity or process, or the result of that plan or specification in
              the form of a prototype, product or process.
            </div>
          }
          datetime='1 hour'
        />
        <Divider />
        <Comment
          align='right'
          author='系统通知'
          avatar={
            <Avatar>
              <img
                alt='avatar'
                src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp'
              />
            </Avatar>
          }
          content={
            <div>
              A design is a plan or specification for the construction of an object or system or for the
              implementation of an activity or process, or the result of that plan or specification in
              the form of a prototype, product or process.
            </div>
          }
          datetime='1 hour'
        />
        <Divider />
        <Comment
          align='right'
          author='系统通知'
          avatar={
            <Avatar>
              <img
                alt='avatar'
                src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp'
              />
            </Avatar>
          }
          content={
            <div>
              A design is a plan or specification for the construction of an object or system or for the
              implementation of an activity or process, or the result of that plan or specification in
              the form of a prototype, product or process.
            </div>
          }
          datetime='1 hour'
        />
      </Space>
    </section>
  )
}