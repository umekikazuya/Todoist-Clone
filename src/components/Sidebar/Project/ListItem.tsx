import {FaHashtag, FaTrashAlt} from 'react-icons/fa';
import {firestore} from '@/firebase';
import {LinkContent, Modal} from '@/components/UI';
import {useState} from 'react';
import styled from 'styled-components';
import type {Project as ProjectType} from '@/model';

export default function ListItem({data}: {data: ProjectType}) {
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
      <LinkContent
        icon={FaHashtag}
        label={data.name}
        actionButton={
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
        }
      />
      {showConfirm && (
        <Modal
          title="削除しますか？"
          actionButtonLabel="削除"
          actionButtonFunction={() => deleteProject(data.id)}
          candelButtonFunction={() => setShowConfirm(!showConfirm)}
        />
      )}
    </>
  );
}

const StyledDeleteButton = styled.button`
  display: flex;
  align-items: center;
  height: 14px;
  margin-left: auto;
`;
