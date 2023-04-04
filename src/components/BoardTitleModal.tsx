import { useForm } from "react-hook-form";
import { boardTitleModalState, boardTitleState, todosState } from "../atom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { saveTodoToLocalStorage } from "../utils/todo";
import StyledModal from "./common/StyledModal";
import { useCallback } from "react";

interface FormData {
    title: string;
}

const BoardTitleModal = () => {
    const { register, handleSubmit, getValues, setValue } = useForm<FormData>({ mode: "onChange" });
    const [boardTitle, setBoardTitle] = useRecoilState<string>(boardTitleState);
    const [boardTitleModal, setBoardTitleModal] = useRecoilState<boolean>(boardTitleModalState);
    const setTodos = useSetRecoilState(todosState);

    const closeButtonHandler = useCallback(() => {
        return setBoardTitleModal(false);
    }, [setBoardTitleModal]);

    const onValid = useCallback(() => {
        const { title } = getValues();
        setTodos((todos) => {
        const copiedTodos = { ...todos };
        const editingBoard = copiedTodos[boardTitle];
        delete copiedTodos[boardTitle];
        const result = { [title]: editingBoard, ...copiedTodos };
        saveTodoToLocalStorage(result);
        return result;
        });
        setBoardTitle("");
        setValue("title", "");
        closeButtonHandler();
    }, [boardTitle, getValues, closeButtonHandler, setBoardTitle, setTodos, setValue]);

    return (
        <StyledModal 
        isOpen={boardTitleModal} 
        onRequestClose={closeButtonHandler} 
        ariaHideApp={false} 
        contentLabel="boardTitleModal"
        style={{
            overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)"
            }
        }}
        >
        <button type="button" onClick={closeButtonHandler}/>
        <form onSubmit={handleSubmit(onValid)}>
            <div>
            <h1>보드명을 수정해 주세요.</h1>
            <input {...register("title", { required: "수정된 보드명을 입력하세요." })} type="text" placeholder="수정된 보드명을 입력하세요." />
            </div>
        </form>
        </StyledModal>
    );
};

export default BoardTitleModal;
