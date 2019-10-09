import React from 'react';
import {Icon} from '../index';
import './dialog.scss';

interface DialogProps {
  visible: boolean;
  width?: string | number;
  title: string | React.ReactNode;
  okText?: string;
  cancelText?: string;
  showClose?: boolean;
  Footer?: React.ReactNode | null;
  onCancel: React.MouseEventHandler;
  maskClosable?: boolean;
}

const Dialog: React.FunctionComponent<DialogProps> = (props) => {

  const Footer = () => {
    return (
      <footer className="mo-dialog-footer">
        <button>ok</button>
        <button>cancel</button>
      </footer>
    );
  };

  const CloseIcon = () => {
    return (
      <span onClick={props.onCancel} className="mo-dialog-close">
        <Icon name="close"/>
      </span>
    );
  };

  return (
    props.visible ?
      <React.Fragment>
        <div className="mo-dialog-mask"/>
        <div className="mo-dialog">
          {props.showClose ? <CloseIcon/> : null}
          <header className="mo-dialog-header">{props.title}</header>
          <main className="mo-dialog-main">
            {props.children}
          </main>
          {props.Footer === undefined ? <Footer/> : props.Footer}
        </div>
      </React.Fragment>
      : null
  );
};

Dialog.defaultProps = {
  showClose: true
};

export default Dialog;
