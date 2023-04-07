import { useCallback } from "react";
import { Droppable, DroppableProvided, DroppableStateSnapshot } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { boardTitleModalState, boardTitleState, todosState } from "../atom";
import { ITodo } from "../types/common";
import { saveTodoToLocalStorage } from "../utils/todo";
import DraggableCard from "./DraggableCard";

interface DroppableBoardProps {
    boardId: string;
    todos: ITodo[];
}

interface FormData {
    text: string;
}

/**
 * @description Draging되는 업무카드가 그려지기 위한 보드
 */

const DroppableBoard = ({ boardId, todos }: DroppableBoardProps) => {
    const { register, handleSubmit, setValue, getValues } = useForm<FormData>({ mode: "onChange", defaultValues: { text: "" } });
    const setTodos = useSetRecoilState(todosState);
    const setBoardTitleModal = useSetRecoilState(boardTitleModalState);
    const setBoardTitle = useSetRecoilState(boardTitleState);

    const handleEditBoard = useCallback(() => {
        setBoardTitleModal(true);
        setBoardTitle(boardId);
    }, [boardId, setBoardTitleModal, setBoardTitle]);

    const deleteBoardHandler = useCallback(() => {
        setTodos((prev) => {
            const copiedTodos = { ...prev };
            delete copiedTodos[boardId];
            const result = copiedTodos;
            saveTodoToLocalStorage(result);
            return result;
        });
    }, [boardId, setTodos]);

    const onValid = useCallback(() => {
        setTodos((prev) => {
            const { text } = getValues();
            const createdTodo = { id: Date.now(), text };
            const result = { ...prev, [boardId]: [createdTodo, ...prev[boardId]] };
            saveTodoToLocalStorage(result);
            return result;
        });
        setValue("text", "");
    }, [boardId, getValues, setTodos, setValue]);

    return (
        <Container>
            <DeleteBoardButton onClick={deleteBoardHandler}/>
            <Droppable droppableId={boardId}>
                {(provided: DroppableProvided, { isDraggingOver, draggingFromThisWith }: DroppableStateSnapshot) => (
                <Board ref={provided.innerRef} {...provided.droppableProps}>
                    <BoardId onClick={handleEditBoard}>{boardId}</BoardId>
                        <BoardForm onSubmit={handleSubmit(onValid)}>
                            
                            <BoardInput {...register("text", { required: "해야 할 일을 입력하세요." })} type="text" placeholder={`해야 할 일을 추가하세요.`} />
                            <InputButton>확인</InputButton>
                        </BoardForm>
                    <BoardContent isDraggingOver={isDraggingOver} draggingFromThisWith={!!draggingFromThisWith}>
                    {todos.map((todo, index) => (
                        <DraggableCard key={todo.id} index={index} boardId={boardId} todoId={todo.id} todoText={todo.text} />
                    ))}
                    {provided.placeholder}
                    </BoardContent>
                </Board>
                )}
            </Droppable>
        </Container>
    );
};

export default DroppableBoard;

const Container = styled.div`
    position: relative;
`;

const DeleteBoardButton = styled.button`
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
`;

const Board = styled.div`
    background-color: ${({ theme }) => theme.boardColor};
    padding: 25px 10px;
    border-radius: 5px;
    min-height: 200px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    text-align: center;
`;

const BoardId = styled.h1`
    text-align: center;
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 13px;
    color: rgba(45, 52, 54, 1);
    cursor: pointer;
`;

const BoardForm = styled.form`
    position: relative;
`;

const BoardInput = styled.input`
    border: none;
    outline: none;
    padding: 16px 30px;
    padding-left: 10px;
    border-radius: 5px;
    width: calc(100% - 60px);
    font-size: 15px;
`;

const InputButton = styled.button`
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
`

const BoardContent = styled.div<{ isDraggingOver: boolean; draggingFromThisWith: boolean }>`
    height: calc(100% - 30px);
    max-height: 415px;
    overflow-y: auto;
    border-radius: 5px;
    transition: all 0.5s;
    padding: 10px;
    margin-top: 8px;
    box-sizing: border-box;
    background-color: ${({ theme, isDraggingOver, draggingFromThisWith }) => (isDraggingOver ? theme.boardBgColor : draggingFromThisWith ? "rgba(225, 112, 85,0.5)" : "transparent")};
`;
