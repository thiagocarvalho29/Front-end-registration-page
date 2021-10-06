import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle'
import Routes from './routes'

ReactDOM.render(
    <>
        <Routes /> < GlobalStyle />
    </>,
    document.getElementById('root')
);