import React, { useState } from 'react'
import image from "../../styles/arrow.png"
import Card from '../card/Card'
import "./cardContainer.css"

const CardContainer = ({ type, titleOne, titleTwo, descriptionOne, descriptionTwo,  show, checkedOne, checkedTwo, handleSetShow, handleChexboxOne, handleChexboxTwo, handleChexboxOneDelete, }) => {

  return (
    <>
    <div>
    <div className='type'>{type} 
      <figure onClick={handleSetShow} className='figure'>
        <img className='img' src={image} />
      </figure>
    </div>
      {
       show === true && <Card checkedOne={checkedOne} checkedTwo={checkedTwo} handleChexboxOne={handleChexboxOne} handleChexboxTwo={handleChexboxTwo} handleChexboxOneDelete={handleChexboxOneDelete} titleOne={titleOne} titleTwo={titleTwo} descriptionOne={descriptionOne} descriptionTwo={descriptionTwo} />
      }
      
      </div>
    </>
  )
}

export default CardContainer