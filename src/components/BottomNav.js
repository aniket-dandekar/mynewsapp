import React, { Component } from 'react'
// import BtmNavbuttons from './BtmNavbuttons'

export class BottomNav extends Component {

  render() {
    return (
        <nav aria-label="Page navigation example my-3">
        <ul className="pagination justify-content-between">
          <li className="page-item">
            {(this.props.page <= 1) ? <span></span> : 
            
            <button onClick={()=>{this.props.handlenav('prev')}} className="btn btn-sm btn-outline-dark">&larr; Previous</button>
            }
          </li>
            {/* <BtmNavbuttons lastPage={this.props.lPage}/> */}
          

          
          
          <li className="page-item">
          {this.props.lastpage ? <span></span> :
            <button onClick={()=>{this.props.handlenav('next')}} className="btn btn-sm btn-outline-dark">Next &rarr;</button>
          }
          </li>
        </ul>
      </nav>
    )
  }
}

export default BottomNav