import React from 'react';
import { Link } from 'react-router';


const Main = (props) => {
  return (
    <div>
      <h1><Link to='/'>cloudtype.me</Link></h1>
      {React.cloneElement(props.children, props)}
    </div>
  )
}

export default Main;


// export default React.createClass({
//   render() {
//     return (
//       <div>
//         <h1><Link to='/'>cloudtype.me</Link></h1>
//         {React.cloneElement(this.props.children, this.props)}
//       </div>
//     )
//   }
// })
