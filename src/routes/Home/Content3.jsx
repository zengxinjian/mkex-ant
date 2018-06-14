import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static defaultProps = {
    className: 'content2',
  };

  getDelay = e => e % 3 * 100 + Math.floor(e / 3) * 100 + 300;

  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;
    const oneAnim = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    //数据源
    const blockArray = [
      { img: require('../../assets/images/资产安全.png'), content: '保护资产，安全高效' },
      { img: require('../../assets/images/融合交易.png'), content: '融合碎片化交易' },
      { img: require('../../assets/images/孵化院.png'), content: 'LABS孵化&研究院' },
      { img: require('../../assets/images/数字资产.png'), content: '数字资产管理与托管' },
      { img: require('../../assets/images/多客户端.png'), content: '多语言与全平台客户端支持' },
      { img: require('../../assets/images/合伙人.png'), content: '全球合伙人计划' },
    ];

    //图片列表
    const children = blockArray.map((item, i) => {
      const id = `block${i}`;
      const delay = this.getDelay(i);
      const liAnim = { opacity: 0, type: 'from', ease: 'easeOutQuad', delay };
      const childrenAnim = { ...liAnim, x: '+=10', delay: delay + 100, };
      return (
        <TweenOne
          component="li"
          animation={liAnim}
          key={i}
          id={`${props.id}-${id}`}
        >
          <TweenOne
            animation={{ x: '-=10', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
            className="img"
            key="img">
            <img src={item.img} width="100%" />
          </TweenOne>

          <div className="text">
            <TweenOne key="p" animation={{ ...childrenAnim, delay: delay + 200 }} component="p">
              {item.content}
            </TweenOne>
          </div>
        </TweenOne>
      );
    });

    const phoneEnd = () => (
      <div>
        <TweenOne
          key="h1"
          animation={oneAnim}
          component="h1"
          id={`${props.id}-title`}
          reverseDelay={100}>
          <div>
            <img src={require("../../assets/images/left.png")} />
            <span>FUNCTIONAL INTRODUCTION</span>
            <img src={require("../../assets/images/right.png")} />
          </div>
        <p>功能介绍</p>
        </TweenOne>
        <QueueAnim
          key="ul"
          type="bottom"
          className={`${props.className}-contentWrapper`}
          id={`${props.id}-contentWrapper`}
        >
          <ul key="ul">
            {children}
          </ul>
        </QueueAnim>
      </div>
    )

    const pcEnd = () => (
      <div>
        <TweenOne
          key="h1"
          animation={oneAnim}
          component="h1"
          id={`${props.id}-title`}
          reverseDelay={100}>
          <div>
            <img src={require("../../assets/images/left.png")} />
            <span>FUNCTIONAL INTRODUCTION</span>
            <img src={require("../../assets/images/right.png")} />
          </div>
        </TweenOne>

        <QueueAnim
          key="ul"
          type="bottom"
          className={`${props.className}-contentWrapper`}
          id={`${props.id}-contentWrapper`}
        >
          <ul key="ul">
            {children}
          </ul>
        </QueueAnim>
      </div>
    )

    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          {isMobile ? phoneEnd() : pcEnd()}
        </OverPack>
      </div>
    );
  }
}


export default Content;
