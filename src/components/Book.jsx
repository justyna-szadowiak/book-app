import React from "react";
import "./Book.css"
import ShowLess from "./ShowLess";

function Book({title, authors, thumbnailUrl, description, category}) {
    return ( 
        <div className="bookPlaceholder">
          <div>
            <h4 className="bookTitle">{title}</h4>
            <h5 className="bookAuthor">{authors}</h5>
            <img 
              className="bookCover"
              src={thumbnailUrl}
              alt={title}
            ></img>
            <ShowLess 
            className="bookDescription" 
            description={description}
            />
          </div>
        </div>
    );
};

export default Book;