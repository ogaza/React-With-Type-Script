interface IClickableAreaProps {
  value: string;
  dataTestId?: string;
  description?: string;
  onClick?: (value: string) => void;
  children?: string;
  ref?: any;
}

export function ClickableArea(props: IClickableAreaProps) {
  const { value, dataTestId, description, onClick, children, ref } = props;

  return (
    <button
      type="button"
      className="clickable-area"
      onClick={handleClick}
      data-testid={dataTestId}
      aria-label={description}
      value={value}
      ref={ref}
    >
      {children}
    </button>
  );

  function handleClick() {
    onClick && onClick(value);
  }
}
