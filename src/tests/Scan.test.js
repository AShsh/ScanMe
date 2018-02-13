import React from 'react';
import ReactDOM from 'react-dom';
import Scan from '../components/Scan';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Scan />', () => {

    it('should render without crashing', () => {
        const component = Enzyme.shallow(
            <Scan />
        );
        expect(component).toMatchSnapshot();
    });

    it('should have qr data', () => {
        const qrData = [<input className='btn' type='button' value='submit qr'  />];
        const component = Enzyme.shallow(
            <Scan qrData={qrData}/>
        );
        expect(component).toMatchSnapshot();
    });

});

