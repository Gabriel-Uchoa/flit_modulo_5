import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import store from "../../store";
import { setTheme } from "../../store/walletTheme/actions";

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: black;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
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
    background: white;

    &:before {
        background: black;
        transform: translate(25px, -50%);
    }
  }
`;
const ToggleSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    store.dispatch(setTheme(e.target.checked))
  };

  return (
    <Label>
      <span>Tema {checked ? "Dark" : "Ligth"}</span>
      <Input checked={checked} type="checkbox" onChange={handleChange} />
      <Switch />
    </Label>
  );
}

export default ToggleSwitch