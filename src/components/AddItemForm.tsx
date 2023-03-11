import * as React from 'react';
import { useState } from 'react';
import { SubmitButton } from './SubmitButton';
import './AddItemForm.scss';

export function AddItemForm({ onSubmit, enabled }) {
  const [text, setText] = useState('');
  // const isValid = true;
  const isValid = !!text;
  const canSubmit = isValid && enabled;

  return (
    <section className="add-item">
      <h3>Add item</h3>
      <input type="text" value={text} onChange={handleChange} disabled={!enabled} />
      <SubmitButton onClick={handleSubmit} label="create" enabled={canSubmit} />
    </section>
  );

  function handleSubmit() {
    if (canSubmit) {
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
