import * as renderer from 'react-test-renderer';
import * as React from 'react';
import Icon from '../index';
import {mount} from 'enzyme';

describe('Icon', () => {
  it('icon exist', () => {
    const json = renderer.create(<Icon name='wechat'/>).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('icon onclick', () => {
    const fn = jest.fn();
    const component = mount(<Icon name='wechat' onClick={fn}/>);
    component.find('svg').simulate('click');
    expect(fn).toBeCalled();
  });
});
