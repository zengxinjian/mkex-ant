import React, { PropTypes } from 'react';
import { Button, Icon } from 'antd';
import BannerAnim, { Element } from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
TweenOne.plugins.push(SvgMorphPlugin);


class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      paused: true,
      animation: []
    }
  }

  render() {
    const props = { ...this.props };
    const { paused, animation } = this.state;
    const isMobile = props.isMobile;
    delete props.isMobile;

    const animations = [
      { scale: 0.7 },
      { scale: 1 },
      { repeat: true }
    ];
    const { Element } = BannerAnim;
    const BgElement = Element.BgElement;

    const mouseOver = () => {
      1
      this.setState({
        paused: false
      })
      // console.log(paused)
    }
    const mouseOut = () => {
      this.setState({
        paused: true
      })
      // console.log(paused)
    }

    // 手机端
    const phoneEnd = ()=>(
      <div className={`${props.className}-wrapper content-template`} key="banner">
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
          key="text"
          className="leftTextContent"
          id={`${props.id}-wrapper`}
        >
          <img src={require(`../../assets/phone/main_font.png`)} width='90%'></img>
          <Button type="ghost" key="button" id={`${props.id}-button`}>
            前往交易
          </Button>
        </QueueAnim>
      </div>
    );
    // PC端
    const pcEnd = ()=>(
      <div className={`${props.className}-wrapper content-template`} key="banner">
        <BannerAnim type="across">
          <Element key="aaa"
             prefixCls="banner-user-elem"
             followParallax={{
               delay: 1000,
               data: [
                 { id: 'title', value: -20, type: 'x' },
                 { id: 'queue', value: 50, type: 'x' },
                 { id: 'JText', value: 0, type: 'x' },
               ],
             }}
          >
            <QueueAnim id="queue" key="queue" className="leftTextContent">
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
            </QueueAnim>
            <TweenOne id="JText" className="leftTextContent">
              <Button type="ghost" key="button" id={`${props.id}-button`}>
                前往交易
              </Button>
            </TweenOne>
          </Element>
        </BannerAnim>

        <div onMouseOver={mouseOver} onMouseOut={mouseOut}>
          <TweenOne
            animation={animations}
            paused={false}
            key="footer-img"
            className="rightTextContent"
            component="div">
            <div>
              <h2>公告/Notice</h2>
              <p>Etherium Classic (ETC) 暂停和退出说明 (正常化完成)</p>
              <p>WC币火热上线"王牌交易员"活动全新开启</p>
              <p>Etherium Classic (ETC) 暂停和退出说明 (正常化完成)</p>
              <p>WC币火热上线"王牌交易员"活动全新开启</p>
              <p>Etherium Classic (ETC) 暂停和退出说明 (正常化完成)</p>
              <span>更多...</span>
            </div>
          </TweenOne>
        </div>
      </div>
    )

    return (
      <OverPack
        replay
        playScale={0.7}
        {...props}
      >
        { isMobile ? phoneEnd() : pcEnd() }
      </OverPack>
    );
  }
}

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

Content.defaultProps = {
  className: 'banner0',
};

export default Content;
