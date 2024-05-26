import {Button, InputText} from '@/components/UI';
import {FaPlus} from 'react-icons/fa';
import {firestore} from '@/firebase';
import React, {useState, useCallback} from 'react';
import styled from 'styled-components';

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
            <InputText
              value={projectValue}
              onChange={(e) => setProjectValue(e.target.value)}
            />
            <StyledActions>
              <Button
                variant="primary"
                label="追加"
                onClick={() => addProject()}
              />
              <Button
                variant="secondary"
                label="キャンセル"
                onClick={() => setVisible(false)}
              />
            </StyledActions>
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
          プロジェクトを追加
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

const StyledActions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
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
