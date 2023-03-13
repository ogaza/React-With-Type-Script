import * as React from 'react';
import { useState } from 'react';
import { SubmitButton } from './SubmitButton';
import './AddItemPanel.scss';

export function AddItemPanel({ onSubmit, enabled }) {
  const items = [
    { id: 1, text: 'item 1' },
    { id: 2, text: 'item 2' },
    { id: 3, text: 'item 3' }
  ];

  return (
    <section className="add-item">
      <h3>Add Item</h3>
      {items.map((item) => {
        return (
          <SubmitButton
            key={item.id}
            onClick={() => handleSubmit(item.text)}
            label={item.text}
            enabled={enabled}
          />
        );
      })}
      {/* <input type="text" value={text} onChange={handleChange} disabled={!enabled} /> */}
    </section>
  );

  function handleSubmit(text) {
    if (enabled) {
      onSubmit(text);
      return;
    }
  }
}

// export function AddItemForm({ onSubmit, enabled }) {
//   const [text, setText] = useState('');
//   // const isValid = true;
//   const isValid = !!text;
//   const canSubmit = isValid && enabled;

//   return (
//     <section className="add-item">
//       <h3>Add item</h3>
//       <input type="text" value={text} onChange={handleChange} disabled={!enabled} />
//       <SubmitButton onClick={handleSubmit} label="create" enabled={canSubmit} />
//     </section>
//   );

//   function handleSubmit() {
//     if (canSubmit) {
//       onSubmit(text);
//       setText('');
//       return;
//     }
//   }

//   function handleChange(e) {
//     const value = e.target.value;
//     setText(value);
//   }
// }
