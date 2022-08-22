import { createRoot } from 'react-dom/client';
import './index.css';
import { Root } from './Root';
import React from 'react';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.Fragment>
        <Root />
    </React.Fragment>
    );