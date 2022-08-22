import Preact, { html } from './lib/preact.mjs';
import { StatefulClassComponent } from './components/StatefulClassComponent.mjs';
import { StatelessClassComponent } from './components/StatelessClassComponent.mjs';
import { StatefulFunctionalComponent } from './components/StatefulFunctionalComponent.mjs';
import { StatelessFunctionalComponent } from './components/StatelessFunctionalComponent.mjs';
import { TODOApp } from './components/TODOApp.mjs';

export function App() {
  return html`
    <${Preact.Fragment}>
      <h2>Simple clicker demo</h2>
      <${StatelessClassComponent} />
      <${StatefulClassComponent} />
      <${StatelessFunctionalComponent} />
      <${StatefulFunctionalComponent} />
      <${TODOApp} />
      <h2>Dynamic import also works as expected:</h2>
      <button type="button" onClick=${() => {
        import('./components/DynamicModule.mjs')
          .then((module) => {
            module.default('World');
          })
          .catch(() => {
            alert('Dynamic import failed:(');
          });
      }}>load module and run code</button>
    </${Preact.Fragment}>
  `;
}
