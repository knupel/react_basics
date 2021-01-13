import React from 'react';

function Comp(props) {
  console.log('props.list', props.list);
  return (
    <div>
      <div>{props.a}</div>
      <div>
        {props.list[0]}, {props.list[1]}
      </div>
      <div>{props.func(0)}</div>
    </div>
  );
}

function Props0() {
  return (
    <div>
      <Comp
        a="Hahahah"
        list={['aa', 'bb']}
        func={function (number) {
          let mess = 'is a number';
          if (number > -10 && number < 10) {
            mess = 'is a number, but also a digit or a figure';
          }
          return (
            <div>
              {number} {mess}
            </div>
          );
        }}
      />
    </div>
  );
}

function func_to_class(component) {
  return function (props) {
    return <Props0 component={component} {...props} />;
  };
}

const C = func_to_class(Props0);
export default C;
