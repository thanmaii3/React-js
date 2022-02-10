import React from 'react';
import ReactDOM from 'react-dom';

import Comments from './Comments.js';




const App = () => {
    return(
        <>
        <Comments />
        </>
    )
}
ReactDOM.render(
    <>
    <App />
    </>,
    
    document.getElementById('root')
)



