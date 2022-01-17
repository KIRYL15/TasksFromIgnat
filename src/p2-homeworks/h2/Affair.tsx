import React from 'react'
import {AffairType} from "./HW2";
import style from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: string) => void
}

export function Affair(props: AffairPropsType) {

    const deleteCallback = () => { props.deleteAffairCallback(props.affair.id) }
    const priorityClass = style[props.affair.priority] //подсмотрел у Игната, как сделать не понял

    return (
        <div className={style.affair}>
            <div className={style.name}> {props.affair.name}</div>
            <div className={priorityClass}>  [{props.affair.priority}]</div>
            <button onClick={deleteCallback}
                    className={style.button}>X</button>
        </div>
    )
}
