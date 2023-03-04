import styled from "styled-components"

const DescribeStyle = styled.div`
    width: 100%;
    color: ${props => props.theme.palette.primary.marine_blue};
`
const Title = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.theme.palette.primary.marine_blue};
`

const Subtitle = styled.p`
    color: ${props => props.theme.palette.neutral.cool_gray};
`

const Describe: React.FC<{ title: string, subtitle: string }> = (props) => {
    return (
        <DescribeStyle>
            <Title>{props.title}</Title>
            <Subtitle>{props.subtitle}</Subtitle>
        </DescribeStyle>
    )
}

export default Describe