import React from 'react'

export const TodoList = ({addDate}) => {
    try {
        const [input, setInput] = React.useState({ name: '', description: '' })
        const submit = (e) => {
            e.preventDefault()
            addDate((p)=> [...p, {...input, id:Date.now()}])
            setInput({ name: '', description: '' })
        }
        const change = (e) => {
            setInput((obj) => ({ ...obj, [e.target.name]: e.target.value }))
        }
        return (
            <form className='form' onSubmit={submit}>
                <input onChange={change} className='name' value={input.name} name="name" type="text" placeholder='Full Name' />
                <input onChange={change} className='description' value={input.description} name="description" type="text" placeholder='Description' />
                <button className='submitBtn' type='submit'>Submit</button>
            </form>
        )
    } catch (e) { console.log(e); }
}
