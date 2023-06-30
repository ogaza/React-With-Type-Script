import * as React from 'react';
import { Tail } from '../../common/components/tails/Tail';
import './ArticlesPanel.scss';

export function ArticlesPanel({ items, onItemSelected, enabled = true }) {
  return (
    <section className="add-item">
      <h3>Articles</h3>
      <div className="items-container">{items.map(mapItemToTail)}</div>
    </section>
  );

  function mapItemToTail({ id, name, price }) {
    return (
      <Tail
        key={id}
        id={id}
        label={name}
        onClick={getTailClickedHandler({ id, name, price })}
        enabled={true}
      />
    );
  }

  function getTailClickedHandler(item) {
    return function handleClick() {
      // console.log('ArticlesPanel:handleClick', id);
      onItemSelected(item);
    };
  }
}
