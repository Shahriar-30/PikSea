import React from "react";
import Button from "@mui/material/Button";

function MyButton({ txt, disabled, onClick, size, startIcon }) {
  return (
    <>
      <Button
        variant="contained"
        disabled={disabled}
        onClick={onClick}
        size={size == "lg" ? "large" : "medium"}
        className="myButton"
        startIcon={startIcon}
        loading="true"
      >
        {txt}
      </Button>
    </>
  );
}

export default MyButton;
