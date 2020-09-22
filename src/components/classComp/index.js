//sample class components
import React from 'react'

class Car extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: 'white',
            make: 'honda',
            model: 'amaze',
            doPurchase: '11-4-2018',
            lastService: '3-8-2020',
            daysLefttoService: '',
            nextService: '',
            serviceStation: '',
            stationStatus: props.properties.stationStatus
        }
        this.dueDateCalc = this.dueDateCalc.bind(this);
        
    }
    componentDidMount(){
        console.log(this.props);
        this.setState((state,props)=>({stationStatus: props.properties.stationStatus,serviceStation: props.properties.serviceStation}))
        this.dueDateCalc();
    }
    shouldComponentUpdate(){
       return true
    }
    componentDidUpdate(){
        console.log(this.state)
      
    }
    
    

    dueDateCalc(){
        let lastServArr = this.state.lastService.split('-')
        let nxtServDate = new Date( lastServArr[2],  parseInt(lastServArr[1])+5, lastServArr[0]) ;
        let currentdate = new Date();
        let daysLeft = ((nxtServDate.getTime()-currentdate.getTime())/(1000*3600*24)).toFixed(0);
        this.setState({daysLefttoService: daysLeft,nextService: nxtServDate.toDateString()})
        // console.log(lastServArr)
    }
    render(){
        return <div>
            <h1>{`${this.state.make} ${this.state.model}`}</h1>
    <p>Color: {this.state.color}</p>
    <p>Next service : {this.state.nextService}</p>
    <p>Days left to next service: {this.state.daysLefttoService}</p>
    <p>Service Station: {this.state.serviceStation}</p>
    <p>Service Station is <code>{this.state.stationStatus?"open":'closed'}</code></p>
        </div>
    }
}
export default Car