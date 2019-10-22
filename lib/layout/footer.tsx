import React from 'react';
import classes from '../helpers/classes';
import './layout.scss';

interface FooterProps extends React.Attributes {
  className?: string;
}

const Footer: React.FunctionComponent<FooterProps> = props => {

  const {className, children, ...reset} = props;

  return (
    <footer className={classes('mo-layout-footer', className)} {...reset}>
      {children}
    </footer>
  );
};

export default Footer;
