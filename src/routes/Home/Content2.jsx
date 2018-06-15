import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {
  static defaultProps = {
    className: 'content0',
  };

  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;
    const animType = {
      queue: isMobile ? 'bottom' : 'right',
      one: isMobile ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '-=30', opacity: 0, type: 'from' },
    }

    const phoneEnd = () => (
      <div className="phone-content2" key="phoneEnd">
        <TweenOne
          animation={{ y: '+=30', opacity: 0, type: 'from' }}
          component="h1"
          key="h1"
          reverseDelay={300}
          id={`${props.id}-title`}
        >
          <div>
          <img src={require("../../assets/images/left.png")} />
          <span>ABOUT US</span>
          <img src={require("../../assets/images/right.png")} />
          </div>
          </TweenOne>
        <QueueAnim
          type="bottom"
          key="p"
          className={`${props.className}-content`}
          id={`${props.id}-content`}  >
          <p>
          MKEX是一家注册在香港的公司，并且在韩国、日本等多个国家与地区设立子公司与办事处。MKEX是由韩国、日本等多个国家及领域的顶级人才构成的精英团队倾力打造的点对点数字资产交易平台。致力于为数字资产投资用户提供安全、高效、开放的，涵盖全流程的、具备高信任保障的区块链数字资产交易和托管服务。
          </p>
        </QueueAnim>
      </div>
    )

    const pcEnd = () => (
      <div key="pcEnd" className="pcContent">
        <TweenOne
          animation={{ y: '+=30', opacity: 0, type: 'from' }}
          component="h1"
          key="h1"
          reverseDelay={300}
          id={`${props.id}-title`}
        >
          <div className="titleName">
            <img className="titleLeft" src={require(`../../assets/images/left.png`)} />
            <label className="title">ABOUT US</label>
            <img className="titleRight" src={require(`../../assets/images/right.png`)} />
          </div>
        </TweenOne>

        <QueueAnim
          type="bottom"
          key="p"
          className={`${props.className}-content`}
          id={`${props.id}-content`}  >
          <p>
            是一家注册在香港的公司，并且在韩国、日本等多个国家与地区设立子公司与办事处。<br />
            MKEX是由韩国、日本等多个国家及领域的顶级人才构成的精英团队倾力打造的点对点数字资产交易平台。<br />
            致力于为数字资产投资用户提供安全、高效、开放的、涵盖全流程的、具备高信任保障的区块链数字资产交易和托管服务。
          </p>
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
