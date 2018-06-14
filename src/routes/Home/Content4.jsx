import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static defaultProps = {
    className: 'content1',
  };

  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;
    const animType = {
      queue: isMobile ? 'bottom' : 'left',
      one: isMobile ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '+=30', opacity: 0, type: 'from' },
    };
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <QueueAnim
            type={animType.queue}
            className={`${props.className}-text`}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${props.id}-title`}>
              积分价值
            </h1>
            <p key="p" id={`${props.id}-content`}>
              MIEX积分是基于以太坊技术实现的ERC20合约代币，未来MKEX会是基于自身主网发行的区块链数字资产。
              它可以实现价值信息流转，也是基金会的权益积分。
              MKEX平台作为一家专业的数字资产交易与管理平台，将以为投资人提供综合性投资服务以及交易平台为宗旨，推动区块链行业发展。
              MKEX平台推出的MK积分，发行总量恒定为100亿个，且保证永不增发
            </p>
          </QueueAnim>
          
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`}>
              <img width="100%" src={require('../../assets/images/integralvalue.png')} />
            </span>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Content;
