import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Login } from './Login';
import { mapStateToProps } from "./Login";

describe(`Login`, () => {

  let wrapper;
  const mockLogin = jest.fn(),
    historyMock = { push: jest.fn() };

  beforeEach(() => {

    wrapper = shallow(<Login fetchLogin={mockLogin} history={historyMock} />);

  });
  afterEach(() => {

    mockLogin.mock.calls = [];

  });
  describe('handlesubmit', () => {

    it('should be call  fetchLogin with the name, username and password in the state as arguments', () => {

      wrapper.find('#username').simulate('change', {
        target: { "username": "value" }
      });
      wrapper.find('form').simulate('submit', { preventDefault() { } });
      expect(mockLogin.mock.calls.length).toEqual(1);

    });
    it('should will recieve signup props', () => {

      wrapper.setProps({ message: 'your welcome' });
      expect(wrapper.state('message')).toEqual('your welcome');

    });

  });

});

describe('tests for <SignUpView> container', () => {

  it('call signup once', () => {

    const spy = sinon.spy(Login.prototype, 'componentWillReceiveProps'),
      wrapper = shallow(<Login
        error={{
          error: {
            username: '',
            password: ''
          }
        }}
      />);

    expect(spy).toHaveProperty('callCount', 0);
    wrapper.setProps({
      error: {
        error: {
          username: 'wrong id',
          password: ''
        }
      }
    });
    expect(spy).toHaveProperty('callCount', 1);

  });
  it('mapStateToProps should return the right value', () => {

    const mockedState = {
      auth: {
        error: {},
        message: 'loggedIn'
      }
    },
      state = mapStateToProps(mockedState);

    expect(state.error).toEqual({});

  });

});
