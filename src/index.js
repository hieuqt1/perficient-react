//this file is executed first

import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

//.render(a, b) tells React to replace b with whatever is in a
//document.getElementById('root') points to <div id='root'> in public/index.html file

ReactDOM.render(<App />, document.getElementById('root'));
