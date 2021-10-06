import styled from "styled-components"

export const Button = styled.button`
    background: ${props => props.is_back ? 'transparent' : 'rgba(0, 0, 0, 0.8)' } ;
    border-radius: 14px;
    margin-top: 132px;
    width: 342px;
    height: 74px;
    border: ${props =>props.is_back ? '1px solid #ffffff' : 'none' };
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    &:hover {
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

    img{
        transform: ${props => props.is_back && 'rotateY(180deg)'};
    }
`;