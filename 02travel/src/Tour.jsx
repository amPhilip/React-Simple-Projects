import React, { useState } from "react";

const Tour = ({id, image, info, price, name, removeTour}) => {

    //toggle functionality
    const[read, setRead] = useState(false);

    const readMore = () => {
        setRead(!read)
    }

  return (
    <article className='single-tour'>
      <img src={image} alt={name}/>
      <footer>
          <div className='tour-info'>
              <h4>{name}</h4>
              <h4 className='tour-price'>{price}</h4>
          </div>
          <p>{read ? info : `${info.substring(0, 150)}...`}
          <button onClick={readMore}>{read ? 'show Less':'Read More'}</button>
          </p>
          <button className='delete-btn' onClick={()=>{
              removeTour(id);
          }}>Not Interested</button>
      </footer>
    </article>
  );
};

export default Tour;
