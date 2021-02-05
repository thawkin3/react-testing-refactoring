import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders the header text, the click count, and a button', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toEqual('Counter Example');
    expect(wrapper.find('#output').text()).toEqual('You clicked 0 times');
    expect(wrapper.find('button').text()).toEqual('Click me');
  });

  it('increments the counter when the handleClick method is called', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#output').text()).toEqual('You clicked 0 times');
    wrapper.instance().handleClick();
    expect(wrapper.find('#output').text()).toEqual('You clicked 1 times');
  });

  it('updates the output message in the UI when the count state is changed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#output').text()).toEqual('You clicked 0 times');
    wrapper.setState({ counterValue: 1 });
    expect(wrapper.find('#output').text()).toEqual('You clicked 1 times');
  });

  it('increments the counter when clicked', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#output').text()).toEqual('You clicked 0 times');
    wrapper.find('button').simulate('click');
    expect(wrapper.find('#output').text()).toEqual('You clicked 1 times');
  });
})
