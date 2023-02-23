import styled from "styled-components"

const Button = (props: iInput) => {
    const ButtonStyle = styled.button`
       background-color: ${props.btnId === "btnSacar" ? "#ff0000" : props.btnId === "btnDepositar" ? "#008000" : "gray"};
       padding: 10px 30px;
       border-radius: 20px;
       border: none;
       cursor: pointer;
       box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

       &:hover{
        background-color: ${props.btnId === "btnSacar" ? "#ca0505" : props.btnId === "btnDepositar" ? "#026902" : ""};
       }
    `
    return (
        <ButtonStyle id={props.btnId} type="button" onClick={props.action}>{props.children}</ButtonStyle>
    )
}

export default Button