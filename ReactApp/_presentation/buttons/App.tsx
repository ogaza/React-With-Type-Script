import { ClickableArea } from "../../src/components/Buttons/ClickableArea/ClickableArea";
import { CloseBtn, OpenBtn } from "../../uiComponents";

export function App() {
  return (
    <div className="presentation-container">
      <ClickableArea value="">Test Btn</ClickableArea>
      <OpenBtn />
      <CloseBtn />
    </div>
  );
}
