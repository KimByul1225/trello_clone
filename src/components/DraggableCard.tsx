import { memo, useCallback } from "react";
import { Draggable, DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { cardModalState, cardState, todosState } from "../atom";
import { saveTodoToLocalStorage } from "../utils/todo";

interface DraggableCardProps {
    index: number;
    boardId: string;
    todoId: number;
    todoText: string;
}
/**
 * @description Draging되는 업무카드 하나하나
 */
const DraggableCard = ({ index, boardId, todoId, todoText }: DraggableCardProps) => {
    const setTodos = useSetRecoilState(todosState);
    const setCardModal = useSetRecoilState(cardModalState);
    const setCard = useSetRecoilState(cardState);
    const handleEditTodo = useCallback(() => {
        setCard({ [boardId]: todoId });
        setCardModal(true);
    }, [boardId, todoId, setCard, setCardModal]);
    const handleDeleteTodo = useCallback(() => {
        setTodos((prev) => {
        const copiedTodos = [...prev[boardId]];
        const filteredTodos = copiedTodos.filter((todo) => todo.id !== todoId);
        const result = { ...prev, [boardId]: filteredTodos };
        saveTodoToLocalStorage(result);
        return result;
        });
    }, [boardId, todoId, setTodos]);
    return (
        <Draggable index={index} draggableId={String(todoId)} key={todoId}>
        {(provided: DraggableProvided, { isDragging }: DraggableStateSnapshot) => (
            <CardContainer ref={provided.innerRef} isDragging={isDragging} {...provided.draggableProps} {...provided.dragHandleProps}>
            <CardText isDragging={isDragging}>{todoText}</CardText>
            <CardEditButton type="button" isDragging={isDragging} onClick={handleEditTodo}>
                수정
            </CardEditButton>
            <CardDeleteButton type="button" isDragging={isDragging} onClick={handleDeleteTodo}>
                삭제
            </CardDeleteButton>
            </CardContainer>
        )}
        </Draggable>
    );
};
export default memo(DraggableCard);

const CardContainer = styled.div<{ isDragging: boolean }>`
    background-color: ${({ theme, isDragging }) => (isDragging ? "rgba(89, 194, 255, 0.6)" : theme.cardColor)};
    color: ${({ isDragging }) => (isDragging ? "white" : "black")};
    border: 3px solid ${({ theme, isDragging }) => (isDragging ? "rgba(89, 194, 255, 1)" : theme.cardColor)};
    border-radius: 5px;
    padding: 13px 10px;
    margin-bottom: 10px;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CardText = styled.span<{ isDragging: boolean }>`
    font-size: 18px;
    font-weight: 600;
    color: ${({ isDragging }) => (isDragging ? "white" : "black")};
    margin-right: auto;
`;

const CardEditButton = styled.button<{ isDragging: boolean }>`
    margin-right: 5px;
`;

const CardDeleteButton = styled.button<{ isDragging: boolean }>``;
