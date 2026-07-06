import { ClickableArea } from "..";
import { useDialogs } from "./useDialogs";

export function DialogContainer() {
  const [isDialogOpen, toggleDialog] = useDialogs();

  return (
    <div className="dialog-presenter" data-isopen={isDialogOpen}>
      <div className="dialog-container">
        <div className="dialog-header">
          <div className="dialog-header-content">
            <ClickableArea value="menuOne" onClick={handleDialogSwitch}>
              Close
            </ClickableArea>
          </div>
        </div>
        <div className="dialog-content">
          <DialogOne />
        </div>
      </div>
    </div>
  );

  function handleDialogSwitch() {
    toggleDialog();
  }
}

function DialogOne() {
  return <div className="dialog-one">Dialog One</div>;
}
