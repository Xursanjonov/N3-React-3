import React from 'react'

// export const Card = ({ id, name, age, setUser }) => {
//     const deleteCard = () => {
//         setUser((p)=> p.filter(item => item.id !== id))
//     }
//     return (
//         <div id={id} className='card_1'>
//             <h3 className='h3'> {name} </h3>
//             <h3 className='text'> {age} </h3>
//             <div className="card-btns">
//                 <button className='edite'> <i className="fa-solid fa-pen-to-square"></i> </button>
//                 <button onClick={deleteCard} className='delete'> <i className="fa-solid fa-trash-can"></i> </button>
//             </div>
//         </div>
//     )
// }

export const Card = ({ id, name, age, setUser }) => {
    const [true_or_false, setTrue_or_false] = React.useState(false);
    const [editDiv, setEditDiv] = React.useState({ name, age });

    const deleteDiv = () => {
        setUser((p) => p.filter(item => item.id !== id))
    }
    const saveNewData = () => {
        setUser((p) =>
        p.map((item) => item.id === id ? { ...item, name: editDiv.name, age: editDiv.age } : item)
        )
        setTrue_or_false(false)
    }
    const editeDiv = () => {
        setTrue_or_false(!true_or_false)
    }
    const editInput = (e) => {
        setEditDiv((p) => ({ ...p, [e.target.name]: e.target.value }));
    }

    return (
        <div id={id} className='card_1'>
            {true_or_false ? (
                <div className='card-edite'>
                    <input className='editNewName' onChange={editInput} name='name' value={editDiv.name} type="text" />
                    <input className='editNewAge' onChange={editInput} name='age' value={editDiv.age} type="text" />
                    <button className='editNew' onClick={saveNewData}> <i className="fa-solid fa-save"></i> </button>
                </div>
            ) : (
                <div className='card-input'>
                    <h3 className='h3'>{name}</h3>
                    <h3 className='text'>{age}</h3>
                </div>
            )}
            <div className="card-btns">
                <button onClick={editeDiv} className='edite'> <i className="fa-solid fa-pen-to-square"></i> </button>
                <button onClick={deleteDiv} className='delete'> <i className="fa-solid fa-trash-can"></i> </button>
            </div>
        </div>
    )
}