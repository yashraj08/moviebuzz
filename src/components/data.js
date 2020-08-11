import React from "react";
import { Card, Button } from 'react-bootstrap'
const data = (props) => {
    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(props.episode.imdbID,2);
        
    }
    return (
         <Card style = {
            { width: '25rem', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto' } } >
        { props.episode.Poster==='N/A'?<Card.Img variant="top" src="https://cidco-smartcity.niua.org/wp-content/uploads/2017/08/No-image-found.jpg"/>:<Card.Img variant="top" src={props.episode.Poster} />}
        <Card.Header > < strong > { props.episode.Title }|{props.episode.Year} </strong></Card.Header>
      
        <Button variant = "primary" onClick = { callSearchFunction }  >More Info </Button>
        
        </Card>
    )
};
export default data;