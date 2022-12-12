import styled from 'styled-components';
import { InvoiceHeader } from 'src/components/InvoiceModal/InvoiceHeader';
import { InvoiceSelections } from 'src/components/InvoiceModal/InvoiceSelections';
import Invoice from 'src/assets/img/invoice.jpg';
import { useContext } from 'react';
import { InboxContext } from 'src/pages/InvoicesPage/InboxContext';

export const InvoiceModal = () => {
  const { selectedInvoice } = useContext(InboxContext);
  return selectedInvoice.id ? (
    <ModalWrapper>
      <ModalInner>
        <InvoiceHeader />
        <ModalContent>
          <InvoiceSelections />
          <InvoiceSection>
            <img src={Invoice} alt="Invoice" />
          </InvoiceSection>
        </ModalContent>
      </ModalInner>
    </ModalWrapper>
  ) : null;
};

const ModalWrapper = styled.div`
  background: rgba(30, 30, 30, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 24px;
  width: 100%;
  min-height: 100%;
`;
const ModalInner = styled.div`
  max-width: 1728px;
  background: #fff;
  margin: 0 auto;
  height: 100%;
  box-shadow: 0px -1px 12px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
`;
const ModalContent = styled.div`
  display: flex;
`;
const InvoiceSection = styled.div`
  padding: 24px;
  background: ${({ theme }) => theme.palette.grey[100]};
  flex: 1;
  img {
    width: 100%;
  }
`;
