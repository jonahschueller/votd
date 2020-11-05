import React from 'react'
import ReactDOM from 'react-dom'
import './PollPreview.css';

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
               <div class="pollPreview">
                    <h5>{this.state.data.title}</h5>
               </div>
          );
     }

}

export default PollPreview


