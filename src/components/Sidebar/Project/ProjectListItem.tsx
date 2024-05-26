import {FaHashtag, FaTrashAlt} from 'react-icons/fa';
import {firestore} from '@/firebase';
import {Project as ProjectType} from '@/model';
import {useState} from 'react';
import styled from 'styled-components';

export default function ProjectListItem({data}: {data: ProjectType}) {
  const [showConfirm, setShowConfirm] = useState(false);

  const deleteProject = (id: string) => {
    firestore.collection('projects').doc(id).delete();
    // .then(() => {
    // });
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
        {showConfirm && (
          <StyledConfirm>
            <StyledConfirmInner>
              <StyledConfirmText>削除しますか？</StyledConfirmText>
              <StyledButton onClick={() => deleteProject(data.docId)}>
                Delete
              </StyledButton>
              <StyledCancelButton
                onClick={() => setShowConfirm(!showConfirm)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setShowConfirm(!showConfirm);
                }}>
                Cancel
              </StyledCancelButton>
            </StyledConfirmInner>
          </StyledConfirm>
        )}
      </StyledDeleteButton>
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
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  z-index: 1;
  top: 85px;
  border-radius: 3px;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.1) 0px 4px 11px;
  z-index: 99;
  width: 200px;
  padding: 10px;
  top: 10px;
  right: 0;
  background-color: white;
`;

const StyledConfirmText = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  line-height: normal;
  font-weight: normal;
  font-size: 15px;
`;
const StyledButton = styled.div`
  background-color: #db4c3f;
  color: #fff;
  font-weight: bold;
  font-size: 13px !important;
  justify-content: center;
  border-radius: 5px;
  max-width: 100%;
  min-width: 68px;
  padding: 0 12px;
  line-height: 32px;
  text-decoration: none;
  transition-duration: 0.3s;
  transition-property: color, background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #c3392c;
    color: #fff;
  }
  &:active {
    transform: scale(0.97);
    transition: transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235);
  }
`;

const StyledCancelButton = styled.button`
  background-color: #f5f5f5;
  color: #555;
  font-weight: bold;
  font-size: 13px !important;
  justify-content: center;
  border-radius: 5px;
  max-width: 100%;
  min-width: 68px;
  padding: 0 12px;
  line-height: 32px;
  text-decoration: none;
  transition-duration: 0.3s;
  transition-property: color, background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #e5e5e5;
    color: #1a1a1a;
  }
  &:active {
    transform: scale(0.97);
    transition: transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235);
  }
`;
