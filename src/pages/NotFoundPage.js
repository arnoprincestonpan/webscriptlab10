import React from 'react';
import pop from '../images/web_scripting_pop.JPG';

const NotFoundPage = () => { // to separate JavaScript and Mark-up
    var helpMe = true;
    return(
        <>
        <div class = "text-center">
            <img src={pop} alt = "fizzled pop" />
            <h1>404: Page Not Found</h1>
        </div>
        </>
    )
};

export default NotFoundPage;