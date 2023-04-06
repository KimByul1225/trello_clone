import styled from "styled-components";

export const Container = styled.div`
    max-width: 1600px;
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
    color: #fff;
`

export const MainTitle = styled.h2`
    font-size: 72px;
    font-weight: 900;
    margin-bottom: 20px;
    text-shadow: 7px 9px 8px black;

`
export const ButtonWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    button{
        margin: 0 20px;
        box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.7);
    }
`
export const NotiText = styled.p`
    color: #fff;
    font-size: 18px;
    text-shadow: 0px 0px 15px #000;
`
export const BoardWrap = styled.div`
    width: 100%;
`
export const ResetBoardButton = styled.button`
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 8px solid #000;
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
        background-color: #000;
    }
`

export const AddBoardButton = styled.button`
    position: relative;
    border: none;
    outline: none;
    width: 50px;
    height: 50px;
    border: 1px solid #888;
    border-radius: 25px;
    background-color: #fff;
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
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    gap: 20px;
`;

export const DeleteContainer = styled.div`
    position: fixed;
    top: 50px;
    right: 50px;
    width: 150px;
    height: 150px;
`;

export const ModalCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    outline: none;
    background-color: #fff;
    color: #000;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(45deg);
    ::before, ::after{
        content: '';
        display: inline-block;
        background: #888;
        position: absolute;
        tranforn: translate(-50%, -50%);
        width: 20px;
        height: 6px;
        border-radius: 3px;
    }
    ::after{
        width: 6px;
        height: 20px;
    }
`

export const ResetModlaBox = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h3{
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 45px;
    }
`
export const ButtonBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    button{
        position: relative;
        background: #fff;
        border: 1px solid #333;
        top: none;
        right: none;
        transform: rotate(0deg);
        font-size: 16px;
        font-weight: 600;
        width: 100px;
        height: 35px;
        border-radius: 20px;
        margin: 0 10px;
        ::after, ::before{
            display: none;
        }
        transition: all .3s ease;
        :hover{
            background: #000;
            color: #fff;
            border: 1px solid #000;
        }
    }
`