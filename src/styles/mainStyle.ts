import styled from "styled-components";

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`;

export const TitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
`

export const MainTitle = styled.h2`
    font-size: 52px;
    font-weight: 700;
    margin-bottom: 20px;

`
export const ButtonWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    button{
        margin: 0 20px;
    }
`


export const NotiText = styled.p`
    color: red;
    font-size: 16px
`

export const BoardWrap = styled.div`
    width: 100%;
`

export const ResetBoardButton = styled.button`
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 8px solid red;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.7;
    transition: all .3s ease;
    :hover{
        opacity: 1;
        transform: rotate(360deg);
    }
    :before{
        content: '';
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: 8px;
        height: 45px;
        background-color: red;
    }
`

export const AddBoardButton = styled.button`
    position: relative;
    border: none;
    outline: none;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #fff;
    /* box-shadow: rgb(0 0 0 / 35%) 0px 5px 35px; */
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

export const DeleteContainer = styled.div`
    position: fixed;
    bottom: 0px;
    right: 0px;
    width: 150px;
    height: 150px;
`;

