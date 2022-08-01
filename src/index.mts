import Preact from './lib/preact.mjs';
import { App } from './app.mjs';

function bootstrap(where: HTMLElement) {
  Preact.render(Preact.createElement(App, null), where);
}

document.addEventListener('DOMContentLoaded', function initUI() {
  const appRoot = document.getElementById('root');
  if (appRoot) {
    bootstrap(appRoot);
  } else {
    console.error('Document root not found!');
  }
  document.removeEventListener('DOMContentLoaded', initUI);
});
