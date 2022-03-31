import React from "react";


const Form = (props) => {

    const handleChange = evt => {
        const {name, value} = evt.target

        props.change(name, value)
    }
    const handleSubmit = evt => {
        evt.preventDefault()
        props.submit()
        
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Name:
            <input
                placeholder="name"
                value={props.values.name}
                name='name'
                onChange={handleChange}
            />
            </label>

            <label>email:
            <input
                placeholder="email here"
                value={props.values.email}
                name='email'
                onChange={handleChange} 
            />
            </label>

            <label>role:
            <input
                placeholder="role here"
                value={props.values.role}
                name='role'
                onChange={handleChange}
            />
            </label>
            <input type="submit" value="Create your team!"/>
        </form>
    )
}

export default Form;