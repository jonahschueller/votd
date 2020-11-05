import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PollPreview from '../common/PollPreview'

const apiURL = 'https://us-central1-code-it-292909.cloudfunctions.net/votd-rest-API'

class Home extends Component {

     constructor(props) {
          super(props);

          this.state = { 
               popularPolls: [],
               latestPolls: []
          }
     }

     componentDidMount() {
          // Fetch the latest polls
          console.log(`${apiURL}/polls/latest/`);
          fetch(`${apiURL}/polls/latest/`, { mode: 'cors' })
          .then(res => {
               return res.json()
          }) // Convert the result to json
          .then(data => {
               console.log('got data')
               return this.setState({latestPolls: data.polls }) // Set the state
          }).catch(err => {
               console.error(err)
          }) // Console log any errros

          // Fetch the most popular polls
          fetch(`${apiURL}/polls/popular/`, { mode: 'cors' })
          .then(res => res.json()) // Convert the result to json
          .then(data => {
               console.log(data);
               this.setState({popularPolls: data.polls}) // Set the state
          }).catch(err => console.log(err)) // Console log any errros
     }

     render() {
          return (<div>
               <div>
                    <p>Latest</p>
                    {
                         this.state.latestPolls.map(poll => {
                              return (<PollPreview poll={poll}></PollPreview>);
                              // return (<p>fhow</p>);
                         })
                    }
               </div>
               <div>
                    <p>Popular</p>
                    {
                         this.state.popularPolls.map(poll => {
                              return (<PollPreview poll={poll}></PollPreview>);
                              // return (<p>fhow</p>);
                         })
                    }
               </div>

          </div>);
     }
}

export default Home