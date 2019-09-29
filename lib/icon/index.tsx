import React from 'react';
import '../svgs/wechat.svg';
import './icon.scss';
import classes from './../helpers/classes';

interface IconProps extends React.SVGAttributes<SVGElement>{
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {

  const {className, name, ...restProps} = props;

  return <span>
    <svg className={classes('mo-icon', className)} {...restProps}>
      <use xlinkHref={`#${name}`} />
    </svg>
  </span>;

};

export default Icon;
