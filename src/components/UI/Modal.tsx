import React from 'react';
import styled from 'styled-components';
import {Button} from './Button';

interface ModalProps {
  title: string;
  actionButtonLabel: string;
  actionButtonFunction: () => void;
  candelButtonFunction: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  actionButtonLabel,
  actionButtonFunction,
  candelButtonFunction,
}) => {
  return (
    <>
      <StyledModal>
        <StyledModalInner>
          <StyledTitle>{title}</StyledTitle>
          <StyledActions>
            <Button
              variant="primary"
              label={actionButtonLabel}
              onClick={actionButtonFunction}
            />
            <Button
              variant="secondary"
              label="キャンセル"
              onClick={candelButtonFunction}
            />
          </StyledActions>
        </StyledModalInner>
      </StyledModal>
    </>
  );
};

const StyledModal = styled.div`
  position: fixed;
`;

const StyledModalInner = styled.div`
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

const StyledTitle = styled.div`
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
