import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../components/Navigation';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Navigation />', () => {

    it('should render without crashing', () => {
        const component = Enzyme.shallow(
            <Navigation />
        );
        expect(component).toMatchSnapshot();
    });

    it('should change text button', () => {
        const buttonsData = [
            <a href='#'>
                Sign in
            </a>,
            <a href='#'>
                Scan
            </a>
        ];
        const component = Enzyme.shallow(
            <Navigation buttonsData={buttonsData} />
        );
        expect(component).toMatchSnapshot();
    });

});