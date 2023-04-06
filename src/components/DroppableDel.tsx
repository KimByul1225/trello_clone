import { Droppable, DroppableProvided, DroppableStateSnapshot } from "react-beautiful-dnd";
import styled from "styled-components";

const DroppableDel = () => {
    return (
        <Container>
            <Droppable droppableId="garbage">
                {(provided: DroppableProvided, { isDraggingOver, draggingFromThisWith }: DroppableStateSnapshot) => (
                <Content ref={provided.innerRef} isDraggingOver={isDraggingOver} draggingFromThisWith={!!draggingFromThisWith} {...provided.droppableProps}>
                    {isDraggingOver ? 
                        <p>드롭 하세요.</p>
                    : 
                        <p>일감을 드롭하면 삭제 됩니다.</p>
                    }
                    {/* {provided.placeholder} */}
                </Content>
                )}
            </Droppable>
        </Container>
    );
};
export default DroppableDel;

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Content = styled.div<{ isDraggingOver: boolean; draggingFromThisWith: boolean }>`
    width: 100%;
    height: 100%;
    background-color: ${({ isDraggingOver}) => (isDraggingOver ? "rgba(255, 255, 255, 0.344)" : "transparent")};
    border: 3px dashed ${({ isDraggingOver}) => (isDraggingOver ? "red" : "white")};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-size: 24px;
        color: ${({ isDraggingOver}) => (isDraggingOver ? "red" : "white")};
        word-break: keep-all;
        text-align: center;
        line-height: 1.4;
    }
`;

