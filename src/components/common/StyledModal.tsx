import styled from "styled-components";
import Modal from "react-modal";

const StyledModal = styled(Modal)`
    outline: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 250px;
    background-color: #ddd;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    button {
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
    }
    form {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        div {
        width: 100%;
        text-align: center;
        h1 {
            text-align: center;
            margin-bottom: 50px;
            font-size: 25px;
            font-weight: 400;
        }
        input {
            border: none;
            outline: none;
            font-size: 16px;
            padding: 17px 20px;
            padding-left: 13px;
            border-radius: 5px;
            width: calc(100% - 100px);
        }
        }
    }
`;

export default StyledModal;
