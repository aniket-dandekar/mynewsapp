// import { render } from '@testing-library/react'
import React, { Component } from 'react'

// export class BtmNavbuttons extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             totalPages : this.props.lastPage,
//             arr : []
//         }
//         for (let i = 1; i <= this.props.lastPage; i++) {
//             this.setState({
//                 arr: this.state.arr.push(i)
//             })
//         }
//     }
//     myString = `<h1>nothing</h1>`
//     txt = "";
//     // numbers.forEach(myFunction);
//     // document.getElementById("demo").innerHTML = txt;

//     // function myFunction(value, index, array) {
//     // txt += value + "<br>"; 
//     // }
//     // componentDidUpdate(){
//     //     // console.log(this.props.lastPage)
//     //     let i = 1;
//     //     while(i<this.props.lastPage){

//     //     }
//     // }
//   render() {
//     return (
//         <div id='nums'>
//             {console.log(this.state.arr)}
//         </div>
//     )
//   }
// }

// export default BtmNavbuttons


class BtmNavbuttons extends Component {

  
    createGrid = () => {
      console.log(this.props.lastPage)
        for (let i = 1; i <= this.props.lastPage; i++) {
          return(
            // <div style={{
            //   position: "absolute",
            //   top: i * 5,
            //   height: 1,
            //   width: "100%",
            //   backgroundColor: "#bfd8e0"
            // }}>
            
              <li className="page-item">
                <button className="btn btn-sm btn-outline-dark">{i}</button>
              </li>
            //{/* </div> */}
          )
        }
      }
    
    render() {
      return (
          this.createGrid()
      )
  }



}
  
  export default BtmNavbuttons;

// export default BtmNavbuttons