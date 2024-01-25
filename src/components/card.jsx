import React from 'react'

export const Card = ({ id, name, description, setUser }) => {
    const deleteCard = () => {
        setUser((p)=> p.filter(item => item.id !== id))
    }
    return (
        <div id={id} className='card_1'>
            <h3 className='h3'> {name} </h3>
            <h3 className='text'> {description} </h3>
            <div className="card-btns">
                <button className='edite'> <i class="fa-solid fa-pen-to-square"></i> </button>
                <button onClick={deleteCard} className='delete'> <i class="fa-solid fa-trash-can"></i> </button>
            </div>
        </div>
    )
}
