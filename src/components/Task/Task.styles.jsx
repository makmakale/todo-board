import Avatar from 'react-avatar';
import styled from 'styled-components';

export const TaskContainer = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

export const TaskTitle = styled.h5`
  font-weight: 500;
`;

export const TaskShortContent = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const TaskMarkers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: .7rem;
`;

export const TaskTypeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background: ${(props) => props.color};
  color: #fff;
  font-size: .65rem;

  i {
    margin-top: 1px;
  }
`;

export const TaskInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: .7rem;
`;

export const TaskUserAvatar = styled(Avatar).attrs({
  size: 30, round: true,
})``;

export const TaskNumber = styled.div`
  color: #aaa;
  font-size: .8rem;
  font-weight: 600;
`;
