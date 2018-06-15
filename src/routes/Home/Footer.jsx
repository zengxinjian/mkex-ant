import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Footer extends React.Component {

  static defaultProps = {
    className: 'footer0',
  };

  constructor(props) {
    super(props);
  }

  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;

    const mouseOver = () => {
      this.setState({ animation: { scale: '1.3' } })
    }
    const mouseOut = () => {
      this.setState({ animation: { scale: '1' } })
    }

    // 手机端
    const phoneEnd = ()=>(
      <div className="footer-content">
        <img src={require(`../../assets/bottomLogo.png`)} />
        <div className="iconContent">
          <img src={require(`../../assets/footer_icon1.png`)} />
          <img src={require(`../../assets/footer_icon2.png`)} />
          <img src={require(`../../assets/footer_icon3.png`)} />
        </div>
        <div className="copyright">Copyright @ 2017-2018 MKEX.com. All rights reserved</div>
      </div>
    )
    // PC端
    const pcEnd = ()=>(
      <div className={`${props.className}-wrapper content-template`} key='footer'>
    const phoneEnd = () =>(
      <div>
        <TweenOne
          animation={{ y: '+=30', opacity: 0, type: 'from' }}
          key="footer-img"
          className="bottomContent"
          component="div"
        >
          <img src={require(`../../assets/bottomLogo.png`)} />
        </TweenOne>
        <TweenOne
          animation={{ y: '+=30', opacity: 0, type: 'from' }}
          key="footer-icon"
          component="div"
        >
        <div className="iconContent">
            <img src={require(`../../assets/phone/footer_icon1.png`)} />
            <img src={require(`../../assets/phone/footer_icon2.png`)} />
            <img src={require(`../../assets/phone/footer_icon3.png`)} />
        </div>
        </TweenOne>
        <TweenOne
          animation={{ y: '+=30', opacity: 0, type: 'from' }}
          key="footer-text"
          className="bottomContent"
          component="div"
        >
          <div className="copyright">Copyright @ 2017-2018 MKEX.com. All rights reserved</div>
        </TweenOne>
      </div>
    )

    return (<OverPack
      {...props}
      playScale={0.05}
    >
      <div className={`${props.className}-wrapper content-template`} key='footer'>
        {isMobile ? phoneEnd() : pcEnd()}
      </div>
    </OverPack>);
  }
}

export default Footer;
