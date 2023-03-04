import styled from "styled-components"

interface Field {
    name: string,
    label: string,
    placeholder: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    value: string,
    error?: string,
}

const ErrorMensage = styled.span`
    color:  ${props => props.theme.palette.primary.strawberry_red};
    float: right;
    font-weight: bold;
    font-size: 14px;
`

const FormFieldStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 0px;
    color: ${props => props.theme.palette.primary.marine_blue};
    &>input{
        border: 1px solid ${props => props.theme.palette.neutral.light_gray};
        width: 100%;
        padding: 10px 20px;
        border-radius: 10px;
        color: ${props => props.theme.palette.primary.marine_blue};
        font-weight: bold;
        outline:none;
        &:focus{
            outline: 1px solid ${props => props.theme.palette.primary.marine_blue};
        }
    }
    &>label{
        margin: 5px 0px;   
    }
`

const FormField = (props: Field) => {
    
    return (
        <FormFieldStyle>
            <label htmlFor={props.name}>{props.label} <ErrorMensage>{props.error}</ErrorMensage></label>
           
            <input
                name={props.name}
                type="text"
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
            />
        </FormFieldStyle>
    )
}

export default FormField