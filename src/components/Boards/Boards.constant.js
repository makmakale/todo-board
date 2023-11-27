export const BOARD_IDS = {
  todo: 'todo',
  inProgress: 'inProgress',
  done: 'done',
};

export const DEFAULT_BOARDS = [
  { id: BOARD_IDS.todo, title: 'To Do', tasks: [] },
  { id: BOARD_IDS.inProgress, title: 'In Progress', tasks: [] },
  { id: BOARD_IDS.done, title: 'Done', tasks: [] },
];
