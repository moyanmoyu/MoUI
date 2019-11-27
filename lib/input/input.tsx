import React from 'react';
import {Icon} from '../index';
import classes from '../helpers/classes';
import './input.scss';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  defaultValue?: any;
  clearable?: boolean;
  preIcon?: string;
  sufIcon?: string;
  prefix?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
  preLabel?: string | React.ReactNode;
  sufLabel?: string | React.ReactNode;
}

interface InputState {
  showClear: boolean;
  value: any;
}

class Input extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);

    this.state = {
      showClear: false,
      value: null
    };

    if (this.props.clearable && this.props.defaultValue) {
      this.setState({
        showClear: true
      });
    }
  }

  input: HTMLInputElement;

  getRef(ref: HTMLInputElement) {
    this.input = ref;
  }

  focus() {
    this.input.focus();
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (this.props.onChange) {
      this.props.onChange(e)
    }
  }

  clearValue() {
    this.setState({
      value: ''
    }, () => {
      this.focus()
    })
  }

  render() {
    const self = this;

    const {className, style, prefix, suffix, preIcon, sufIcon, onChange, preLabel, sufLabel, ...reset} = this.props;

    let prefixNode = null;

    let suffixNode = null;

    if (preIcon) {
      prefixNode = <Icon name={preIcon}/>;
    }
    if (preLabel) {
      prefixNode = <div className={'mo-fix-label mo-input-prefix'}>{preLabel}</div>;
    }
    if (prefix) {
      prefixNode = typeof prefix === 'string' ? <div className={'mo-input-fix mo-input-prefix'}>{prefix}</div> : prefix;
    }

    if (sufIcon) {
      suffixNode = <Icon name={sufIcon}/>;
    }
    if (sufLabel) {
      suffixNode = <div className={'mo-fix-label mo-input-suffix'}>{sufLabel}</div>;
    }
    if (suffix) {
      suffixNode = typeof suffix === 'string' ? <div className={'mo-input-fix mo-input-suffix'}>{suffix}</div> : suffix;
    }
    const disabledClassName = this.props.disabled ? 'mo-input-disabled' : undefined;

    return (
      <div className={classes('mo-input-wrap', className, disabledClassName)}>
        {prefixNode}
        <div className={'mo-input'} style={style}>
          <input ref={this.getRef} onChange={this.onChange} {...reset} />
          {self.state.showClear ? <span onClick={this.clearValue} className={'mo-input-clear'}>
            <Icon fill={'#C0C4CC'} name={'close'}/>
          </span> : null}
        </div>
        {suffixNode}
      </div>
    );
  }
}

export default Input;
