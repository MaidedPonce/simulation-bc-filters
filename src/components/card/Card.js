import React from 'react'
import "./card.css"
const Card = ({ titleOne, titleTwo, descriptionOne, descriptionTwo, handleChexboxOne, handleChexboxTwo, setChecked }) => {
    return (
        <div className='cardContainer'>
            <div className='lineDown'>
                <div className='details'>
                    <input onChange={handleChexboxOne} className='input' type="checkbox" />
                    <div className='dees'>
                        <p>{titleOne}</p>
                        <span className='description'>{descriptionOne}</span>
                    </div>
                </div>
                <div className='details'>
                    <input onChange={handleChexboxTwo} className='input' type="checkbox" />
                    <div className='dees'>
                        <p>{titleTwo}</p>
                        <span className='description'>{descriptionTwo}</span>
                    </div>
                </div>
            </div>

            <div className='buttonContainer'>
                <span className='delete' onClick={() => setChecked({checkedOne: false, checkedTwo: false})}>Borrar</span>
                <button className='buttonSave'>Guardar</button>
            </div>
        </div>
    )
}

export default Card