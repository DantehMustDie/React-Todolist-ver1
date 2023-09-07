import { useState } from 'react';
import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const onSumbitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSumbitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Sub</button>
      </form>
    </div>
  );
}

export default TodoForm;
