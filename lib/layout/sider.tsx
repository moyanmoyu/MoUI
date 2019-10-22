import React from 'react';
import classes from '../helpers/classes';
import './layout.scss';

interface SiderProps extends React.Attributes {
  className?: string;
}

const Sider: React.FunctionComponent<SiderProps> = props => {

  const {className, children, ...reset} = props;

  return (
    <aside className={classes('mo-layout-sider', className)} {...reset}>
      {children}
    </aside>
  );
};

export default Sider;
