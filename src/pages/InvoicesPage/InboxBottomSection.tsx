import styled from 'styled-components';
import { ReactComponent as EmailBoxIcon } from 'src/assets/icons/email-box.svg';
import { Typography } from 'src/components/Typography';
import { Pagination } from 'src/components/Pagination';

export const InboxBottomSection = () => {
  return (
    <InboxBottomSectionWrapper>
      <SendInvoiceWrapper href="mailto:company@inbox.light.inc">
        <EmailBoxIcon />
        <SendInvoiceText>
          <Typography variant="BodySmallStrong">
            Send or forward invoices to
          </Typography>
          <Typography variant="BodySmallStrong">
            company@inbox.light.inc
          </Typography>
        </SendInvoiceText>
      </SendInvoiceWrapper>
      <Pagination pagesLength={13} />
    </InboxBottomSectionWrapper>
  );
};

const InboxBottomSectionWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SendInvoiceWrapper = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.defaults.black};
  text-decoration: none;
  svg {
    color: ${({ theme }) => theme.palette.grey[400]};
    margin-right: 10px;
  }
`;
const SendInvoiceText = styled.div`
  display: flex;
  flex-direction: column;
  span {
    &:last-child {
      color: ${({ theme }) => theme.palette.orange[600]};
    }
  }
`;
