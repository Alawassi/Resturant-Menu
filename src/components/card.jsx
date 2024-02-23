import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img, number } = item;
  return (
    <>


      <figure className="card" >


        <img src={img} alt={title} />
        <h3 classNameName="name" style={{ backgroundColor: '#20638f' }}>  {title} </h3>
        <figcaption>
          <div classNameName="text-muted"> Nr: {number} <p> {author}  </p> </div>
          <button classNameName="btn btn-sm  btn-light "style={{ backgroundColor: '#00FFFF' , marginTop:'10px' }} onClick={() => handleClick(item)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
            </svg>
          </button>
          <div classNameName="price" style={{ fontSize: '20px' }}> {price + '€'}  </div>
        </figcaption>
      </figure>


    </>

  );
};

export default Cards;

