import { Hooks, html } from '../lib/preact.mjs';

function generateId() {
  return Math.random().toString(36).slice(2);
}

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export function TODOApp() {
  const [currentText, setCurrentText] = Hooks.useState('');

  const [todos, setTodos] = Hooks.useState<Map<string, Todo>>(new Map());

  const handleSubmit = (evt: Event) => {
    evt.preventDefault();
    const newTodo: Todo = {
      id: generateId(),
      completed: false,
      text: currentText,
    };
    setTodos(new Map(todos).set(newTodo.id, newTodo));
    setCurrentText('');
  };

  return html`
    <div>
      <h2>TODO app</h2>
      <form onSubmit=${handleSubmit}>
        <div style="display: flex">
          <input
            placeholder="Describe what must be done"
            value=${currentText}
            onInput=${(evt: InputEvent) => {
              if (evt.currentTarget instanceof HTMLInputElement) {
                setCurrentText(evt.currentTarget.value);
              }
            }}
          />
          <button type="submit">Add</button>
        </div>
        <ul style="list-style: none; padding: 0; margin: 0;">
          ${Array.from(todos.entries()).map(([id, todo]) => {
            const liStyle = todo.completed
              ? 'text-decoration: line-through'
              : '';
            return html`
              <li style=${liStyle}>
                <label>
                  <input
                    type="checkbox"
                    checked=${todo.completed}
                    onChange=${(evt: InputEvent) => {
                      const currentTarget = evt.currentTarget;
                      if (currentTarget instanceof HTMLInputElement) {
                        setTodos((todos) => {
                          return new Map(todos).set(id, {
                            ...todo,
                            completed: currentTarget.checked,
                          });
                        });
                      }
                    }}
                  />
                  <span>${todo.text}</span>
                </label>
              </li>
            `;
          })}
        </ul>
      </form>
    </div>
  `;
}
