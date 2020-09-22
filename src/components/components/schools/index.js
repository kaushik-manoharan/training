import React from 'react'
import { useParams } from 'react-router'
import Navigation from '../utils/navbar'
export default function Schools(){
    let params = useParams()
    let tab = ['Alchemy','Destruction Magic','Restoration Magic','Necromancy']

    return (
    <div><Navigation/>
        school of {tab[params.id-1]}</div>
    )
}