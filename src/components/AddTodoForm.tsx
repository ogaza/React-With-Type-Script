import * as React from 'react';
import { useState } from 'react';
import { SubmitButton } from './SubmitButton';
import './AddTodoForm.scss';

export function AddTodoForm({ onSubmit }) {
  const [text, setText] = useState('');
  const isValid = !!text;

  return (
    <section className="add-todo">
      <h3>Add todo</h3>
      <input type="text" value={text} onChange={handleChange} />
      <SubmitButton onClick={handleSubmit} label="create" enabled={isValid} />
    </section>
  );

  function handleSubmit() {
    if (isValid) {
      onSubmit(text);
      setText('');
      return;
    }
  }

  function handleChange(e) {
    const value = e.target.value;
    setText(value);
  }
}
