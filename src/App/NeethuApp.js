import React, { Component } from 'react';
import Calculators from './Calculator';
import Games from './Game';
 class NeethuApp extends React.Component {
     constructor(props){
        super(props);
        this.state ={activecomponent : 'calc'}
        this.activateApp=this.activateApp.bind(this);
    }
     render(){
         return(<div>
           
             <button onClick={() => this.activateApp('calc')}>calculator </button>
             <button onClick={()=> this.activateApp('gam')}>game</button>
             { this.state.activecomponent =='calc' && <Calculators/> }
             { this.state.activecomponent =='gam' && <Games/> }
             </div>
         )
     }
     activateApp(appname){
        this.setState({
           activecomponent: appname
        })
    } 
 }

 export default NeethuApp;