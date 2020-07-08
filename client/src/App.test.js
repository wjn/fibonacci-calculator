import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {});

/**
 * Currently the <App> component calls the <Fib> component which makes api
 * and database calls. When building these containers with dockers these
 * services won't be ready when this test runs. Stephen has gutted the test
 * in order to solve for this; however, I wonder if we can't use the
 * `depends-on` flag in docker-compose to get around this. ???
 */
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
