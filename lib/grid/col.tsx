import React from 'react';
import {RowContext} from './rowContext';
import classes from '../helpers/classes';
import './grid.scss';

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: number;
  offset?: number;
  push?: number;
  pull?: number;
}

const Col: React.FunctionComponent<ColProps> = (props) => {
  const {span, offset, className, children, style, ...rest} = props;

  let spanClass = undefined;
  let offsetClass = undefined;

  if (span) {
    spanClass = 'mo-col-span-' + span;
  }
  if (offset) {
    offsetClass = 'mo-col-offset-' + span;
  }
  const classNames = classes('mo-col', spanClass, offsetClass, className);

  return <RowContext.Consumer>
    {
      ({gutter}) => {
        let gutterStyle = {};
        if (gutter) {
          gutterStyle = {
            paddingLeft: gutter / 2 + 'px',
            paddingRight: gutter / 2 + 'px'
          };
        }
        const finalStyle = Object.assign({}, gutterStyle, style);
        return <div className={classNames} style={finalStyle} {...rest}>{children}</div>;
      }
    }
  </RowContext.Consumer>;
};

export default Col;
