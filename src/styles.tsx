import styled from 'styled-components';

export const Button = styled.button`
    cursor: pointer;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 3px 15px;
    font-size: small;
    outline: none;
    background-color: transparent;
    color: gray;
`;

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 20%;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #131313;
    padding: 20px;
    text-align: center;
`;

export const Header = styled.header`
    text-align: center;

    & h1{
        margin: 0;
        padding: 0;
    }
`;

export const ProductSpan = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #131313;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: background 0.5s ease;
`;

export const Product = styled.div`
    width: 100%;
    height: 100px;
    margin: 10px auto;
    border-radius: 10px;
    cursor: pointer;
    background-image: linear-gradient(135deg, #008aff, #86d472);
    color: #ffffff;
    position: relative;
    z-index: 2;
    padding: 3px;
    justify-content: center;
    align-items: center;


    &:hover ${ProductSpan} {
        background: transparent;
    }
`;

export const ScrollableContainer = styled.div`
    flex: 1;
    overflow-y: auto; /* Enable vertical scrolling */
    padding: 10px;
`;