import React from 'react'
import {Affair} from './Affair'
import {AffairType, FilterType} from './HW2'
import style from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (Tid: string) => void
    filter: FilterType
}

export function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((m: AffairType) => (
        <Affair
            key={m.id}
            affair={m}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => { props.setFilter('ALL') }
    const setHigh = () => { props.setFilter('NIGH') }
    const setMiddle = () => { props.setFilter('MIDDLE') }
    const setLow = () => { props.setFilter('LOW') }

    const all = (props.filter==='ALL' ? style.active : style.button)
    const nigh = (props.filter==='NIGH' ? style.active : style.button)
    const middle = (props.filter==='MIDDLE' ? style.active : style.button)
    const low = (props.filter==='LOW' ? style.active : style.button)

    return (
        <div>
            {mappedAffairs}
            <button className={all} onClick={setAll} >All</button>
            <button className={nigh} onClick={setHigh} >High</button>
            <button className={middle} onClick={setMiddle}>Middle</button>
            <button className={low} onClick={setLow}>Low</button>
        </div>
    )
}
