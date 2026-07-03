export function Menu({ isOpen: isOpen, children, style }: IMenuProps) {
  return (
    <div className="menu" data-isopen={!!isOpen} style={style}>
      {children}
    </div>
  );
}

export interface IMenuProps {
  isOpen: boolean;
  style?: { [key: string]: string };
  children?: string | React.JSX.Element;
}
