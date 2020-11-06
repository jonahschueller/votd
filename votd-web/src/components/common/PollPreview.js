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

     date() {
          let date = new Date(this.state.data.timestamp._seconds * 1000);

          return date.toLocaleString();
     }

     render() {
          return (
               <div class="pollPreview">
                    <h5 class="date">{this.date()}</h5>
                    <h4>{this.state.data.title}</h4>
               </div>
          );
     }

}

export default PollPreview;


