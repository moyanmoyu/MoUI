import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from './Button';
import Icon from './icon/index';

const fn: React.MouseEventHandler = (e) => {
  console.log(e)
};

class App extends React.Component<any, any> {


  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div>
        <Button/>
        <Icon name='wechat' onClick={fn}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
