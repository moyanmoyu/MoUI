import React from 'react';
import ReactDOM from 'react-dom';
import {Icon, Button} from '../index';
import classes from '../helpers/classes';
import './dialog.scss';

export interface DialogProps {
  visible?: boolean;
  width?: string | number;
  title: string | React.ReactNode;
  okText?: string;
  cancelText?: string;
  showMask?: boolean;
  showClose?: boolean;
  Footer?: React.ReactNode | null;
  onOK?: () => void | boolean;
  onCancel: () => void;
  maskClosable?: boolean;
  className?: string;
  style?: object;
}

const Dialog: React.FunctionComponent<DialogProps> = (props) => {

  const {width, okText, cancelText, onCancel, onOK, maskClosable, className, style} = props;

  const isNumber = new RegExp(/^\d+\.?\d+?$/);

  const widthStyle = isNumber.test(String(width!)) ? String(width!) + 'px' : width;

  const finalStyle = Object.assign({
    width: widthStyle
  }, style);

  const onClick: React.MouseEventHandler = () => {
    onOK ? onOK() : onCancel();
  };

  const cancelClick: React.MouseEventHandler = () => {
    onCancel();
  };

  const maskClick: React.MouseEventHandler = () => {
    maskClosable && onCancel();
  };

  const Footer = () => {
    return (
      <footer className="mo-dialog-footer">
        <Button onClick={cancelClick}>{cancelText || '取消'}</Button>
        <Button onClick={onClick} type="primary">{okText || '确认'}</Button>
      </footer>
    );
  };

  const CloseIcon = () => {
    return (
      <span onClick={cancelClick} className="mo-dialog-close">
        <Icon name="close"/>
      </span>
    );
  };

  const Mask = () => {
    return (
      <div onClick={maskClick} className="mo-dialog-mask"/>
    );
  };

  const render = props.visible ?
    <React.Fragment>
      {props.showMask ? <Mask/> : null}
      <div style={finalStyle} className={classes('mo-dialog', className)}>
        {props.showClose ? <CloseIcon/> : null}
        <header className="mo-dialog-header">{props.title}</header>
        <main className="mo-dialog-main">
          {props.children}
        </main>
        {props.Footer === undefined ? <Footer/> : props.Footer}
      </div>
    </React.Fragment>
    : null;

  return (
    ReactDOM.createPortal(render, document.body)
  );
};

Dialog.defaultProps = {
  visible: false,
  width: '600',
  showMask: true,
  showClose: true,
  maskClosable: true,
  style: {}
};

export default Dialog;
