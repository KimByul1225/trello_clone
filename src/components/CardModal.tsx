import { useForm } from "react-hook-form";
import { cardModalState, cardState, todosState } from "../atom";
import { useRecoilState, useSetRecoilState } from "recoil";
import StyledModal from "./common/StyledModal";
import { saveTodoToLocalStorage } from "../utils/todo";
import { useCallback } from "react";
import { ModalCloseButton } from "../styles/mainStyle";

interface FormData {
    text: string;
}
/**
 * @description 내용 수정을 위한 모달창.
 */

const CardModal = () => {
    const { register, handleSubmit, getValues, setValue } = useForm<FormData>({ mode: "onChange" });
    const [card, setCard] = useRecoilState(cardState);
    const [cardModal, setCardModal] = useRecoilState<boolean>(cardModalState);
    const setTodos = useSetRecoilState(todosState);

    const closeButtonHandler = useCallback(() => {
        return setCardModal(false);
    }, [setCardModal]);

    const onValid = useCallback(() => {
        const { text } = getValues();
        setTodos((prev) => {
        const cardKey = Object.keys(card)[0];
        const cardValue = Object.values(card)[0];
        const { [cardKey]: todosToEdit, ...restTodos } = prev;
        const editedTodo = { id: cardValue, text };
        const updatedTodos = [editedTodo, ...todosToEdit.filter((todo) => todo.id !== editedTodo.id)];
        const result = { ...restTodos, [cardKey]: updatedTodos };
            saveTodoToLocalStorage(result);
            return result;
        });
        setCard({});
        setValue("text", "");
        closeButtonHandler();
    }, [card, getValues, closeButtonHandler, setCard, setTodos, setValue]);

    return (
        <StyledModal 
            isOpen={cardModal} 
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
            <form onSubmit={handleSubmit(onValid)}>
                <div>
                    <h3>내용을 수정해 주세요.</h3>
                    <div>
                        <input {...register("text", { required: "수정 된 내용을 입력 하세요." })} type="text" placeholder="수정 된 내용을 입력 하세요." />
                        <button>확인</button>
                    </div>
                </div>
            </form>
        </StyledModal>
    );
};

export default CardModal;
