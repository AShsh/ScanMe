import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../components/Login';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Login />', () => {

    it('should render without crashing', () => {
        const component = Enzyme.shallow(
            <Login />
        );
        expect(component).toMatchSnapshot();
    });

    it('should redirect to login page', () => {
        const clearFunction = function() {};
        const component = Enzyme.shallow(
            <Login 
                handleBack={clearFunction}
            />
        );
        component.find('.back-btn').simulate('click');
    });

    it('should submit form', () => {
        const clearFunction = function() {};
        const component = Enzyme.shallow(
            <Login 
            handleSubmit={clearFunction}
            />
        );
        const userData = {
            login: 'Name',
            password: 'Password'
          };
        component.find('.login-form').simulate('submit', {target: userData , preventDefault() {} });

    });

});