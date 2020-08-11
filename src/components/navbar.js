import React, { useState } from 'react';
import {  Navbar, Form,  FormControl, Button } from 'react-bootstrap';

import Aux from '../hoc/Aux1/Aux1';
import 'bootstrap/dist/css/bootstrap.min.css';
const Toolbar = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue,1);
        resetInputField();
    }

    return (

        <Aux >
        < Navbar bg = "light" expand = "lg" style = {{ marginBottom: '20px' } }>

        <Navbar.Brand href = "/" > Home </Navbar.Brand> 
        <Navbar.Toggle />
        <Navbar.Collapse id = "basic-navbar-nav" >
        <Form inline style = {
            { marginLeft: 'auto' } } >
        <FormControl type = "text"
        placeholder = "Search"
        value = { searchValue }
        onChange = { handleSearchInputChanges }
        className = "mr-sm-2" / >
        <Button variant = "primary" onClick = { callSearchFunction } > Search </Button>
         </Form> 
         </Navbar.Collapse> 
         </Navbar> 
         </Aux>

    )
}

export default Toolbar;