import * as ReactDOM from 'react-dom';
import React from 'react';
import { Experience } from './index';


const handleOnReady = (event) => {
  console.log('onReady', event);

  ReactDOM.render(
    <React.StrictMode>{ExperienceX}</React.StrictMode>,
    document.querySelector('#App'),
  );
};

const ExperienceX = <Experience aprop="foo123" onReady={handleOnReady} />;

// ReactDOM.render(<Experience aprop="foo123" />, document.querySelector('#App'));
const element = document.createElement('div');
ReactDOM.render(<React.StrictMode>{ExperienceX}</React.StrictMode>, element);
