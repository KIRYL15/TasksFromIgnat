import React from 'react'
import style from './Greeting.module.css'


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: any // need to fix any
    addUser: ()=>void // need to fix any
    error: any // need to fix any
    totalUsers: any // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = style.error // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback}
                   className={inputClass}/>
            <span>{error}</span>
            <button className={style.button} onClick={addUser}>ADD</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
