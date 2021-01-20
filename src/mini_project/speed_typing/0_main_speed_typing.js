// STEP 7 optimization
import React, { useState, useEffect } from 'react';
import './style.css';

function App() {
  let starting_time = 30;
  // count
  const [is_count, setCount] = useState(false);
  const [is_start, setStart] = useState(false);
  const [time, setTime] = useState(starting_time);
  const [content, setContent] = useState('');

  function start() {
    if (is_count && !is_start) {
      setTime(starting_time);
      setStart(false);
      setContent('');
      setCount(false);
    }
    setStart(!is_start ? true : false);
  }

  useEffect(() => {
    if (is_start && time > 0) {
      setTimeout(() => {
        setTime((arg) => arg - 1);
      }, 1000);
    } else if (time === 0) {
      setCount(true);
      setStart(false);
    }
  }, [is_start, time]);

  function write_content(event) {
    if (is_start) {
      const buf = event.target.value;
      setContent(buf);
    }
  }

  function calc_words_count(arg) {
    const arr = arg.trim().split(' ');
    return arr.filter((word) => word !== '').length;
  }

  return (
    <div>
      <h1>Speed Typing</h1>
      <textarea
        placeholder="Tape here"
        value={content}
        onChange={write_content}
        disabled={!is_start}
      />
      <h4>Time remaining: {time}</h4>
      <button disabled={is_start} onClick={start}>
        {is_start ? 'STOP' : 'START'}
      </button>
      <h1>Result: {is_count ? calc_words_count(content) : 'in progress'}</h1>
    </div>
  );
}

export default App;

// // STEP 6
// import React, { useState, useEffect } from 'react';
// import './style.css';

// function App() {
//   let starting_time = 30;
//   // count
//   const [is_count, setCount] = useState(false);
//   const [is_start, setStart] = useState(false);
//   const [time, setTime] = useState(starting_time);
//   const [content, setContent] = useState('');

//   function start() {
//     if (is_count && !is_start) {
//       setTime(starting_time);
//       setStart(false);
//       setContent('');
//       setCount(false);
//     }
//     setStart(!is_start ? true : false);
//   }

//   useEffect(() => {
//     if (is_start && time > 0) {
//       setTimeout(() => {
//         setTime((arg) => arg - 1);
//       }, 1000);
//     } else if (time === 0) {
//       setCount(true);
//       setStart(false);
//     }
//   }, [is_start, time]);

//   function write_content(event) {
//     if (is_start) {
//       const buf = event.target.value;
//       setContent(buf);
//     }
//   }

//   function calc_words_count(arg) {
//     const arr = arg.trim().split(' ');
//     return arr.filter((word) => word !== '').length;
//   }

//   return (
//     <div>
//       <h1>Speed Typing</h1>
//       <textarea
//         placeholder="Tape here"
//         value={content}
//         onChange={write_content}
//       />
//       <h4>Time remaining: {time}</h4>
//       <button onClick={start}>{is_start ? 'STOP' : 'START'}</button>
//       <h1>Result: {is_count ? calc_words_count(content) : 'in progress'}</h1>
//     </div>
//   );
// }

// export default App;

// // STEP 5
// import React, { useState, useEffect } from 'react';
// import './style.css';

// function App() {
//   // count
//   const [is_count, setCount] = useState(false);

//   // start
//   const [is_start, setStart] = useState(false);
//   function start() {
//     setStart(!is_start ? true : false);
//   }

//   // console.log('is_start', is_start);
//   // time
//   const [time, setTime] = useState(20);

//   useEffect(() => {
//     if (is_start && time > 0) {
//       setTimeout(() => {
//         setTime((arg) => arg - 1);
//       }, 1000);
//     } else if (time === 0) {
//       setCount(true);
//       setStart(false);
//     }
//   }, [is_start, time]);

//   // content
//   const [content, setContent] = useState('');

//   function write_content(event) {
//     if (is_start) {
//       const buf = event.target.value;
//       setContent(buf);
//     }
//   }
//   //  console.log('content', content);

//   function calc_words_count(arg) {
//     const arr = arg.trim().split(' ');
//     return arr.filter((word) => word !== '').length;
//   }

//   return (
//     <div>
//       <h1>Speed Typing</h1>
//       <textarea
//         placeholder="Tape here"
//         value={content}
//         onChange={write_content}
//       />
//       <h4>Time remaining: {time}</h4>
//       <button onClick={start}>{is_start ? 'STOP' : 'START'}</button>
//       <h1>Result: {is_count ? calc_words_count(content) : 'in progress'}</h1>
//     </div>
//   );
// }

// export default App;

// STEP 4
// import React, { useState, useEffect } from 'react';
// import './style.css';

// function App() {
//   // start
//   const [is_start, setStart] = useState(false);
//   function start() {
//     setStart(!is_start ? true : false);
//   }

//   // console.log('is_start', is_start);
//   // time
//   const [time, setTime] = useState(3);

//   useEffect(() => {
//     if (is_start && time > 0) {
//       setTimeout(() => {
//         setTime((arg) => arg - 1);
//       }, 1000);
//     } else if (time === 0) {
//       setStart(false);
//     }
//   }, [is_start, time]);

//   // content
//   const [content, setContent] = useState('');

