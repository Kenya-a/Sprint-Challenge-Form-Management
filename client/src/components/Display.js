import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const Display = ({ name, ingredients, technique, course }) => {

    console.log('Display Props:', name, ingredients, technique, course)

    return (
    
     <>

<div>{name}</div>
        <Card>
            {/* <Image src={image} /> */}
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>{course}</Card.Meta>
                <Card.Description>{technique}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                {/* <Link to={'#'}>
                    <Icon name='user' />
                     Friends
                </Link> */}
            </Card.Content>
        </Card>

     </>

    )
}


export default Display;