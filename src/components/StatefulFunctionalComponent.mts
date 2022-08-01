import { html, Hooks } from "../lib/preact.mjs";

export function StatefulFunctionalComponent() {
  const [clickedTimes, setClickedTimes] = Hooks.useState(0);

  const increase = Hooks.useCallback(() => {
    setClickedTimes((clickedTimes) => {
      return clickedTimes + 1;
    });
  }, []);

  return html`
    <div>
      This is a stateful functional component
      <button type="button" onClick=${increase}>${clickedTimes}</button>
    </div>
  `;
}
