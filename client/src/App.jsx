import { ViewColumn } from '@material-ui/icons';
import React from 'react';

import Header from './components/Header.jsx';
import Projects from './components/Projects.jsx';

const App = () => {
    return (
        <div id="projectContainer">
            <Header />
            <Projects />
        </div>
    );
};

export default App;
