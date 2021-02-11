import React, { useState, useEffect, useRef } from 'react';

function useOver() {
  const [over, set_over] = useState(false);

  const ref = useRef(null);

  function enter() {
    set_over(true);
  }

  function leave() {
    set_over(false);
  }

  useEffect(() => {
    ref.current.addEventListener('mouseenter', enter);
    ref.current.addEventListener('mouseleave', leave);

    return () => {
      if (ref !== null && ref.current !== null) {
        ref.current.removeEventListener('mouseenter', enter);
        ref.current.removeEventListener('mouseleave', leave);
      }
    };
  }, []);

  return [over, ref];
}

function Func() {
  const [is, ref] = useOver();
  return (
    <div ref={ref}>{is ? <div>C'est vrai</div> : <div>C'est faux</div>}</div>
  );
}

export default Func;
