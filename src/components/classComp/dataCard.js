import React from 'react'
export default function DataCard({state}){

    return(
        <div style={{border: '1px solid white',padding: '2%',borderRadius: '10%',margin: '1% auto'}}>
        <h1>{`${state.make} ${state.model}`}</h1>
<p>Color: {state.color}</p>
<p>Next service : {state.nextService}</p>
<p>Days left to next service: {state.daysLefttoService}</p>
<p>Service Station: {state.serviceStation}</p>
<p>Service Station is <code>{state.stationStatus?"open":'closed'}</code></p>
    </div>
    )
}