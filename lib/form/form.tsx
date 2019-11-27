import React from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  rules?: object;
  onSubmit: () => void;
}

// type ValidationRule = {
//   message?: React.ReactNode;
//   required?: boolean;
//   type?: string;
//   length?: number;
//   max?: number;
//   min?: number;
//   pattern?: number;
//   validator?: (rule: any, value: any, callback: any) => any;
//   trigger?: string
// }


class Form extends React.Component<FormProps> {
  constructor(props: FormProps) {
    super(props);
  }


  render() {
    return null
  }
}

export default Form;
