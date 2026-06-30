interface IClickableAreaProps {
  dataTestId?: string;
  description?: string;
  onClick?: () => void;
  children?: string;
}

export function ClickableArea(props: IClickableAreaProps) {
  const { dataTestId, description, onClick, children } = props;

  return (
    <button
      type="button"
      className="clickable-area"
      onClick={handleClick}
      data-testid={dataTestId}
      aria-label={description}
    >
      {children}
    </button>
  );

  function handleClick() {
    onClick && onClick();
  }
}

