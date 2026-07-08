import { ClickableArea } from "../../src/components/Buttons/ClickableArea/ClickableArea";
import { WithPulse, CloseBtn, OpenBtn, usePulse } from "../../uiComponents";

const ClickableAreaWithPulse = usePulse(ClickableArea);

export function App() {
  return (
    <div className="presentation-container">
      <div className="row">
        <div className="row-header">with ripple</div>
        <WithPulse Btn={OpenBtn} />
        <WithPulse Btn={CloseBtn} />
        <ClickableAreaWithPulse value="">Click me</ClickableAreaWithPulse>
        <WithPulse Btn={ClickableArea} value="">
          Click me
        </WithPulse>
      </div>
      <div className="row">
        <div className="row-header">without ripple</div>
        <OpenBtn />
        <CloseBtn />
        <ClickableArea value="">Click me</ClickableArea>
      </div>
    </div>
  );
}
