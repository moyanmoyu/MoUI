import React from 'react';
import './../svg/wechat.svg';
import './icon.scss';

interface IconProps {
  name: string
}

const Icon: React.FunctionComponent<IconProps> = props => {

  return <span>
    <svg className='mo-icon'>
      <use xlinkHref={`#${props.name}`} />
    </svg>
  </span>;

};

export default Icon;
