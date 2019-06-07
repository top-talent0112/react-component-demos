import React from 'react';
import {storiesOf} from '@storybook/react';
import App from '../App.js';

storiesOf("Main React App", module)
    .add("The main app", () => <App />);