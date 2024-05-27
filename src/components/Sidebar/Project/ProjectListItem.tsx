import {Button} from '@/components/UI/Button';
import {FaHashtag, FaTrashAlt} from 'react-icons/fa';
import {firestore} from '@/firebase';
import {Project as ProjectType} from '@/model';
import {useState} from 'react';
import styled from 'styled-components';

export default function ProjectListItem({data}: {data: ProjectType}) {
  const [showConfirm, setShowConfirm] = useState(false);

  const deleteProject = (id: string) => {
    firestore
      .collection('projects')
      .doc(id)
      .delete()
      .then(() => {
        setShowConfirm(!showConfirm);
      });
  };

  return (
    <>
      <StyledIcon>
        <FaHashtag
          size={14}
          fill="#666"
        />
      </StyledIcon>
      <StyledLabel>{data.name}</StyledLabel>
      <StyledDeleteButton
        onClick={() => setShowConfirm(!showConfirm)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setShowConfirm(!showConfirm);
        }}>
        <FaTrashAlt
          size={14}
          fill="#666"
        />
      </StyledDeleteButton>
      {showConfirm && (
        <StyledConfirm>
          <StyledConfirmInner>
            <StyledConfirmText>削除しますか？</StyledConfirmText>
            <StyledActions>
              <Button
                variant="primary"
                label="削除"
                onClick={() => deleteProject(data.id)}
              />
              <Button
                variant="secondary"
                label="キャンセル"
                onClick={() => setShowConfirm(!showConfirm)}
              />
            </StyledActions>
          </StyledConfirmInner>
        </StyledConfirm>
      )}
    </>
  );
}

const StyledIcon = styled.span`
  display: flex;
  align-items: center;
  height: 14px;
`;

const StyledLabel = styled.span`
  padding-left: 6px;
`;

const StyledDeleteButton = styled.button`
  display: flex;
  align-items: center;
  height: 14px;
  margin-left: auto;
`;

const StyledConfirm = styled.div`
  position: fixed;
`;

const StyledConfirmInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.1) 0px 4px 11px;
  width: 200px;
  padding: 10px;
  top: 10px;
  right: 0;
  background-color: #fff;
`;

const StyledConfirmText = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  line-height: normal;
  font-weight: normal;
  font-size: 15px;
`;

const StyledActions = styled.div`
  display: flex;
  gap: 8px;
`;
