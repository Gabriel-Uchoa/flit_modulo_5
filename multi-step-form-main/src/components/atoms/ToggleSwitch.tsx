import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Switch = styled.div`
  position: relative;
  width: 40px;
  height: 18px;
  background: ${props => props.theme.palette.primary.marine_blue};
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;
  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
  &:checked + ${Switch} {
    background: ${props => props.theme.palette.primary.marine_blue};
    &:before {
        background: white;
        transform: translate(18px, -50%);
    }
  }
`;
const ToggleSwitch:React.FC<{checked: boolean, handleChange:React.ChangeEventHandler}> = (props) => {
 

  return (
    <Label>
      <span>Monthly</span>
      <Input checked={props.checked} type="checkbox" onChange={props.handleChange} />
      <Switch />
      <span>Yearly</span>
    </Label>
  );
}

export default ToggleSwitch