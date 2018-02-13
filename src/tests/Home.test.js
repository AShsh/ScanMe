import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/Home';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {

    it('should render without crashing', () => {
        const component = Enzyme.shallow(
            <Home />
        );
        expect(component).toMatchSnapshot();
    });

    it('should contain start link', () => {
        const startLink = <a className='btn' to='/login'>Link!</a>;
        const component = Enzyme.shallow(
            <Home
                startLink={startLink}
            />
        );
        expect(component.find('.btn')).toHaveLength(1);
    });

    it('should render without start link', () => {
        const component = Enzyme.shallow(
            <Home/>
        );
        expect(component).toMatchSnapshot();
    });

});