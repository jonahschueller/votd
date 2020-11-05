import React from 'react'
import ReactDOM from 'react-dom'

class PollPreview extends React.Component {

     constructor() {
          super();

          this.state = { 

          }
     }

     static getDerivedStateFromProps(props, state) {
          return props.poll;
     }

     render() {
          return (
               <div class="card">
                    <div class="card-body">
                         <h5 class="card-title">{this.state.data.title}</h5>
                    </div>
               </div>
          );
     }

}

export default PollPreview


