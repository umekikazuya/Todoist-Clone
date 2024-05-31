import {FaInbox, FaRegCalendar, FaRegCalendarAlt} from 'react-icons/fa';
import {Link, LinkContent} from '@/components/UI';
import styled from 'styled-components';

export default function Filter() {
  return (
    <>
      <StyledList>
        <StyledListItem>
          <Link to="/inbox">
            <LinkContent
              icon={FaInbox}
              label="インボックス"
            />
          </Link>
        </StyledListItem>
        <StyledListItem>
          <Link to="/today">
            {' '}
            <LinkContent
              icon={FaRegCalendar}
              label="今日"
            />
          </Link>
        </StyledListItem>
        <StyledListItem>
          <Link to="/next">
            <LinkContent
              icon={FaRegCalendarAlt}
              label="近日予定"
            />
          </Link>
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
