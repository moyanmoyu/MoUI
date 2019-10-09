import React from 'react';
import {Icon} from './../index';
import classes from '../helpers/classes';
import './button.scss';

const tuple = <T extends string[]>(...args: T) => args;

const ButtonTypes = tuple('default', 'primary', 'success', 'danger', 'warn', 'text');

type ButtonType = (typeof ButtonTypes)[number];

type BaseButtonProps = {
  icon: string;
  type: ButtonType;
  plain: boolean;
  loading: boolean;
  disabled: boolean;
  className: string;
  onClick: React.MouseEventHandler<HTMLElement>
}

type ButtonProps = Partial<BaseButtonProps>;


const Button: React.FunctionComponent<ButtonProps> = props => {

  const {icon, className, type, plain, disabled, loading, onClick} = props;

  const typeClassName = type ? `mo-button-${type}` : undefined;
  const plainClassName = plain ? `mo-button-${plain}` : undefined;
  const loadingClassName = loading ? `mo-button-loading` : undefined;
  const disabledClassName = disabled ? `mo-button-disabled` : undefined;
  const finalClassName = classes('mo-button', typeClassName, plainClassName, loadingClassName, disabledClassName, className);

  const iconFillColor = type === 'default' || plain ? '#909399' : '#fff';

  const handClick: React.MouseEventHandler<HTMLElement> = e => {
    if (loading) {
      return;
    }
    if (disabled) {
      return;
    }
    onClick && onClick(e);
  };

  return (
    <div className={finalClassName} onClick={handClick}>
      {loading || icon ? <Icon fill={iconFillColor} name={loading ? 'loading' : icon!}/> : null}
      <span>{props.children}</span>
    </div>
  );
};

Button.defaultProps = {
  type: 'default'
};

export default Button;
