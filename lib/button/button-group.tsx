import React from 'react';
import classes from '../helpers/classes';

interface ButtonGroupProps {
  className?: string;
}

const ButtonGroup: React.FunctionComponent<ButtonGroupProps> = props => {
  const {className} = props;

  return (
    <div className={classes('mo-button-group', className)}>
      {props.children}
    </div>
  );
};

export default ButtonGroup;
