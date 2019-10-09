import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Icon, Button, ButtonGroup } from '../lib/index';
import Dialog from './dialog';


class App extends React.Component<any, any> {

  static displayName = "Mo";

  constructor(props: any) {
    super(props);

    this.state = {
      a: '1',
      b: '2'
    }
  }

  get name() {
    return this.state.a + ' ' + this.state.b
  }

  set name(name: string) {
    let [a, b] = name.split(' ');
    this.setState({
      a,
      b
    })
  }

  fn = (e: any) => {
    console.log(e)
  };

  render(){
    return (
      <div>
        <Icon name='wechat' onClick={this.fn}/>
        <span>{this.name}</span>
        <input onBlur={(e) => {
          console.log(e.target.value);
          this.name = e.target.value;
        }}/>

        <ButtonGroup>
          <Button icon="close" type="default" onClick={() => {console.log(111)}}>按钮</Button>
          <Button type="primary" disabled={true}>按钮</Button>
          <Button type="text">按钮</Button>
          <Button type="danger">按钮</Button>
          <Button type="warn">按钮</Button>
        </ButtonGroup>
        <Dialog />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
