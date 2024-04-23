import './Demo.css';
import Header from '../../components/Header/Header.jsx';
import CoreConcept from '../../components/CoreConcept.jsx';
import TabButton from '../../components/TabButton.jsx';

import { CORE_CONCEPTS } from './data.js';

function Demo() {
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
              <TabButton>Components</TabButton>
              <TabButton>JSX</TabButton>
              <TabButton>Props</TabButton>
              <TabButton>State</TabButton>
            </menu>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Demo;
