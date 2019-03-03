import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { SignUp } from './SignUp';
import { mapStateToProps } from "./SignUp";

describe(`SignUp`, () => {

  let wrapper;
  const mockSignUp = jest.fn(),
    historyMock = { push: jest.fn() };

  beforeEach(() => {

    wrapper = shallow(<SignUp fetchSignup={mockSignUp} history={historyMock} />);

  });
  afterEach(() => {

    mockSignUp.mock.calls = [];

  });
  describe('handlesubmit', () => {

    it('should be call  fetchSignUp with the name, username and password in the state as arguments', () => {

      wrapper.find('#username').simulate('change', {
        target: { "username": "value" }
      });
      wrapper.find('form').simulate('submit', { preventDefault() { } });
      expect(mockSignUp.mock.calls.length).toEqual(1);

    });
    it('should will recieve signup props', () => {

      wrapper.setProps({ message: 'your welcome' });
      expect(wrapper.state('message')).toEqual('your welcome');

    });

  });

});

describe('tests for <SignUpView> container', () => {

  it('call signup once', () => {

    const spy = sinon.spy(SignUp.prototype, 'componentWillReceiveProps'),
      wrapper = shallow(<SignUp
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
        message: 'signed up'
      }
    },
      state = mapStateToProps(mockedState);

    expect(state.error).toEqual({});

  });

});
