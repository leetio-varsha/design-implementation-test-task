import styled from 'styled-components';
import { Typography } from 'src/components/Typography';
import { Button } from 'src/components/Button';
import { SectionsTabs } from 'src/pages/InvoicesPage/SectionsTabs';
import { useState } from 'react';
import { InboxSection } from 'src/pages/InvoicesPage/InboxSection';
import { InvoiceModal } from 'src/components/InvoiceModal';
import { InboxProvider } from 'src/pages/InvoicesPage/InboxContext';

export const InvoicesPage = () => {
  const [activeSection, setSection] = useState('inbox');

  const getActiveSection = () => {
    if (activeSection === 'inbox') {
      return (
        <>
          <InboxProvider>
            <InboxSection />
            <InvoiceModal />
          </InboxProvider>
        </>
      );
    }
    if (activeSection === 'approving') {
      return <div>approving</div>;
    }
    if (activeSection === 'scheduled') {
      return <div>approving</div>;
    }
    if (activeSection === 'processing') {
      return <div>processing</div>;
    }
    if (activeSection === 'Paid') {
      return <div>Paid</div>;
    }
  };

  return (
    <PageWrapper>
      <PageHeading>
        <Typography tag={'h1'} variant={'HeadingLargeStrong'}>
          Invoices
        </Typography>
        <Button size="medium" variant={'basic'}>
          New invoice
        </Button>
      </PageHeading>
      <SectionsTabs
        changeTabCallback={setSection}
        activeSection={activeSection}
      />
      {getActiveSection()}
      <InvoiceModal />
    </PageWrapper>
  );
};

const PageWrapper = styled.section`
  padding: 40px 24px;
  position: relative;
`;
const PageHeading = styled.div`
  display: flex;
  justify-content: space-between;
`;
