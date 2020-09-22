import React from 'react'
import { Redirect, useLocation } from 'react-router'
import Homepage from './home'
import Schools from './schools'
import Navigation from './utils/navbar'
export default function Home()
{
    let location = useLocation();
    console.log(location)
    return (
        <div></div>

    )
}