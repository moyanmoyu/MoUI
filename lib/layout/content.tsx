import React from 'react';
import classes from '../helpers/classes';
import './layout.scss';

interface ContentProps extends React.Attributes {
  className?: string;
}

const Content: React.FunctionComponent<ContentProps> = props => {

  const {className, children, ...reset} = props;

  return (
    <main className={classes('mo-layout-content', className)} {...reset}>
      {children}
    </main>
  );
};

export default Content;
