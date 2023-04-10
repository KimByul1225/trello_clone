import styled from "styled-components";
import Modal from "react-modal";

/**
 * @description Modal창 기본 style
 */

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
    form {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        div {
            width: 100%;
            text-align: center;
            position: relative;
            h3 {
                text-align: center;
                margin-bottom: 50px;
                font-size: 24px;
                font-weight: 700;
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
            button{
                position: absolute;
                right: 50px;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
`;

export default StyledModal;
