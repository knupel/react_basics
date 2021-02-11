import React from 'react';
import '../../css/style.css';

const super_style = {
  color: 'white',
  // we are in JSX so the special char is not accepted
  // font-size became fontSize
  fontSize: 24,
  // background-color became backgroundColor
  backgroundColor: 'red'
};

export default class PureStyle extends React.Component {
  render() {
    return (
      <div>
        {/* direct style the thing interessting the size font is not similar */}
        <h1 style={{ color: 'cyan', fontSize: '12px' }}>Stan le punk!</h1>
        {/* style via a const */}
        <h1 style={super_style}>Stan le punk!</h1>
        {/* import style the thing interessting the size font is not similar*/}
        <h1 className="style"> Stan le punk!</h1>
      </div>
    );
  }
}

// export function Style() {
//   return (
//     <div clasName="style">
//       truc
//       {/* direct style */}
//       {/* <h1 style={{ color: 'cyan' }}>Stan le punk!</h1> */}
//       {/* import style */}
//       <h1> Stan le punk!</h1>
//     </div>
//   );
// }
