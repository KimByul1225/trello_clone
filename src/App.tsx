import { useCallback } from "react";
import GlobalStyle from './styles/GlobalStyle';
import { AddBoardButton, Container, MainTitle, BoardWrap, NotiText, TitleWrap, ButtonWrap, ResetBoardButton} from "./styles/mainStyle";
import DragDropContainer from "./components/DragDropContainer";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { boardModalState, resetBoardlState, todosState } from "./atom";
import BoardModal from "./components/BoardModal";
import BoardTitleModal from "./components/BoardTitleModal";
import CardModal from "./components/CardModal";
import RestCheckModal from "./components/RestCheckModal";



function App() {
  const setBoardModal = useSetRecoilState(boardModalState);
  const setResetModal = useSetRecoilState(resetBoardlState);
  const toDos = useRecoilValue(todosState);

  const boardLength = Object.keys(toDos).length;
  const addButtonHandler = useCallback(() => {
    setBoardModal(true);
  }, [setBoardModal]);

  const resetButtonHandler = () => {
    setResetModal(true);
  }

  return (
    <>
      <GlobalStyle />
      
      <Container>
        <TitleWrap>
          <MainTitle>
            Trello Clone
          </MainTitle>
          <ButtonWrap>
            {
              boardLength < 4 ? 
                <AddBoardButton type="button" onClick={addButtonHandler}/>
              :
                null  
            }
            {
              boardLength > 0 && <ResetBoardButton type="button" onClick={resetButtonHandler}/>
            }
          </ButtonWrap>
          <ButtonWrap>
            {
              boardLength > 3 && <NotiText>* Board는 4개 까지만 등록 가능 합니다.</NotiText>
            }
          </ButtonWrap>
        </TitleWrap>
        <BoardWrap>
          <DragDropContainer />
        </BoardWrap>
      </Container>
      <BoardModal />
      <BoardTitleModal />
      <CardModal />
      <RestCheckModal/>
      
    </>
  );
}

export default App;
