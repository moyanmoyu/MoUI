import React from 'react';
import classes from '../helpers/classes';
import './importIcons.js';
import './icon.scss';

interface IconProps extends React.SVGAttributes<SVGElement>{
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {

  const {name, className, ...restProps} = props;

  const loadingClassName = classes(name === 'loading' ? 'mo-icon-loading' : undefined, className);

  return <i className="mo-icon">
    <svg className={loadingClassName} {...restProps}>
      <use xlinkHref={`#${name}`} />
    </svg>
  </i>;

};

export default Icon;
