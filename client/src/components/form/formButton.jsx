import React from "react";
import Button from "@mui/material/Button";

const FormButton = ({
  variant,
  component,
  size,
  color,
  onClick,
  disabled,
  node,
}) => {
  return (
    <Button
      variant={variant}
      component={component}
      size={size}
      color={color}
      onClick={onClick}
      disabled={disabled}
      fullWidth>
      {node}
    </Button>
  );
};


export default React.memo(FormButton);