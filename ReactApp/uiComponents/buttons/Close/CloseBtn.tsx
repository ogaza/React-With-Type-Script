export function CloseBtn({ ref, children }: { ref?: any; children?: any }) {
  return (
    <button className="close-btn pulse" ref={ref}>
      {children}
    </button>
  );
}