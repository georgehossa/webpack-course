import '../css/index.css';
import text from './text';

text();

module.hot ? module.hot.accept('./text.js', () => text()) : '';