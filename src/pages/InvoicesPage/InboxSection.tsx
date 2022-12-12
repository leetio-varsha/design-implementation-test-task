import { InboxFilters } from 'src/pages/InvoicesPage/InboxFilters';
import { InboxTable } from 'src/pages/InvoicesPage/InboxTable';
import { InboxBottomSection } from 'src/pages/InvoicesPage/InboxBottomSection';

export const InboxSection = () => {
  return (
    <>
      <InboxFilters />
      <InboxTable />
      <InboxBottomSection />
    </>
  );
};
