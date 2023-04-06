import { useCallback } from "react";
import GlobalStyle from './styles/GlobalStyle';
import { AddBoardButton, Container, MainTitle, BoardWrap, NotiText, TitleWrap, ButtonWrap, ResetBoardButton} from "./styles/mainStyle";
import DragDropContainer from "./components/DragDropContainer";

import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { boardModalState, resetBoardlState, todosState } from "./atom";

import BoardModal from "./components/BoardModal";
import BoardTitleModal from "./components/BoardTitleModal";
import CardModal from "./components/CardModal";
import { saveTodoToLocalStorage } from "./utils/todo";
import RestCheckModal from "./components/RestCheckModal";



function App() {
  const setBoardModal = useSetRecoilState(boardModalState);
  const setResetModal = useSetRecoilState(resetBoardlState);
  const toDos = useRecoilValue(todosState);

  // const resetToDos = useResetRecoilState(todosState);


  const boardLength = Object.keys(toDos).length;
  const addButtonHandler = useCallback(() => {
    setBoardModal(true);
  }, [setBoardModal]);

  // const resetButtonHandler = useCallback(() => {
  //   resetToDos();
  //   saveTodoToLocalStorage(toDos);

  // }, []);
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
              boardLength < 6 ? 
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
              boardLength > 5 && <NotiText>* Board는 6개 까지만 등록 가능 합니다.</NotiText>
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
