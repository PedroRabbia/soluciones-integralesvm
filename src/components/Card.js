import React from 'react'


function Card({title,imageSource,url,p}) {
  return (
    <div className='card text-center'>
         <img src={imageSource} alt="" />
        <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className='card-text'> {p} </p>
            <a href={url} className='btn btn-outline-info rounded-4'>VER TRABAJOS</a>
        </div>
      
    </div>
  )
}

export default Card
