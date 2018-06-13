import React, { PropTypes } from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {
  render() {
    const props = { ...this.props };
    delete props.isMobile;
    return (
      <OverPack
        replay
        playScale={0.8}
        {...props}
      >
        <div className={`${props.className}-wrapper content-template`} key="banner">
          <QueueAnim
            type={['bottom', 'top']}
            delay={200}
            key="text"
            className="leftTextContent"
            id={`${props.id}-wrapper`}
          >
          <span
            className="title"
            key="title"
            id={`${props.id}-title`}
          >
            倾力打造全球化的区块链资产交易平台
          </span>
            <p
              key="content"
              id={`${props.id}-content`}
            >
              提供全流程、易操作、高信任保障的区块链数字资产交易和托管服务
            </p>
            <Button type="ghost" key="button" id={`${props.id}-button`}>
              前往交易
            </Button>
          </QueueAnim>
          <TweenOne
             animation={{ y: '+=30', opacity: 0, type: 'from' }}
             key="footer-img"
             className="rightTextContent"
             component="div">

          </TweenOne>
        </div>
      </OverPack>
    );
  }
}

Content.propTypes = {
  className: PropTypes.string,
};

Content.defaultProps = {
  className: 'banner0',
};

export default Content;
