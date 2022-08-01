import Preact, { html } from '../lib/preact.mjs';

export class StatelessClassComponent extends Preact.Component {
  public render() {
    return html`<div>This is stateless class component</div>`;
  }
}
