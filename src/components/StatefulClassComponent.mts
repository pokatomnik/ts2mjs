import Preact, { html } from '../lib/preact.mjs';

export class StatefulClassComponent extends Preact.Component<
  object,
  { clickedTimes: number }
> {
  public readonly state: Readonly<{
    clickedTimes: number;
  }> = {
    clickedTimes: 0,
  };

  private increase = () => {
    this.setState(({ clickedTimes }) => ({
      clickedTimes: clickedTimes + 1,
    }));
  };

  public render() {
    return html`
      <div>
        This is a stateful class component
        <button type="button" onClick=${this.increase}>
          ${this.state.clickedTimes}
        </button>
      </div>
    `;
  }
}
