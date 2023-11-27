import { BOARD_IDS } from '@/components/Boards/Boards.constant';
import { TASK_TYPES } from '@/components/Task/Task.constant';

export const fetchUsers = async () => {
  const response = await fetch('https://dummyjson.com/users?limit=100');
  const json = await response.json();

  return (json?.users || []).map((user) => ({ id: user.id, firstName: user.firstName, lastName: user.lastName }));
};

export const fetchToDoList = async (limit = 20) => {
  const response = await fetch(`https://dummyjson.com/todos?limit=${limit}`);
  const json = await response.json();

  return json?.todos || [];
};

const getRandomTaskType = () => {
  const types = Object.keys(TASK_TYPES);

  return types[Math.floor(Math.random() * types.length)];
};
const getRandomTask = (tasks) => {
  const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
  if (randomTask.completed) {
    return getRandomTask(tasks);
  }

  return randomTask;
};

const getUserById = (users, userId) => users.find((user) => user.id === userId);

const mapByUsers = (todos, users) => todos.map((todo) => ({
  ...todo,
  user: getUserById(users, todo.userId),
  type: getRandomTaskType(),
}));

export const setInitialBoards = (boards = [], todos = [], users = []) => {
  todos = mapByUsers(todos, users);

  const randomTask = getRandomTask(todos);

  const initialBoards = boards.map((board) => {
    if (board.id === BOARD_IDS.todo) {
      return {
        ...board,
        tasks: todos.filter((task) => !task.completed && task.id !== randomTask.id),
      };
    }

    if (board.id === BOARD_IDS.done) {
      return {
        ...board,
        tasks: todos.filter((task) => task.completed),
      };
    }

    return {
      ...board,
      tasks: [randomTask],
    };
  });

  return initialBoards;
};

export const removeTaskFromSource = (board = {}, source = {}, destination = {}) => {
  const reorderedTasks = [...board.tasks];
  const sourceIndex = source.index;
  const destinationIndex = destination.index;
  const [removedTask] = reorderedTasks.splice(sourceIndex, 1);

  if (source.droppableId === destination.droppableId) {
    reorderedTasks.splice(destinationIndex, 0, removedTask);
  }

  return {
    ...board,
    tasks: reorderedTasks,
  };
};

export const addTaskToBoard = (board = {}, destination = {}, boards, taskId) => {
  const destinationIndex = destination.index;
  const reorderedTasks = [...board.tasks];

  const allTasks = [].concat.apply([], boards.map((b) => b.tasks));
  const task = allTasks.find((t) => t.id.toString() === taskId);
  task.completed = board.id === BOARD_IDS.done;

  if (destinationIndex === 0) {
    reorderedTasks.unshift(task);
  } else if (!board.tasks.at(destinationIndex)) {
    reorderedTasks.push(task);
  } else {
    const [removedTask] = reorderedTasks.splice(destinationIndex, 1);
    reorderedTasks.splice(destinationIndex, 0, task);
    reorderedTasks.splice(destinationIndex + 1, 0, removedTask);
  }

  return {
    ...board,
    tasks: reorderedTasks,
  };
};
