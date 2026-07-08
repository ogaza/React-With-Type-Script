export function OpenBtn({ ref, children }: { ref?: any; children?: any }) {
  return (
    <button className="open-menu-btn" ref={ref}>
      {children}
    </button>
  );
}
