import Board from '@/components/Board';
import { DEFAULT_BOARDS } from '@/components/Boards/Boards.constant';
import {
  BoardsContainer, BoardsGrid, BoardsTitle, BoardsToolBar,
} from '@/components/Boards/Boards.styles';
import {
  addTaskToBoard,
  fetchToDoList,
  fetchUsers,
  removeTaskFromSource,
  setInitialBoards,
} from '@/components/Boards/Boards.utils';
import { getFromLS, saveToLS } from '@/utils';
import { BOARDS_LS_ID } from '@/utils/constants';
import { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

function Boards() {
  const [boards, setBoards] = useState(DEFAULT_BOARDS);
  const [, setUsers] = useState([]);

  useEffect(() => {
    if (getFromLS(BOARDS_LS_ID)) {
      setBoards(getFromLS(BOARDS_LS_ID));
    } else {
      fetchUsers().then((users) => {
        setUsers(users);

        fetchToDoList().then((todos) => {
          setBoards((initBoards) => setInitialBoards(initBoards, todos, users));
        });
      });
    }
  }, []);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination || source.droppableId === destination.droppableId
      && source.index === destination.index) return;

    setBoards((prev) => prev.map((board) => {
      if (board.id === source.droppableId) {
        return removeTaskFromSource(board, source, destination);
      }

      if (board.id === destination.droppableId) {
        return addTaskToBoard(board, destination, boards, draggableId);
      }

      return board;
    }));
  };

  useEffect(() => {
    saveToLS(BOARDS_LS_ID, boards);
  }, [boards]);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <BoardsContainer>
        <BoardsToolBar>
          <BoardsTitle>Board</BoardsTitle>
        </BoardsToolBar>

        <BoardsGrid>
          {boards.map((board) => <Board key={board.id} {...board} />)}
        </BoardsGrid>
      </BoardsContainer>
    </DragDropContext>
  );
}

export default Boards;
