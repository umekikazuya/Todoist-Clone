import {IconType} from 'react-icons';
import {NavLink, To} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

interface LinkProps {
  to: To;
  children: React.ReactNode;
}

interface LinkContentProps {
  icon: IconType;
  label: string;
  actionButton?: React.ReactNode;
}

// リンク.
export const Link: React.FC<LinkProps> = ({to, children}) => {
  return <StyledNavLink to={to}>{children}</StyledNavLink>;
};

// リンクコンテンツ. 編集ボタン・削除ボタン等を任意で指定可能.
export const LinkContent: React.FC<LinkContentProps> = ({icon: Icon, label, actionButton}) => {
  return (
    <>
      <StyledLinkIcon>
        <Icon
          size={14}
          fill="#666"
        />
      </StyledLinkIcon>
      <StyledLinkLabel>{label}</StyledLinkLabel>
      {actionButton ? actionButton : ''}
    </>
  );
};

const StyledNavLink = styled(NavLink)`
  padding: 3px 6px 3px 6px;
  display: flex;
  align-items: center;
  border-radius: 4px;

  &.active {
    background-color: #ffefe5;
  }
`;

const StyledLinkIcon = styled.span`
  display: flex;
  align-items: center;
  height: 14px;
`;

const StyledLinkLabel = styled.span`
  padding-left: 6px;
`;
