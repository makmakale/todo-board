import styled from 'styled-components';

export const BoardsContainer = styled.div`
  background: #e3edf7;
  box-shadow: 0 6px 10px -1px rgba(0, 0, 0, .15);
  width: 100%;
  height: 80vh;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  transition: .5s;

  @media screen and (max-width: 1024px) {
    height: 100%;
  }
`;

export const BoardsToolBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem 0;

  @media screen and (max-width: 976px) {
    flex-direction: column;
    padding: 1rem 1rem 0;
  }
`;
export const BoardsTitle = styled.h1``;

export const BoardsGrid = styled.div`
  flex-grow: 1;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(280px, 1fr));
  grid-template-rows: 100%;
  grid-gap: 1rem;
  overflow: hidden;
  transition: .5s;

  @media screen and (max-width: 976px) {
    padding: 1rem;
    grid-template-columns: minmax(300px, 1fr);
    grid-template-rows: unset;
  }
`;
