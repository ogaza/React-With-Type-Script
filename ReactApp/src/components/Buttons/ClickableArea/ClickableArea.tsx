interface IClickableAreaProps {
  dataTestId?: string;
  description?: string;
}

export function ClickableArea(props: IClickableAreaProps) {
  const { dataTestId, description } = props;

  return (
    <button
      type="button"
      className="clickable-area"
      onClick={handleClick}
      data-testid={dataTestId}
      aria-label={description}
    />
  );
}

function handleClick() {}
