import React from 'react';
import { render } from '@testing-library/react';
import RegristrationForm from './RegristrationForm';

describe('<RegristrationForm />', () => {

    it('should render without crashing', () => {
        render(<RegristrationForm />)
    })
})