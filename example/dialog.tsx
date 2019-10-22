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
        <Dialog width={'200px'} visible={this.state.visible} title="提示"
                onCancel={()=>{this.setState({visible: false})}}>
          <span>123</span>
        </Dialog>
      </div>
    );
  }
}

export default DialogExample;
