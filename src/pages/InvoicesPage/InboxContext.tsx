import React, { createContext, useEffect, useState } from 'react';
import { IDictionary } from 'src/utils/globalTypes';
import inboxData from 'src/data/inboxData';

interface IInboxContextContext {
  inboxList: IDictionary<any>;
  selectedInvoice: any;
  setSearchFilter: (searchStr: string) => void;
  setInBoxData: (inboxData: any) => void;
  setSelectedInvoice: (invoiceData: any) => void;
}

export const InboxContext = createContext<IInboxContextContext>({
  inboxList: inboxData,
  selectedInvoice: {},
  setSearchFilter: () => null,
  setInBoxData: () => null,
  setSelectedInvoice: () => null,
});

interface IInboxProviderProvider {
  children: React.ReactNode;
}

export const InboxProvider: React.FC<IInboxProviderProvider> = ({
  children,
}) => {
  const [inboxList, setInBoxData] = useState(inboxData);
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedInvoice, setSelectedInvoice] = useState({});

  useEffect(() => {
    if (!searchFilter.length) {
      setInBoxData(inboxData);
      return;
    }
    const filteredInboxList = inboxList.filter((item) => {
      const searchValue = searchFilter.toLowerCase();
      const vendor = item.vendor.name.toLowerCase();
      const description = item.description.toLowerCase();
      const status = item.status.text.toLowerCase();
      const approver = item.approver.name.toLowerCase();
      return Boolean(
        vendor.match(searchValue) ||
          description.match(searchValue) ||
          status.match(searchValue) ||
          approver.match(searchValue)
      );
    });
    setInBoxData(filteredInboxList);
  }, [searchFilter]);

  return (
    <InboxContext.Provider
      value={{
        inboxList,
        selectedInvoice,
        setSearchFilter,
        setInBoxData,
        setSelectedInvoice,
      }}
    >
      {children}
    </InboxContext.Provider>
  );
};
