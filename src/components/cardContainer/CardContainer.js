import React, { useState } from 'react'
import image from "../../styles/arrow.png"
import Card from '../card/Card'
import "./cardContainer.css"

const CardContainer = ({ type, checkedOne, checkedTwo, checkedThree, checkedFour, checkedFive, checkedSixx, setChecked, checked }) => {

  const [show, setShow] = useState(false)

  return (
    <>
    <div>
    <div className='type'>{type} 
      <figure onClick={() => show === false ? setShow(true) : setShow(false)} className='figure'>
        <img className='img' src={image} />
      </figure>
    </div>
      {
        show === true && type === "Tipo" && (<Card setChecked={setChecked} handleChexboxOne={(e) => setChecked({...checked, checkedOne: e.target.checked})} handleChexboxTwo={(e) => setChecked({...checked, checkedTwo: e.target.checked})} checkedOne={checkedOne} checkedTwo={checkedTwo} titleOne="Anfitrión" titleTwo="Huésped" descriptionOne="Descripcion para anfitrion" descriptionTwo="Descripcion para huesped" />)
      }
      {
        show === true && type === "Estado" && (<Card setChecked={setChecked} handleChexboxOne={(e) => setChecked({...checked, checkedThree: e.target.checked})} handleChexboxTwo={(e) => setChecked({...checked, checkedFour: e.target.checked})} checkedOne={checkedThree} checkedTwo={checkedFour} titleOne="Activo" titleTwo="Inactivo" descriptionOne="Descripcion para activo" descriptionTwo="Descripcion para inactivo" />)
      }
      {
        show === true && type === "Validación" && (<Card setChecked={setChecked} handleChexboxOne={(e) => setChecked({...checked, checkedFive: e.target.checked})} handleChexboxTwo={(e) => setChecked({...checked, checkedSixx: e.target.checked})} checkedOne={checkedFive} checkedTwo={checkedSixx} titleOne="Sí" titleTwo="No" descriptionOne="Descripcion para sí" descriptionTwo="Descripcion para no" />)
      }
      </div>
    </>
  )
}

export default CardContainer