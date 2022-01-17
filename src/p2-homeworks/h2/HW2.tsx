import React, {useState} from 'react'
import {Affairs} from './Affairs'
import {v1} from "uuid";

export type AffairPriorityType = 'NIGH' | 'LOW' | 'MIDDLE' //типизация для типов фильтра
export type AffairType = {
    id: string
    name: string
    priority: AffairPriorityType    //типизация для priority
}
export type FilterType = 'ALL' | AffairPriorityType
const defaultAffairs: AffairType[] = [              //типизация для defaultAffairs
    {id: v1(), name: 'React ', priority: 'NIGH'},
    {id: v1(), name: 'anime ', priority: 'LOW'},
    {id: v1(), name: 'games ', priority: 'LOW'},
    {id: v1(), name: 'work ', priority: 'NIGH'},
    {id: v1(), name: 'html & css ', priority: 'MIDDLE'},
]

export function filterAffairs(affairs: AffairType[], filter: FilterType) {
    return filter ==='ALL' ? affairs : affairs.filter(f => f.priority === filter)
}

function deleteAffair(affairs: AffairType[], Tid: string) {
    return affairs.filter(t => t.id !== Tid)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('ALL')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (Tid: string) => setAffairs(deleteAffair(affairs, Tid));

    return (
        <div>
            <hr/>
            homeworks 2
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}
            />
        </div>
    )
}

export default HW2
