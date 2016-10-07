// This entry point is used by react-rails to render components on the server side.

require('expose?React!react');
require('expose?ReactDOMServer!react-dom/server');

// Expose each component here
window.Hello = require('./components/hello').default;
