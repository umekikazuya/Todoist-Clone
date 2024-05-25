import {FaInbox, FaRegCalendar, FaRegCalendarAlt} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export default function Filter() {
  return (
    <>
      <StyledList>
        <StyledListItem>
          <StyledNavLink to="/inbox">
            <StyledIcon>
              <FaInbox
                size={24}
                fill="#666"
              />
            </StyledIcon>
            <Label>インボックス</Label>
          </StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink to="/today">
            <StyledIcon>
              <FaRegCalendar
                size={24}
                fill="#666"
              />
            </StyledIcon>
            <Label>今日</Label>
          </StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink to="/today">
            <StyledIcon>
              <FaRegCalendarAlt
                size={24}
                fill="#666"
              />
            </StyledIcon>
            <Label>近日予定</Label>
          </StyledNavLink>
        </StyledListItem>
      </StyledList>
    </>
  );
}

const StyledList = styled.ul`
  padding: 10px 0px;
`;

const StyledListItem = styled.li`
  padding: 3px 0px 3px 5px;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled.span`
  display: flex;
  height: 14px;
`;

const Label = styled.span`
  padding-left: 6px;
`;
