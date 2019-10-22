import React from 'react';
import classes from '../helpers/classes';
import {RowContext} from './rowContext';

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: number;
  children: React.ReactElement[] | React.ReactElement;
}

const Row: React.FunctionComponent<RowProps> = (props) => {
  const {gutter, className, style, children, ...rest} = props;

  const finalStyle = Object.assign({}, style);

  const classNames = classes('mo-row', className);
  return <RowContext.Provider value={{gutter}}>
    <div className={classNames} style={finalStyle} {...rest}>{children}</div>
  </RowContext.Provider>;
};

Row.defaultProps = {
  gutter: 0
};

export default Row;
