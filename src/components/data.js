import React from "react";
import { Card, ListGroup } from 'react-bootstrap'
const data = (props) => {
    return ( <
        Card style = {
            { width: '25rem', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto' } } >
        <
        Card.Header > < strong > { props.episode.name } < /strong></Card.Header >
        <
        ListGroup variant = "flush" >
        <
        ListGroup.Item > { props.episode.air_date } < /ListGroup.Item> <
        ListGroup.Item > { props.episode.episode } < /ListGroup.Item> <
        /ListGroup> <
        /Card>
    )
};
export default data;