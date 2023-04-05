import { useCallback } from "react";
import GlobalStyle from './styles/GlobalStyle';
import { AddBoardButton, Container} from "./styles/mainStyle";
import DragDropContainer from "./components/DragDropContainer";

import { useSetRecoilState } from "recoil";
import { boardModalState } from "./atom";

import BoardModal from "./components/BoardModal";
import BoardTitleModal from "./components/BoardTitleModal";
import CardModal from "./components/CardModal";



function App() {
  const setBoardModal = useSetRecoilState(boardModalState);

  const addButtonHandler = useCallback(() => {
    setBoardModal(true);
  }, [setBoardModal]);


  return (
    <>
      <GlobalStyle />
      <Container>
        <AddBoardButton type="button" onClick={addButtonHandler}/>
        <BoardModal />
        <BoardTitleModal />
        <CardModal />
        <DragDropContainer />


      </Container>
      
    </>
  );
}

export default App;
