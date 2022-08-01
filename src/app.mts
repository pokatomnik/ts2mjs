import Preact, { html } from './lib/preact.mjs';
import { StatefulClassComponent } from './components/StatefulClassComponent.mjs';
import { StatelessClassComponent } from './components/StatelessClassComponent.mjs';
import { StatefulFunctionalComponent } from './components/StatefulFunctionalComponent.mjs';
import { StatelessFunctionalComponent } from './components/StatelessFunctionalComponent.mjs';

export function App() {
  return html`
    <${Preact.Fragment}>
      <${StatelessClassComponent} />
      <${StatefulClassComponent} />
      <${StatelessFunctionalComponent} />
      <${StatefulFunctionalComponent} />
    </${Preact.Fragment}>
  `;
}
