import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

export type UserType = {
    _id: string // тип прописать
    name: string // тип прописать
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // тип прописать

    const addUserCallback = (name: string) => { // тип прописать
        setUsers([...users, {_id: v1(), name: name,}]) // тип прописать
    }

    return (
        <div>
            <hr/>
            homeworks 3
            <GreetingContainer users={users}
                               addUserCallback={addUserCallback}/>
        </div>
    )
}

export default HW3
