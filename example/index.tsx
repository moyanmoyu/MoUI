import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Icon from '../lib/icon/index';



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
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
