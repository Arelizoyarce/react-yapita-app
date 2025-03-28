import React from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { styled } from "@mui/system";

const StyledFormControl = styled(FormControl)({
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "2px",
  minWidth: "300px", // Define un ancho fijo
  maxWidth: "300px", // Evita que crezca
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});

const StyledLabel = styled(InputLabel)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const StyledSelect = styled(Select)({
  width: "100%", // Asegura que el Select ocupe el ancho de FormControl
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const CustomSelect = ({ label, icon, options, value, onChange }) => {
  return (
    <StyledFormControl>
      {!value && (
        <StyledLabel shrink={false}>
          {icon}
          {label}
        </StyledLabel>
      )}
      <StyledSelect value={value} onChange={onChange} displayEmpty>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
  );
};

export default CustomSelect;
