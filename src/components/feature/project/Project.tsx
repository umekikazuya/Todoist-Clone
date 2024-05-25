import {useState} from 'react';
import {Project as ProjectType} from '@/model';
import {FaHashtag, FaTrashAlt} from 'react-icons/fa';
import {firestore} from '@/firebase';
import styled from 'styled-components';

export default function Project({data}: {data: ProjectType}) {
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
      <span
        onClick={() => setShowConfirm(!showConfirm)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setShowConfirm(!showConfirm);
        }}>
        <FaTrashAlt
          width={24}
          height={24}
          fill="#666"
        />
        {showConfirm && (
          <StyledConfirm>
            <StyledConfirmInner>
              <StyledConfirmText>削除しますか？</StyledConfirmText>
              <StyledButton
                onClick={() => deleteProject(data.docId)}>
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
      </span>
    </>
  );
}

const StyledIcon = styled.span`
  display: flex;
  height: 14px;
`;

const StyledLabel = styled.span`
  padding-left: 6px;
`;

const StyledConfirm = styled.div`
  position: relative;
`;

const StyledConfirmInner = styled.div`
  position: absolute;
  width: 100%;
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
`
const StyledButton = styled.div`
  width: 50px;
  background-color: #db4c3f;
  color: #fff !important;
  border: 1px solid transparent;
  margin-right: 5px;
  margin-top: 10px;
  font-weight: bold;
  font-size: 13px !important;
  line-height: 17px;
  padding: 6px 12px 7px 12px;
  position: relative;
  display: inline-block;
  white-space: nowrap;
  border-radius: 3px !important;
  text-decoration: none !important;
  text-align: center;
  cursor: pointer;
`;

const StyledCancelButton = styled.button`
  color: #555;
  cursor: pointer;
  font-size: 14px;
  margin: 2px 5px;
`;
