import * as ReactDOM from 'react-dom';
import React from 'react';
import { Experience } from './index';

const element = document.createElement('div');

const handleOnReady = (event) => {
  console.log('onReady', event);

  ReactDOM.render(
    <React.StrictMode>{ExperineceX}</React.StrictMode>,
    document.querySelector('#App'),
  );
};

const ExperineceX = <Experience aprop="foo123" onReady={handleOnReady} />;

// ReactDOM.render(<Experience aprop="foo123" />, document.querySelector('#App'));
ReactDOM.render(<React.StrictMode>{ExperineceX}</React.StrictMode>, element);
