import React from "react";
import classes from './errors.module.css';
const Errors = () => {
    return ( <div className = { classes.errorpagewrap } >
        <
        article className = {
            [classes.errorpage, classes.gradient].join(' ') } >
        <
        hgroup >
        <
        h1 > 404 < /h1> <
        h2 > oops!page not found < /h2> <
        /hgroup> { /* <a href="#" title="Back to site" class="error-back">back</a> */ } <
        /article> <
        /div>
    )
}
export default Errors;