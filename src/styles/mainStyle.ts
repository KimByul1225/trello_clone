import styled from "styled-components";

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const AddBoardButton = styled.button`
    position: absolute;
    top: 50px;
    right: 50px;
    border: none;
    outline: none;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #fff;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .3s ease;
    :hover{
        transform: rotate(360deg);
    }
    ::before, ::after{
        content: '';
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #888;
        border-radius: 10px;
    }
    :after{
        width: 8px;
        height: 35px;
    }
    ::before{
        width: 35px;
        height: 8px;
    }

`;

export const Boards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    gap: 20px;
`;

export const Garbage = styled.div`
    position: fixed;
    bottom: 0px;
    right: 0px;
    width: 150px;
    height: 150px;
`;