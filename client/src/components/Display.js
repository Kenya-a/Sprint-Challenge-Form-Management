import React from 'react';
import styled from 'styled-components';

const Display = ({ name, ingredients, technique, course }) => {

    console.log('Display Props:', name, ingredients, technique, course)

    return (
    
     <Div>
        <Section>
            <h3>{name}</h3>
            <span>{course}</span>
            <p>{ingredients}</p>
            <p>{technique}</p>
        </Section>

     </Div>

    )
}


export default Display;

//====Styled Components========/

const Div = styled.div`
    // display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

`

const Section = styled.section`
    background: gray;
    width: 44%;
    border: 3px solid #61afb

`
const P = styled.p`
    display: flex;
    flex-direction: column
`