import React from 'react';
import Sider from './sider';
import classes from '../helpers/classes';
import './layout.scss';

interface LayoutProps extends React.Attributes {
  className?: string;
  children: React.ReactElement[]
}

const Layout: React.FunctionComponent<LayoutProps> = props => {

  const {className, children, ...reset} = props;

  const hasSider = children.reduce((result, node) => result || node.type === Sider, false);

  return (
    <section className={classes('mo-layout', className, hasSider ? 'mo-layout-has-sider' : undefined)} {...reset}>
      {children}
    </section>
  );
};

export default Layout;
