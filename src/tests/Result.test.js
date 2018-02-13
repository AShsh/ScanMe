import React from 'react';
import ReactDOM from 'react-dom';
import Result from '../components/Result';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Result />', () => {

    it('should render with scan data', () => {
        const clearFunction = function () { };
        const component = Enzyme.shallow(
            <Result scan={'scan data'} handleNewScan={clearFunction} />
        );
        expect(component).toMatchSnapshot();
    });

    it('should should redirect to scan page', () => {
        const clearFunction = function () { };
        const component = Enzyme.shallow(
            <Result scan={'scan data'} handleNewScan={clearFunction} />
        );
        component.find('.scan-again').simulate('click');
    });

});

