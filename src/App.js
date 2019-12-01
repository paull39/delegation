import React from 'react';
import './App.css';
import {Block} from './components/block';
import {Text} from './components/text/text';
import { SectionHeadline } from './components/headline/headline';

function App() {
  return (
    <div className="App">
      <Block 
        section={() => (
          <Text content="hallo"></Text>
          )}
        headline={() => (
          <SectionHeadline></SectionHeadline>
        )}></Block>
    </div>
  );
}

export default App;
