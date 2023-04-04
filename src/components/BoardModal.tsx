import { useForm } from "react-hook-form";
import { boardModalState, todosState } from "../atom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { saveTodoToLocalStorage } from "../utils/todo";
import StyledModal from "./common/StyledModal";
import { useCallback } from "react";

interface FormData {
    title: string;
}

const BoardModal = () => {
    const { register, handleSubmit, getValues, setValue } = useForm<FormData>({ mode: "onChange" });
    const [boardModal, setBoardModal] = useRecoilState<boolean>(boardModalState);
    const setTodos = useSetRecoilState(todosState);

    const closeButtonHandler = useCallback(() => {
        return setBoardModal(false);
    }, [setBoardModal]);

    const onValid = useCallback(() => {
        const { title } = getValues();
        setTodos((prev) => {
        const result = { [title]: [], ...prev };
        saveTodoToLocalStorage(result);
        return result;
        });
        setValue("title", "");
        closeButtonHandler();
    }, [getValues, closeButtonHandler, setTodos, setValue]);

    return (
        <StyledModal 
        isOpen={boardModal} 
        onRequestClose={closeButtonHandler} 
        ariaHideApp={false} 
        contentLabel="boardModal" 
        style={{
            overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)"
            }
        }}
        >
        <button type="button" onClick={closeButtonHandler}/>
        <form onSubmit={handleSubmit(onValid)}>
            <div>
            <h1>보드를 추가해 주세요.</h1>
            <input {...register("title", { required: "보드명을 입력해 주세요." })} type="text" placeholder="보드명을 입력해 주세요." />
            </div>
        </form>
        </StyledModal>
    );
};

export default BoardModal;
