import { useCallback } from "react";
import StyledModal from "./common/StyledModal";
import { useRecoilState } from "recoil";
import { resetBoardlState } from "../atom";
import { saveTodoToLocalStorage } from "../utils/todo";

const RestCheckModal = () => {
    const [resetModal, setResetModal] = useRecoilState<boolean>(resetBoardlState);

    const closeButtonHandler = useCallback(() => {
        return setResetModal(false);
    }, [setResetModal]);


    return (
        <StyledModal 
            isOpen={resetModal} 
            onRequestClose={closeButtonHandler} 
            ariaHideApp={false} 
            contentLabel="cardModal"
            style={{
                overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.7)"
                }
            }}
        >
            <button type="button" onClick={closeButtonHandler}/>
            <div>
                <h3>정말 전체 삭제 하시겠습니까?</h3>
                <div>
                    <button type="button">확인</button>
                    <button type="button">취소</button>
                </div>
            </div>
        </StyledModal>
    )
}

export default RestCheckModal
