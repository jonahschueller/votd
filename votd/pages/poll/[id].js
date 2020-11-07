import React from 'react'

class Poll extends React.Component {

     render() {
          return (
               <h3>{this.props.pid}</h3>
          );
     }
}

export async function getServerSideProps(context) {
     const pid = context.query

     console.log(pid)

     return { props: {
               pid: pid.id
          }
     }
}

export default Poll