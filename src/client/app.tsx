import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouterConfig } from '@src/client/config/router';
import Layout from '@src/client/components/layout/layout';

const App = () => {
    return (
        <Router>
            <Layout />
        </Router>
    );
};

render(<App />, document.getElementById('root'));
