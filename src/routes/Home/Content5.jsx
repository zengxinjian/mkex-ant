import React from 'react';
import PropTypes from 'prop-types';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;

class Content extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'content4',
  };

  getChildrenToRender = (item, i) => {
    const id = `block${i}`;
    return (<li
      key={i}
      id={`${this.props.id}-${id}`}
    >
      <div className="content-wrapper">
        <span><img src={item.img} height="100%" /></span>
        <h3>{item.title}</h3>
        <p>{item.content}</p>
      </div>
    </li>);
  }
  getDelay = e => e % 3 * 100 + Math.floor(e / 3) * 100 + 300;
  getEnterAnim = (e, isMobile) => {
    const index = e.index;
    const delay = isMobile ? index * 50 + 200 : index % 4 * 100 + Math.floor(index / 4) * 100 + 300;
    return { y: '+=30', opacity: 0, type: 'from', delay };
  };

  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;
    const dataArray = [
      { img: require('../../assets/images/WAP/mkex-wap_29.png'), title: "손철원", content: '前 Miss Lee Messenger 代表，与中证一起开创韩国交易所的成员，从1997年开始参与过多款证券Messenger如KYOBO证券、东洋证券、SK证券以及三星 FN Messenger等的开发及服务，在区块链数字资产的投资、及区块链应用的设计与实现方面有资深经验。' },
      { img: require('../../assets/images/WAP/mkex-wap_29.png'), title: "손경훈", content: '现任英雄证券经济研究所代表，韩国替代能源产业常务理事，曾接受过Biz1 News等主流媒体的采访，旅行时间（韩旅行社）理事，AR投资咨询前常务，MKEX&M INVESTMENT前常务，区块链早期布道者。' },
      { img: require('../../assets/images/WAP/mkex-wap_29.png'), title: "차승훈", content: '具有十多年的网络社区、博客、网站、SNS等线上营销经验，曾参与短期股票投资收入超过100亿韩元而被称为“釜山海狗”，拥有超过一百万的铁杆粉丝，带领粉丝参与过多个百倍币项目的投资。' },
      { img: require('../../assets/images/WAP/mkex-wap_29.png'), title: "Michael LEE", content: '毕业于中国科技大学少年班，美国普林斯顿大学物理学博士。2007年至2014年在高盛及瑞士银行工作，先后负责亚太地区结构化衍生产品和全球外汇及期货类量化投资产品。主要专长侧重于期货，外汇，以信用产品的量化策略及交易。从瑞银辞职后专注于程序化交易，主要集中于外汇和期货的投资策略。' },
    ];

    const counselorArray = [
      { img: require('../../assets/images/WAP/mkex-wap_29.png'), title: "宝石", content: '深创学院创始人、深圳万国深创区块链投资有限公司董事长，深圳市区块链创投基金发起人，区块链创业大赛《链战》项目发起人，世界区块链大会执行主席，万国区块链博览会秘书长，胡润区块链企业排行榜联合发起人。' },
      { img: require('../../assets/images/WAP/mkex-wap_29.png'), title: "정의석", content: '（株） Allive Creative 代表理事/ Football Faentasium 代表，亚洲足球联盟(AFC) Mohamed bin hammam 会长，FIFA会长选举 Personal Identity Director，社团法人 高阳HiFC(挑战K联赛) 发起人和理事，文化体育观光部 Sports ToTo 咨询委员(足球部门)。' },
      { img: require('../../assets/images/WAP/mkex-wap_29.png'), title: "Sung Wan", content: '本征区块链研究院院长 世界最大矿场建设者。' },
      { img: require('../../assets/images/WAP/mkex-wap_29.png'), title: "易理华", content: '知名区块链投资人，优领资本创始合伙人，INBlockchain（硬币资本）创始合伙人。曾投资量子链、唯链、雷盈、BigONE等30余个区块链项目，涵盖量化基金、区块链母基金、代码审计、交易所等领域，所投项目已创造超过百倍回报率' },
    ];
    const childrenToRender = dataArray.map(this.getChildrenToRender);
    const childrenToRender2 = counselorArray.map(this.getChildrenToRender);
    const allArray = dataArray.concat(counselorArray);

    const children = allArray.map((item, i) => {
      const id = `block${i}`;
      const delay = this.getDelay(i);
      const liAnim = { opacity: 0, type: 'from', ease: 'easeOutQuad', delay };
      const childrenAnim = { ...liAnim, x: '+=10', delay: delay + 100, };
      return (
        <Element
          prefixCls="banner-user-elem"
          key={i}
        >
          <TweenOne className="banner-user-img" animation={{ y: 30, opacity: 0, type: 'from' }}>
            <img src={item.img} width="100%" />
          </TweenOne>
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            {item.title}
          </TweenOne>
          <TweenOne className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            {item.content}
          </TweenOne>
        </Element>
      );
    });

    const phoneEnd = () => (
      <div key="phoneEnd" className="phoneContent">
        <TweenOne
          animation={{ y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          component="h1"
          key="h1"
          reverseDelay={300}
          id={`${props.id}-title`}
        >
          <div className="titleName_main">
            <img className="titleLeft" src={require(`../../assets/images/left.png`)} />
            <label className="title">TEAM IMTRODUCTION</label>
            <img className="titleRight" src={require(`../../assets/images/right.png`)} />
          </div>
          <p>团队介绍</p>
        </TweenOne>

        <BannerAnim type="across" prefixCls="banner-user">
          {children}
        </BannerAnim>
        <div className="bannerAnmin" key="sss"></div>
      </div>
    )

    const pcEnd = () => (
      <div key="pcEnd" className="pcContent">
        <TweenOne
          animation={{ y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          component="h1"
          key="h1"
          reverseDelay={300}
          id={`${props.id}-title`}
        >
          <div className="titleName_main">
            <img className="titleLeft" src={require(`../../assets/images/left.png`)} />
            <label className="title">TEAM IMTRODUCTION</label>
            <img className="titleRight" src={require(`../../assets/images/right.png`)} />
          </div>
        </TweenOne>

        <TweenOne
          animation={{ y: '+=30', opacity: 0, type: 'from', delay: 200, ease: 'easeOutQuad' }}
          component="h2"
          key="h2"
          reverseDelay={200}
          id={`${props.id}-content`}
        >
          - 核心团队 -
        </TweenOne>
        <TweenOneGroup
          className={`${props.className}-img-wrapper`}
          component="ul"
          key="ul"
          enter={(e) => {
            return this.getEnterAnim(e, isMobile)
          }}
          leave={{ y: '+=30', opacity: 0, ease: 'easeOutQuad' }}
          id={`${props.id}-ul`}
        >
          {childrenToRender}
        </TweenOneGroup>
        <TweenOne
          animation={{ y: '+=30', opacity: 0, type: 'from', delay: 200, ease: 'easeOutQuad' }}
          component="h2"
          key="h2g"
          reverseDelay={200}
          className="counselorP"
          id={`${props.id}-content`}
        >
          - 顾问团队 -
        </TweenOne>

        <TweenOneGroup
          className={`${props.className}-img-wrapper2`}
          component="ul"
          key="ul2"
          enter={(e) => {
            return this.getEnterAnim(e, isMobile)
          }}
          leave={{ y: '+=30', opacity: 0, ease: 'easeOutQuad' }}
          id={`${props.id}-ul`}
        >
          {childrenToRender2}
        </TweenOneGroup>
      </div>
    )

    return (
      <div
        {...props}
        className="content-template-wrapper content4-wrapper"
      >
        <OverPack
          always={false}
          className={`content-template ${props.className}`}
        >
          {isMobile ? phoneEnd() : pcEnd()}
        </OverPack>
      </div>
    );
  }
}


export default Content;
