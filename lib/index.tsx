import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from './Button';
import Icon from './icon/index';

class App extends React.Component<any, any> {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div>
        <Button/>
        <Icon name='wechat'/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
