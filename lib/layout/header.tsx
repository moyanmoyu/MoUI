import React from 'react';
import classes from '../helpers/classes';
import './layout.scss';

interface HeaderProps extends React.Attributes {
  className?: string;
}

const Header: React.FunctionComponent<HeaderProps> = props => {

  const {className, children, ...reset} = props;

  return (
    <header className={classes('mo-layout-header', className)} {...reset}>
      {children}
    </header>
  );
};

export default Header;
