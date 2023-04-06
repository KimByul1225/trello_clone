import { useCallback } from "react";
import StyledModal from "./common/StyledModal";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { resetBoardlState, todosState } from "../atom";
import { saveTodoToLocalStorage } from "../utils/todo";
import { ButtonBox, ModalCloseButton, ResetModlaBox } from "../styles/mainStyle";

const RestCheckModal = () => {
    const [resetModal, setResetModal] = useRecoilState<boolean>(resetBoardlState);
    const resetToDos = useResetRecoilState(todosState);
    const toDos = useRecoilValue(todosState);

    const closeButtonHandler = useCallback(() => {
        return setResetModal(false);
    }, [setResetModal]);
    
    const resetButtonHandler = () => {
        setResetModal(false);
        resetToDos();
        saveTodoToLocalStorage(toDos);
    }

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
            <ModalCloseButton type="button" onClick={closeButtonHandler}/>
            <ResetModlaBox>
                <h3>정말 전체 삭제 하시겠습니까?</h3>
                <ButtonBox>
                    <button type="button" onClick={resetButtonHandler}>확인</button>
                    <button type="button" onClick={closeButtonHandler}>취소</button>
                </ButtonBox>
            </ResetModlaBox>
        </StyledModal>
    )
}

export default RestCheckModal
