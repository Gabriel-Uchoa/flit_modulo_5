import styled from "styled-components"

const handleColorType = (color: string, hover: boolean) => {
    switch (color) {
        case "back":
            if (hover) {
                return (props: any) => props.theme.palette.primary.marine_blue;
            } else {
                return (props: any) => props.theme.palette.neutral.cool_gray;
            }
        case "next":
            return (props: any) => props.theme.palette.neutral.white;
        case "confirm":
            return (props: any) => props.theme.palette.neutral.white;
    }
};

const handleBackgroundColorType = (color: string, hover: boolean) => {
    switch (color) {
        case "back":
            return (props: any) => props.theme.palette.neutral.white;
        case "next":
            if (hover) {
                return (props: any) => props.theme.palette.primary.purplish_blue;
            } else {
                return (props: any) => props.theme.palette.primary.marine_blue;
            }
        case "confirm":
            return (props: any) => props.theme.palette.primary.purplish_blue;
    }
};

const ButtonStyle = styled.button`
        cursor: pointer;
        font-size: 14px;
        padding: 10px 20px;
        border-radius: 8px;
        font-weight: bold;
        border: none;
`

const Button: React.FC<{ action: React.MouseEventHandler<HTMLButtonElement>, text: string, type: string, id?: string, className?: string }> = (props) => {
    
    const ButtonStyleReact = styled(ButtonStyle)`
        color: ${handleColorType(props.type, false)};
        background: ${handleBackgroundColorType(props.type, false)};
        &:focus {
            outline: 0;
        };
        &:hover{
            color: ${handleColorType(props.type, true)};
            background: ${handleBackgroundColorType(props.type, true)};
        };
    `

    return (
        <ButtonStyleReact className={props.className} id={props.id} onClick={props.action}>{props.text}</ButtonStyleReact>
    )

}

export default Button