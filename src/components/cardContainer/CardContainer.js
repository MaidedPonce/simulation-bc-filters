import React, { useState } from 'react'
import image from "../../styles/arrow.png"
import Card from '../card/Card'
import "./cardContainer.css"

const CardContainer = ({ type, show, handleSetShow, handleChexboxOne, handleChexboxTwo, titleOne, titleTwo, descriptionOne, descriptionTwo }) => {

  // const [show, setShow] = useState(false)

  return (
    <>
    <div>
    <div className='type'>{type} 
      <figure onClick={handleSetShow} className='figure'>
        <img className='img' src={image} />
      </figure>
    </div>
      {
       show === true && <Card handleChexboxOne={handleChexboxOne} handleChexboxTwo={handleChexboxTwo} titleOne={titleOne} titleTwo={titleTwo} descriptionOne={descriptionOne} descriptionTwo={descriptionTwo} />
      }
      
      </div>
    </>
  )
}

export default CardContainer