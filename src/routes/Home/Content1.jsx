import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'content7',
  };

  render() {
    const props = { ...this.props };
    delete props.isMobile;

    return (
      <div
        {...props}
        className={`content-template-wrapper ${props.className}-wrapper`}
      >
        <OverPack style={{ overflow: 'hidden', height: 200, width: '100%'}} >
          <TweenOne key="0" animation={{ opacity: 1 }}
                    className="code-box-shape"
                    style={{ opacity: 0, marginBottom: 10 }}
          />
          <QueueAnim key="queue"
          >
            <div key="a" className="code-box-shape queue-anim-demo" />
            <div key="b" className="code-box-shape queue-anim-demo" />
            <div key="c" className="code-box-shape queue-anim-demo" />
            <div key="d" className="code-box-shape queue-anim-demo" />
            <div key="e" className="code-box-shape queue-anim-demo" />
            <div key="f" className="code-box-shape queue-anim-demo" />
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}

export default Content;
