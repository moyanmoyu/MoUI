import { Dialog } from './../lib/index';
import React from 'react';

class DialogExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: false
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => {this.setState({visible: !this.state.visible})}}>change</button>
        <Dialog visible={this.state.visible} title="提示" Footer={null}
                onCancel={()=>{this.setState({visible: false})}} />
      </div>
    );
  }
}

export default DialogExample;