//   function write_content(event) {
//     const buf = event.target.value;
//     setContent(buf);
//   }
//   //  console.log('content', content);

//   function calc_words_count(arg) {
//     const arr = arg.trim().split(' ');
//     return arr.filter((word) => word !== '').length;
//   }

//   return (
//     <div>
//       <h1>Speed Typing</h1>
//       <textarea
//         placeholder="Tape here"
//         value={content}
//         onChange={write_content}
//       />
//       <h4>Time remaining: {time}</h4>
//       <button onClick={start}>{is_start ? 'STOP' : 'START'}</button>
//       <h1>Result: {calc_words_count(content)}</h1>
//     </div>
//   );
// }

// export default App;

// STEP 3 1
// import React, { useState, useEffect } from 'react';
// import './style.css';

// function App() {
//   // start
//   const [is_start, setStart] = useState('false');
//   function start() {
//     setStart(is_start === 'false' ? 'true' : 'false');
//   }

//   console.log('is_start', is_start);
//   // time
//   const [time, setTime] = useState(5);

//   useEffect(() => {
//     if (time > 0)
//       setTimeout(() => {
//         setTime((arg) => arg - 1);
//       }, 1000);
//   }, [time]);

//   // content
//   const [content, setContent] = useState('');

//   function write_content(event) {
//     const buf = event.target.value;
//     setContent(buf);
//   }
//   console.log('content', content);

//   function calc_words_count(arg) {
//     const arr = arg.trim().split(' ');
//     return arr.filter((word) => word !== '').length;
//   }

//   return (
//     <div>
//       <h1>Speed Typing</h1>
//       <textarea
//         placeholder="Tape here"
//         value={content}
//         onChange={write_content}
//       />
//       <h4>Time remaining: {time}</h4>
//       <button onClick={start}>Start</button>
//       <h1>Result: {calc_words_count(content)}</h1>
//     </div>
//   );
// }

// export default App;

// STEP 3 0 FAIL
// import React, { useState, useEffect } from 'react';
// import './style.css';

// function App() {
//   // start
//   const [is_start, setStart] = useState('false');
//   function start() {
//     setStart(is_start === 'false' ? 'true' : 'false');
//   }

//   console.log('is_start', is_start);
//   // time
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     if (is_start === 'true') {
//       setInterval(() => {
//         setTime((arg) => arg + 1);
//       }, 1000);
//     }
//   }, []);

//   // content
//   const [content, setContent] = useState('');

//   function write_content(event) {
//     const buf = event.target.value;
//     setContent(buf);
//   }
//   console.log('content', content);

//   function calc_words_count(arg) {
//     const arr = arg.trim().split(' ');
//     return arr.filter((word) => word !== '').length;
//   }

//   return (
//     <div>
//       <h1>Speed Typing</h1>
//       <textarea
//         placeholder="Tape here"
//         value={content}
//         onChange={write_content}
//       />
//       <h4>Time remaining: {time}</h4>
//       <button onClick={start}>Start</button>
//       <h1>Result: {calc_words_count(content)}</h1>
//     </div>
//   );
// }

// export default App;

// STEP 2
// import React, { useState } from 'react';
// import './style.css';

// function App() {
//   const [content, setContent] = useState('');

//   function write_content(event) {
//     const buf = event.target.value;
//     setContent(buf);
//   }
//   console.log(content);
//   //
//   // let num = content.trim().split(' ').length;
//   // or to avoid the mutate problem... I don't know what is exactly
//   function calc_words_count(arg) {
//     // const arr = arg.trim().split(' ');
//     // let size = 0;
//     // let temp = arr.map((elem) => {
//     //   if (elem.length !== 0) size++;
//     //   return size;
//     // });
//     // return temp[temp.length - 1];

//     // or
//     const arr = arg.trim().split(' ');
//     return arr.filter((word) => word !== '').length;
//   }

//   return (
//     <div>
//       <h1>Speed Typing</h1>
//       <textarea
//         placeholder="Tape here"
//         value={content}
//         onChange={write_content}
//       />
//       <h4>Time remaining: xxx</h4>
//       {/* <h4>Time remaining: {num}</h4> */}
//       <button>Start</button>
//       <h1>Result: {calc_words_count(content)}</h1>
//     </div>
//   );
// }

// export default App;

// STEP 1
// import React, { useState } from 'react';
// import './style.css';

// function App() {
//   const [content, setContent] = useState('');

//   function write_content(event) {
//     const buf = event.target.value;
//     setContent(buf);

//     // catch what you want in the target return
//     // const { value } = event.target;
//     // setContent(value);
//   }
//   console.log(content);

//   return (
//     <div>
//       <h1>Speed Typing</h1>
//       <textarea
//         placeholder="Tape here"
//         value={content}
//         onChange={write_content}
//       />
//       <h4>Time remaining: xxx</h4>
//       <button>Start</button>
//       <h1>Result: xxx</h1>
//     </div>
//   );
// }

// export default App;

// STEP 0
// import React from 'react';
// import './style.css';
// function App() {
//   return (
//     <div>
//       <h1>Speed Typing</h1>
//       <textarea />
//       <h4>Time remaining: xxx</h4>
//       <button>Start</button>
//       <h1>Result: xxx</h1>
//     </div>
//   );
// }

// export default App;
