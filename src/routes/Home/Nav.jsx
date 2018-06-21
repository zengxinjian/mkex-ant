import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import { Menu, Button } from 'antd';

const Item = Menu.Item;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
    };
  }

  phoneClick = () => {
    this.setState({
      phoneOpen: !this.state.phoneOpen,
    });
  }

  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;
    const navData = { menu1: '交易中心', menu2: '创新交易', menu3: '资产管理', menu4: '个人中心' };;
    const navChildren = Object.keys(navData)
      .map((key, i) => (<Item key={i}>{navData[key]}</Item>));
    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...props}
    >
      <div className={`${this.props.className} content-template`}>
        <TweenOne
          className={`${this.props.className}-logo`}
          animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
          id={`${this.props.id}-logo`}
        >
          <img width="100%" src={require(`../../assets/images/WAP/mkex-wap_26.png`)} />
        </TweenOne>
        {isMobile ? (<div
          className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
          id={`${this.props.id}-menu`}
        >
          <div
            className={`${this.props.className}-phone-nav-bar`}
            onClick={() => {
              this.phoneClick();
            }}
          >
            <em />
            <em />
            <em />
          </div>
          <div
            className={`${this.props.className}-phone-nav-text`}
          >
            <Menu
              defaultSelectedKeys={['0']}
              mode="inline"
              theme="dark"
            >
              {navChildren}
            </Menu>
          </div>
        </div>) : (<TweenOne
          className={`${this.props.className}-nav`}
          animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
        >
          <Menu
            mode="horizontal" defaultSelectedKeys={['0']}
            id={`${this.props.id}-menu`}
          >
            {navChildren}
          </Menu>
        </TweenOne>)}
        {isMobile ? <span/> : <TweenOne className="userLogin">
          <Button type="ghost" key="login" id={`${props.id}-login`}>
            登录
          </Button>
          <Button type="ghost" key="register" id={`${props.id}-register`}>
            注册
          </Button>
        </TweenOne>}

      </div>
    </TweenOne>);
  }
}

Header.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.object,
  id: PropTypes.string,
};

Header.defaultProps = {
  className: 'header0',
};

export default Header;
