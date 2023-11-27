import { TASK_TYPE_COLORS, TASK_TYPE_ICONS } from '@/components/Task/Task.constant';
import {
  TaskContainer,
  TaskInfo,
  TaskMarkers,
  TaskNumber,
  TaskShortContent,
  TaskTitle,
  TaskTypeBox,
  TaskUserAvatar,
} from '@/components/Task/Task.styles';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

function Task({ task, index }) {
  const taskColor = TASK_TYPE_COLORS[task.type];
  const taskIconClass = TASK_TYPE_ICONS[task.type];

  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
      {(provided) => (
        <TaskContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >

          <TaskTitle>{task.todo}</TaskTitle>

          <TaskShortContent>
            <TaskMarkers>
              <TaskTypeBox color={taskColor}>
                <i className={taskIconClass} />
              </TaskTypeBox>
            </TaskMarkers>
            <TaskInfo>
              <TaskNumber>MMA-{task.id}</TaskNumber>
              <TaskUserAvatar name={`${task.user.firstName} ${task.user.lastName}`} />
            </TaskInfo>
          </TaskShortContent>
          {provided.placeholder}
        </TaskContainer>
      )}
    </Draggable>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    todo: PropTypes.string,
    type: PropTypes.string,
    user: PropTypes.object,
  }),
  index: PropTypes.number.isRequired,
};
export default Task;
