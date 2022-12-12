import styled from 'styled-components';
import { Typography } from 'src/components/Typography';
import { Button } from 'src/components/Button';
import { ReactComponent as TrashIcon } from 'src/assets/icons/trash-2.svg';
import { ReactComponent as ChevronLeftIcon } from 'src/assets/icons/chevron-left.svg';
import { ReactComponent as CloseIcon } from 'src/assets/icons/close.svg';
import { useContext } from 'react';
import { InboxContext } from 'src/pages/InvoicesPage/InboxContext';

export const InvoiceHeader = () => {
  const { setSelectedInvoice } = useContext(InboxContext);
  return (
    <ModalHeader>
      <Typography variant={'HeadingLargeStrong'} tag={'h2'}>
        Invoice #123456
      </Typography>
      <HeaderActions>
        <Button size={'medium'} variant={'secondary'}>
          Submit for approval
        </Button>
        <Button size={'medium'} variant={'basic'} className={'trash-button'}>
          <TrashIcon />
        </Button>
        <ChangeInvoiceWrapper>
          <Button size={'medium'} variant={'basic'}>
            <ChevronLeftIcon />
          </Button>
          <ChangeInvoiceNumber>
            <Typography variant={'BodyMediumStrong'}>1/12</Typography>
          </ChangeInvoiceNumber>
          <Button size={'medium'} variant={'basic'}>
            <ChevronRightIcon />
          </Button>
        </ChangeInvoiceWrapper>
        <Button
          size={'medium'}
          variant={'basic'}
          className={'close-button'}
          clickCallback={() => setSelectedInvoice({})}
        >
          <CloseIcon />
        </Button>
      </HeaderActions>
    </ModalHeader>
  );
};

const ModalHeader = styled.div`
  padding: 14px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeaderActions = styled.div`
  display: flex;
  .trash-button {
    margin-left: 8px;
  }
  .close-button {
    background: ${({ theme }) => theme.palette.grey[100]};
  }
`;
const ChangeInvoiceWrapper = styled.div`
  display: flex;
  margin: 0 24px;
`;
const ChevronRightIcon = styled(ChevronLeftIcon)`
  transform: rotate(180deg);
`;
const ChangeInvoiceNumber = styled.div`
  margin: 0 8px;
  color: ${({ theme }) => theme.palette.grey[400]};
  display: flex;
  align-items: center;
`;
