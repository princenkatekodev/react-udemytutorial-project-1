import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';


function App() {
  const [selectedTab, setSelectedTab] = useState();
  // console.log('current state: '+ selectedTab)
  function handleSelect(selectedButton) {
    setSelectedTab(selectedButton);
    // console.log('state to update: ' + selectedTab)
  }

  let tabContent = <p>Please select a topic.</p>

  if (selectedTab) {
    tabContent = (
      <div id="tab-content">
          <h3>{EXAMPLES[selectedTab].title}</h3>
          <p>{EXAMPLES[selectedTab].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTab].code}</code>
          </pre>
        </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* Map produces new array based on existing array. We use ... (spread operator) since our component attribute 
            match the data.js array attributes. key prop should uniquely identify a list item (This is used by React to render list). */}
            {CORE_CONCEPTS.map((concept) => <CoreConcept key={concept.title} {...concept} />)}
          </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton 
                label="Components" 
                onSelect={() => handleSelect('components')}  // We are parsing a pointer to our component which will tell onclick event which function to execute
                isSelected={selectedTab === 'components'}
              />
              <TabButton 
                label="JSX" 
                onSelect={() => handleSelect('jsx')}
                isSelected={selectedTab === 'jsx'}   
              />
              <TabButton 
                label="Props" 
                onSelect={() => handleSelect('props')}
                isSelected={selectedTab === 'props'} 
              />
              <TabButton 
                label="State" 
                onSelect={() => handleSelect('state')}
                isSelected={selectedTab === 'state'}
              />
            </menu>
            {tabContent}
          </section> 
      </main>
    </div>
  );
}

export default App;
