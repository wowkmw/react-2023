// import React from 'react'

const Card = ({ myText = "Default" }) => {
  return (
    <div>
      <img src="" alt=""></img>
      <h1 className="text-white text-4xl">{myText}</h1>
    </div>
  );
};

export default Card;
