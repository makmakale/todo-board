import styled from 'styled-components';

export const BoardContainer = styled.div`
  box-shadow: 4px 4px 6px -1px rgba(0, 0, 0, .2),
    -4px -4px 6px -1px rgba(255, 255, 255, .7),
    -.5px -.5px 0 rgba(255, 255, 255, 1),
  .5px .5px 0 rgba(0, 0, 0, .15),
  0 12px 10px -10px rgba(0, 0, 0, .05);
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const BoardTitle = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  color: #8c8c8c;
  margin-bottom: 1rem;
`;

export const BoardTasks = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
  gap: 1rem;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, .2),
    inset -4px -4px 6px -1px rgba(255, 255, 255, .7),
    -.5px -.5px 0 rgba(255, 255, 255, 1),
  .5px .5px 0 rgba(0, 0, 0, .15),
  0 12px 10px -10px rgba(0, 0, 0, .05);

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;
