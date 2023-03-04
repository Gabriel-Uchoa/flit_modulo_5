import styled from "styled-components"

const handleColorType = (color: string) => {
    switch (color) {
        case "back":
            return (props: any) => props.theme.palette.neutral.cool_gray;
        case "next":
            return (props: any) => props.theme.palette.neutral.white;
        case "confirm":
            return (props: any) => props.theme.palette.neutral.white;
    }
};

const handleBackgroundColorType = (color: string) => {
    switch (color) {
        case "back":
            return (props: any) => props.theme.palette.neutral.white;
        case "next":
            return (props: any) => props.theme.palette.primary.marine_blue;
        case "confirm":
            return (props: any) => props.theme.palette.primary.marine_blue;
    }
};

const Button: React.FC<{ action: React.MouseEventHandler<HTMLButtonElement>, text: string, type: string }> = (props) => {

    const ButtonStyle = styled.button`
        cursor: pointer;
        font-size: 14px;
        padding: 10px 20px;
        border-radius: 8px;
        border: none;
        color: ${handleColorType(props.type)};
        background: ${handleBackgroundColorType(props.type)};
        &:focus {
            outline: 0;
        }
    `
    return (
        <ButtonStyle onClick={props.action}>{props.text}</ButtonStyle>
    )

}

export default Button