import React from 'react';

function BookImage(props) {
    console.log(props.bookInfo)
    if (props.bookInfo.imageLinks) {
        return (
            
            <img 
                src={props.bookInfo.imageLinks.thumbnail} 
                alt={props.bookInfo.title}
                className={props.className}
            />
        )
    } return (
        <span className={props.className}> No image available.</span>
    )
    
}

export default BookImage;