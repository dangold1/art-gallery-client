import React from "react";
import { Typography, Popover, Box } from "@material-ui/core";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import "./styles.css";

export default function PopoverPopupState({ popupBtn, children, isSelected }) {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <button
            className={`popup-button ${isSelected}`}
            {...bindTrigger(popupState)}
          >
            {popupBtn}
          </button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
          >
            <Box p={2}>
              <Typography>{children}</Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
