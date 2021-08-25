import React from 'react';
import { render } from 'react-dom';

import App from './App';
import { config as AmapReactConfig } from '@amap/amap-react';

AmapReactConfig.version = '2.0';
AmapReactConfig.key = 'ac400797537e6abd70d3ecc7f0345594';
AmapReactConfig.plugins = [];

render(<App />, document.getElementById('root'));
