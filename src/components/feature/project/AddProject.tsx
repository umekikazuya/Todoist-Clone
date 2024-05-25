import React, {useState, useCallback} from 'react';
import {firestore} from '@/firebase';
import styled from 'styled-components';
import {FaPlus} from 'react-icons/fa';

interface Props {
  shouldShow?: boolean;
}

const {VITE_USER_ID} = import.meta.env;

export const AddProject: React.FC<Props> = ({shouldShow = false}) => {
  const [visible, setVisible] = useState(shouldShow);
  const [projectValue, setProjectValue] = useState('');

  const addProject = useCallback(() => {
    if (!projectValue) return;
    firestore
      .collection('projects')
      .add({
        name: projectValue,
        userId: VITE_USER_ID,
      })
      .then(() => {
        setProjectValue('');
        setVisible(false);
      });
  }, [projectValue]);

  return (
    <>
      <>
        {visible && (
          <StyledForm>
            <input
              value={projectValue}
              onChange={(e) => setProjectValue(e.target.value)}
              type="text"
              placeholder="プロジェクト名を入力"
            />
            <StyledButtons>
              <StyledAddButton
                type="button"
                onClick={() => addProject()}>
                Add Project
              </StyledAddButton>
              <StyledCancelButton
                onClick={() => setVisible(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setVisible(false);
                }}>
                Cancel
              </StyledCancelButton>
            </StyledButtons>
          </StyledForm>
        )}
      </>
      <StyledContainer>
        <StyledIcon>
          <FaPlus
            size={14}
            fill="#666"
          />
        </StyledIcon>
        <StyledLabel
          onClick={() => setVisible(!visible)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setVisible(!visible);
          }}>
          Add Project
        </StyledLabel>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledForm = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  row-gap: 4px;
`;

const StyledAddButton = styled.button`
  background-color: #a81f00;
  color: #fff;
  border: 1px solid transparent;
  font-weight: 600;
  font-size: 13px;
  line-height: 1.3;
  padding: 6px 12px 7px 12px;
  display: inline-block;
  white-space: nowrap;
  border-radius: 3px;
  text-decoration: none;
  text-align: center;
`;

const StyledCancelButton = styled.button`
  color: #555;
  cursor: pointer;
  font-size: 14px;
  padding: 6px 12px 7px 12px;
`;

const StyledIcon = styled.div`
  color: #dd4b39;
  display: flex;
  height: 14px;
`;

const StyledLabel = styled.span`
  display: inline-block;
  color: #202020;
  font-size: 14px;
  margin-left: 15px;
`;
