import {FaInbox, FaRegCalendar, FaRegCalendarAlt} from 'react-icons/fa';
import {Link, LinkContent} from '@/components/UI';
import styled from 'styled-components';

export default function Filter() {
  return (
    <>
      <StyledList>
        <StyledListItem>
          <Link
            to="/inbox"
            children={
              <LinkContent
                icon={FaInbox}
                label="インボックス"
              />
            }
          />
        </StyledListItem>
        <StyledListItem>
          <Link
            to="/today"
            children={
              <LinkContent
                icon={FaRegCalendar}
                label="今日"
              />
            }
          />
        </StyledListItem>
        <StyledListItem>
          <Link
            to="/next"
            children={
              <LinkContent
                icon={FaRegCalendarAlt}
                label="近日予定"
              />
            }
          />
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
