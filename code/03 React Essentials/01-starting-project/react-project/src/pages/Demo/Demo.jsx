import './Demo.css';
import Header from '../../components/Header/Header.jsx';
import CoreConcept from '../../components/CoreConcept.jsx';
import TabButton from '../../components/TabButton.jsx';

import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import { useState } from 'react';

//[Work under the hood]: 🚩 Once 'selectedTopic' State Var changed, --> Demo will be re-rendered/re-evaluated/re-executed
function Demo() {
  //👉 Use React Hook at the top-level inside of a Component
  //❗️React will grab the latest State by each render
  const [selectedTopic, setSelectedTopic] = useState('components');

  /*👉 You can respond to events by ❗️declaring eventHandler functions INSIDE your custom Components*/
  //📍Passing ✨Custom Arguments to eventHandler functions
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(`${selectedButton} selected!`);
  }

  //👉 React renders Component to UI (JSX Output):
  return (
    <div className="page-wrapper">
      <div>
        <Header />
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              {/* ❗️under the hood, React will call the actual Component Functions */}
              <CoreConcept
                title={CORE_CONCEPTS[0].title}
                description={CORE_CONCEPTS[0].description}
                image={CORE_CONCEPTS[0].image}
              />
              {/* 👉 use Spread Operator */}
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept {...CORE_CONCEPTS[2]} />
              <CoreConcept {...CORE_CONCEPTS[3]} />
            </ul>
          </section>
          {/* interactive section */}
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton onSelect={() => handleSelect('components')}>
                Components
              </TabButton>
              <TabButton
                onSelect={function () {
                  handleSelect('jsx');
                }}
              >
                JSX
              </TabButton>
              <TabButton onSelect={() => handleSelect('props')}>
                Props
              </TabButton>
              <TabButton onSelect={() => handleSelect('state')}>
                State
              </TabButton>
            </menu>
            {/* Dynamic Content:
              🚩 React will re-render *ONLY the Component with the updated State/Props— 
              (by comparing the outputs of JSX code)
                --> Demo Component will be re-rendered)*/}
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Demo;
