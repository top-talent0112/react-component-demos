import React from 'react';
import {storiesOf} from '@storybook/react';
import Dashboard from '../components/Dashboard';
import { MemoryRouter } from 'react-router-dom';
import '../components/Dashboard/style.css';

storiesOf("Dashboard Story", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add("initial Dashboard", () => (<Dashboard />));