import React from "react";
import { Card, Button,ListGroup,ListGroupItem } from 'react-bootstrap'
const movie = (props) => {

    return (
         <Card style = {
            { width:'500px', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto' } }   >
        { props.episode.Poster==='N/A'?<Card.Img variant="top" src="https://cidco-smartcity.niua.org/wp-content/uploads/2017/08/No-image-found.jpg"/>:<Card.Img variant="top" src={props.episode.Poster} />}
        <Card.Header > < strong > { props.episode.Title }|{props.episode.Released} </strong></Card.Header>
        <ListGroup className="list-group-flush">
         <ListGroupItem>Runtime:{props.episode.Runtime}</ListGroupItem>
         <ListGroupItem>Genre:{props.episode.Genre}</ListGroupItem>   
         <ListGroupItem>Language:{props.episode.Language}</ListGroupItem>
         <ListGroupItem>Country:{props.episode.Country}</ListGroupItem>
         {props.episode.Type === "series"?<ListGroupItem>Seasons:{props.episode.totalSeasons}  </ListGroupItem>:<ListGroupItem>BoxOffice:{props.episode.BoxOffice}</ListGroupItem>}
        
        <ListGroupItem>Actors:{props.episode.Actors} </ListGroupItem>
        <ListGroupItem>Director:{props.episode.Director} </ListGroupItem>
         <ListGroupItem>ImdbRating:{props.episode.imdbRating}</ListGroupItem>
         <ListGroupItem>Rated:{props.episode.Rated}</ListGroupItem>
         <ListGroupItem>Awards:{props.episode.Awards}</ListGroupItem>
        </ListGroup>
        <Card.Body>
        
        <Card.Text>
         {props.episode.Plot}
        </Card.Text>
        
        </Card.Body>
       
 
        </Card>
    
        
    )
};
export default movie;