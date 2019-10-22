import React from 'react';
import ReactDOM from 'react-dom';
import Dialog, {DialogProps} from './dialog';
import {Icon} from './../index';

const tuple = <T extends string[]>(...args: T) => args;

const ConfirmTypes = tuple('success', 'error', 'warn', 'info');

type ConfirmType = (typeof ConfirmTypes)[number];

interface ConfirmProps extends DialogProps {
  type?: ConfirmType;
  content: string | React.ReactNode;
}

const confirm = (props: ConfirmProps) => {

  const div = document.createElement('div');
  document.body.appendChild(div);

  let { visible = true, title, width = '300px', content, onOK, onCancel, ...reset} = props;

  const destroy = () => {
    render(false);
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  };

  const cancelClick = () => {
    destroy();
    onCancel && onCancel();
  };

  const onClick = () => {
    if (onOK) {
      let result = onOK();
      result === false || destroy();
    } else {
      destroy();
    }
  };

  const children = props.type ? (<div className="mo-dialog-content"><Icon name={props.type} /><div>{content}</div></div>) : content;

  const render = (visible: boolean) => {
    ReactDOM.render(<Dialog visible={visible} width={width} title={title} onCancel={cancelClick} onOK={onClick} {...reset}>{children}</Dialog>, div);
  };

  render(visible || true);

  return {
    destroy
  };

};

confirm.success = (props: ConfirmProps) => {
  return confirm({type: 'success', ...props});
};

confirm.error = (props: ConfirmProps) => {
  return confirm({type: 'error', ...props});
};

confirm.warn = (props: ConfirmProps) => {
  return confirm({type: 'warn', ...props});
};

confirm.info = (props: ConfirmProps) => {
  return confirm({type: 'info', ...props});
};

export default confirm;
