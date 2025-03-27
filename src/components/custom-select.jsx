import React from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { styled } from "@mui/system";

const StyledFormControl = styled(FormControl)({
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "2px",
  minWidth: "100%",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});

const StyledLabel = styled(InputLabel)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const CustomSelect = ({ label, icon, options, value, onChange }) => {
  return (
    <StyledFormControl>
      {/* El label solo aparece si no hay valor */}
      {!value && (
        <StyledLabel shrink={false}>
          {icon}
          {label}
        </StyledLabel>
      )}
      <Select value={value} onChange={onChange} displayEmpty>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};

export default CustomSelect;
