import React from 'react';

function addProps(component) {
  const Component = component;
  return function (props) {
    return <Component num="111" {...props} />;
    // return <Component num="111" />;
  };
}

function Hoc(props) {
  // console.log(props);
  console.log(
    "can be showed if there ...props in the extra components, if not that's return 'undefined'",
    props.name
  );
  return <div>Bonjour tout le monde {props.num}</div>;
}

const ExtraProps = addProps(Hoc);
export default ExtraProps;
