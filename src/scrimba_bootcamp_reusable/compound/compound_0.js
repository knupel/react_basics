import React, { Fragment, useState } from 'react';

import '../style/accordion.css';

function Accordion({ data, position, disabled = -1 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  //const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div data-accordion>
      {data.map((tab, index) => {
        const isActive = index === activeIndex;
        let isDisabled = false;
        function show_title() {
          if (isActive && disabled >= 0) {
            isDisabled = true;
          }
          // nested ternary opération, javascript weird speciality
          return isDisabled ? 'disabled' : isActive ? 'expanded' : '';
        }
        // title
        const title = (
          <div
            data-panel-title
            className={show_title()}
            onClick={() => {
              if (!isDisabled) setActiveIndex(index);
            }}
          >
            <span>{tab.label}</span>
            <span>{tab.icon}</span>
          </div>
        );
        // content
        const content = (
          <div data-panel-content className={isActive ? 'expanded' : ''}>
            {tab.content}
          </div>
        );

        return (
          <Fragment key={index}>
            {position === 'content_bottom'
              ? [title, content]
              : [content, title]}
          </Fragment>
        );
      })}
    </div>
  );
}

function App() {
  const data = [
    {
      label: 'Paris',
      icon: '🧀',
      content: <Description city="paris" />
    },
    {
      label: 'Lech',
      icon: '⛷',
      content: <Description city="lech" />
    },
    {
      label: 'Madrid',
      icon: '🍷',
      content: <Description city="madrid" />
    }
  ];

  const position = 'content_top';

  return (
    <div className="App">
      {/* The idea to pass or not disable position is can be used or not the option */}
      <Accordion data={data} position={position} />
      {/* <Accordion data={data} position={position} disabled={1} /> */}
    </div>
  );
}

function Description({ city }) {
  const data = {
    paris:
      "Paris is the capital and most populous city of France, with a population of 2,148,271 residents. Since the 17th century, Paris has been one of Europe's major centres of finance, diplomacy, commerce, fashion, science and the arts.",
    lech:
      'Lech am Arlberg is a mountain village and an exclusive ski resort in the Bludenz district in the Austrian state of Vorarlberg on the banks of the river Lech.',
    madrid:
      'Madrid is the capital and most populous city of Spain. As the capital city of Spain, seat of government, and residence of the Spanish monarch, Madrid is also the political, economic and cultural centre of the country.'
  };

  return <div>{data[city]}</div>;
}

export default App;
