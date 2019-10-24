import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import { render } from '@testing-library/react';


describe('<Display />', () =>{

    it('should render without crashing', () => {
        render(<Display />)
    });

    // it('should take in props'), () => {

    // }
})