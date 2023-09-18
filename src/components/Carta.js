import React from 'react'

function Carta({ title ,imageSource,p}) {
  return (
      <div className='card text-center'>
         <img src={imageSource} alt="" />
        <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className='card-text'> {p} </p>
        </div>
    </div>
  )
}

export default Carta
