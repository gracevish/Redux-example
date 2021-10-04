
import React from 'react';
import {connect} from 'react-redux';
import Child1 from './Components/child1';
function App(props) {
  return (
    <div className="App">
     <Child1 d={props.data} />
    </div>
  );
}
const mapStateToProps= (state)=>{
  return{ data: state.data}
 }
 const mapDispatchToProps=dispatch =>{
   return{
     d1:()=>dispatch({type:"UPDATEDATA", data:"cereals"})
   }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(App);
