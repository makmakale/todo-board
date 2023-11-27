import { BoardContainer, BoardTasks, BoardTitle } from '@/components/Board/Board.styles';
import Task from '@/components/Task';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

function Board({ id, title, tasks }) {
  return (
    <BoardContainer>
      <BoardTitle>{title}</BoardTitle>

      <Droppable droppableId={id}>
        {(provided) => (
          <BoardTasks
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
          </BoardTasks>
        )}
      </Droppable>
    </BoardContainer>
  );
}

Board.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tasks: PropTypes.array,
};

Board.defaultProps = {
  tasks: [],
};

export default Board;
