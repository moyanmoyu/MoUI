import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Icon, Button, ButtonGroup, confirm, ConfigProvider, Layout, Sider, Header, Content, Col, Row} from '../lib/index';
import Dialog from './dialog';

class App extends React.Component<any, any> {

  static displayName = 'Mo';

  constructor(props: any) {
    super(props);

    this.state = {
      a: '1',
      b: '2'
    };
  }

  get name() {
    return this.state.a + ' ' + this.state.b;
  }

  set name(name: string) {
    let [a, b] = name ? name.split(' ') : ['', ''];
    this.setState({
      a,
      b
    });
  }

  fn = (e: any) => {
    console.log(e);
  };

  renderConfirm = () => {
    confirm.warn({
      title: '提示',
      content: '内容',
      width: '300px',
      onCancel: () => {
        console.log('onCancel');
      },
      onOK: () => {
        console.log('onOK');
        return false;
      }
    });
  };

  render() {
    return (
      <ConfigProvider>
        <Layout>
          <Sider/>
          <Layout>
            <Header/>
            <Content>
              <Icon name='wechat' onClick={this.fn}/>
              <span>{this.name}</span>
              <input onBlur={(e) => {
                console.log(e.target.value);
                this.name = e.target.value;
              }}/>

              <Row gutter={20}>
                <Col span={1}>
                  <span>1111</span>
                </Col>
                <Col span={2}>
                  <span>1111</span>
                </Col>
              </Row>

              <ButtonGroup>
                <Button icon="close" type="default" onClick={() => {console.log(111);}}>按钮</Button>
                <Button type="primary" disabled={true}>按钮</Button>
                <Button type="text">按钮</Button>
                <Button type="danger" onClick={this.renderConfirm}>按钮</Button>
                <Button type="warn">按钮</Button>
              </ButtonGroup>
              <Dialog/>
            </Content>
          </Layout>
        </Layout>
      </ConfigProvider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
