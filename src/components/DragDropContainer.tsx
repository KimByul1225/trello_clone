import { Boards } from "../styles/mainStyle";

import DroppableBoard from "./DroppableBoard";
import { useRecoilState } from "recoil";
import { todosState } from "../atom";
import { DragDropContext, DragStart, DropResult, ResponderProvided } from "react-beautiful-dnd";
import { saveTodoToLocalStorage } from "../utils/todo";
// import DroppableGarbage from "./DroppableGarbage";

import { ITodosState } from "../types/common";
import { useCallback } from "react";

const DragDropContainer = () => {
    const [todos, setTodos] = useRecoilState<ITodosState>(todosState);

    const onDragStart = useCallback((initial: DragStart, provided: ResponderProvided) => {}, []);

    const onDragEnd = useCallback(
        ({ draggableId, destination, source }: DropResult, provided: ResponderProvided) => {
            if (!destination || destination.index === undefined) {
                return;
            }

        if (source.droppableId === destination.droppableId) {
            setTodos((todos) => {
            const copiedSource = [...todos[source.droppableId]];
            const movedTodoObject = copiedSource[source.index];
            copiedSource.splice(source.index, 1);
            copiedSource.splice(destination.index, 0, movedTodoObject);
            const result = { ...todos, [destination.droppableId]: copiedSource };
            saveTodoToLocalStorage(result);
            return result;
            });
        } else if (source.droppableId !== destination.droppableId) {
            if (destination.droppableId === "garbage") {
            setTodos((todos) => {
                const copiedSource = [...todos[source.droppableId]];
                copiedSource.splice(source.index, 1);
                const result = { ...todos, [source.droppableId]: copiedSource };
                saveTodoToLocalStorage(result);
                return result;
            });
            } else {
            setTodos((todos) => {
                const copiedSource = [...todos[source.droppableId]];
                const movedTodoObject = copiedSource[source.index];
                copiedSource.splice(source.index, 1);
                const copiedDestination = [...todos[destination.droppableId]];
                copiedDestination.splice(destination.index, 0, movedTodoObject);
                const result = { ...todos, [source.droppableId]: copiedSource, [destination.droppableId]: copiedDestination };
                saveTodoToLocalStorage(result);
                return result;
            });
            }
        }
        },
        [setTodos]
    );

    return (
        <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <Boards>
            {Object.keys(todos).map((boardId) => (
                <DroppableBoard key={boardId} boardId={boardId} todos={todos[boardId]} />
            ))}
        </Boards>

        
        
        </DragDropContext>
    );
};

export default DragDropContainer;


