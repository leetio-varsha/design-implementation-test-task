import styled from 'styled-components';
import { InvoiceTabs } from 'src/components/InvoiceModal/InvoiceTabs';
import { Select } from 'src/components/Forms/Select';
import { Typography } from 'src/components/Typography';
import { Input } from 'src/components/Forms/Input';
import { ReactComponent as DefaultCompanyIcon } from 'src/assets/icons/default-company.svg';
import { ReactComponent as UnitedStatesIcon } from 'src/assets/icons/united-states.svg';
import { ReactComponent as ArrowRightIcon } from 'src/assets/icons/arrow-right.svg';
import { ReactComponent as ListchecksIcon } from 'src/assets/icons/list-checks.svg';
import { ReactComponent as ChevronLeftIcon } from 'src/assets/icons/chevron-left.svg';

export const InvoiceSelections = () => {
  return (
    <InvoiceSelectionsWrapper>
      <InvoiceTabs activeSection={'details'} changeTabCallback={() => {}} />
      <Select
        options={companySelectOptions}
        defaultSelected={companySelectOptions[0]}
        className="company-select"
      />
      <PaidSection>
        <Select
          options={currencySelectOptions}
          defaultSelected={currencySelectOptions[0]}
          className="currency-select"
          label={'Currency'}
        />
        <Select
          options={toBePaidSelectOptions}
          defaultSelected={toBePaidSelectOptions[0]}
          className="paid-select"
          label={'To be paid'}
        />
      </PaidSection>
      <Typography
        variant={'HeadingMediumStrong'}
        tag={'h4'}
        className={'section-heading'}
      >
        Payment Details
      </Typography>
      <Select
        options={paymentDateSelectOptions}
        defaultSelected={paymentDateSelectOptions[0]}
        className="payment-date-select"
        label={'Payment date'}
      />
      <PayToSection>
        <Select
          options={payFromSelectOptions}
          defaultSelected={payFromSelectOptions[0]}
          className="pay-to-select"
          label={'Pay from account'}
        />
        <ArrowRightIcon className="arrow-right" />
        <Select
          options={payToSelectOptions}
          defaultSelected={payToSelectOptions[0]}
          className="pay-to-select"
          label={'Pay to account'}
        />
      </PayToSection>
      <Typography
        variant={'HeadingMediumStrong'}
        tag={'h4'}
        className={'section-heading'}
      >
        Accounting details
      </Typography>
      <Input
        onChangeCallback={() => {}}
        label={'Note'}
        placeholder={'Type something'}
        className="note-input"
      />
      <Select
        options={costCenterSelectOptions}
        defaultSelected={costCenterSelectOptions[0]}
        label={'Cost center'}
      />
      <AccountDetailsGridSection>
        <Select
          options={entitySelectOptions}
          defaultSelected={entitySelectOptions[0]}
          label={'Entity'}
        />
        <Select
          options={syncSelectOptions}
          defaultSelected={syncSelectOptions[0]}
          label={'Sync to Category'}
        />
        <Select
          options={dueDateSelectOptions}
          defaultSelected={dueDateSelectOptions[0]}
          label={'Due date'}
        />
        <Select
          options={invoiceDateSelectOptions}
          defaultSelected={invoiceDateSelectOptions[0]}
          label={'Invoice date'}
        />
      </AccountDetailsGridSection>
      <Approvers>
        <ListchecksIcon />
        <span>Approvers</span>
        <Pill>4 left</Pill>
        <ChevronRightIcon />
      </Approvers>
      <Typography
        variant={'HeadingMediumStrong'}
        tag={'h4'}
        className={'section-heading'}
      >
        Line items
      </Typography>
      <LineItemsTable>
        <tr>
          <td>
            <div>
              <Typography variant={'BodyMediumRegular'}>
                MacBook Pro 16/2.8/Tim
              </Typography>
            </div>
            <div>
              <Typography variant={'BodySmallStrong'}>
                IT & Technology
              </Typography>
            </div>
          </td>
          <td>2,199.00</td>
        </tr>
        <tr>
          <td>
            <div>
              <Typography variant={'BodyMediumRegular'}>
                Magic Keyboard DK
              </Typography>
            </div>
            <div>
              <Typography variant={'BodySmallStrong'}>
                IT & Technology
              </Typography>
            </div>
          </td>
          <td>295.00</td>
        </tr>
        <tr>
          <td>
            <div>
              <Typography variant={'BodyMediumRegular'}>
                Magic Trackpad DK
              </Typography>
            </div>
            <div>
              <Typography variant={'BodySmallStrong'}>
                IT & Technology
              </Typography>
            </div>
          </td>
          <td>199.00</td>
        </tr>
      </LineItemsTable>
    </InvoiceSelectionsWrapper>
  );
};

const InvoiceSelectionsWrapper = styled.div`
  padding: 24px;
  max-width: 30%;
  width: 100%;
  .company-select {
    margin-bottom: 16px;
    .image-wrapper {
      svg {
        width: 42px;
        height: 42px;
      }
      margin-right: 16px;
    }
  }
  .currency-select {
    .image-wrapper {
      margin-right: 8px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
    .chevron {
      right: 8px;
    }
  }
  .paid-select {
    flex: 1;
    margin-left: 8px;
  }
  .section-heading {
    margin-bottom: 16px;
  }
  .payment-date-select {
    margin-bottom: 10px;
    .main-text {
      color: ${({ theme }) => theme.palette.sky[600]};
    }
  }
  .pay-to-select {
    flex: 1;
    .image-wrapper {
      margin-right: 8px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
  .note-input {
    margin-bottom: 8px;
  }
`;
const PaidSection = styled.div`
  display: flex;
  align-items: stretch;
  margin-bottom: 24px;
`;
const PayToSection = styled.div`
  display: flex;
  align-items: stretch;
  margin-bottom: 24px;
  .arrow-right {
    align-self: center;
    margin: 0 4px;
  }
`;
const AccountDetailsGridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin: 8px 0 24px;
`;
const Approvers = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.palette.grey[200]};
  margin-bottom: 24px;
  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.palette.grey[800]};
    margin-left: 10px;
    margin-right: auto;
  }
`;
const Pill = styled.div`
  padding: 0 8px;
  border: 1px solid ${({ theme }) => theme.palette.grey[300]};
  border-radius: 100px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.palette.grey[500]};
  margin-right: 16px;
`;
const ChevronRightIcon = styled(ChevronLeftIcon)`
  transform: rotate(180deg);
`;
const LineItemsTable = styled.table`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.palette.grey[200]};
  border-radius: 4px;
  td {
    padding: 8px 16px;
    border: 1px solid ${({ theme }) => theme.palette.grey[200]};
    &:last-child {
      text-align: right;
    }
    div {
      &:last-child {
        color: ${({ theme }) => theme.palette.grey[500]};
      }
    }
  }
`;

const companySelectOptions = [
  {
    image: <DefaultCompanyIcon />,
    value: 'oracle',
    mainText: 'Oracle',
    subText: 'oracle.com · billing@oracle.com',
    isReversedLabel: true,
  },
  {
    image: <DefaultCompanyIcon />,
    value: 'google',
    mainText: 'Google',
    subText: 'google.com · billing@google.com',
    isReversedLabel: true,
  },
];
const currencySelectOptions = [
  {
    image: <UnitedStatesIcon />,
    value: 'usd',
    mainText: 'USD',
    subText: '',
  },
  {
    image: <DefaultCompanyIcon />,
    value: 'eur',
    mainText: 'EUR',
    subText: '',
    isReversedLabel: true,
  },
];
const toBePaidSelectOptions = [
  {
    value: '32159',
    mainText: '32.159.00',
    subText: 'Tax 2102.12',
    isRowContentText: true,
  },
  {
    value: '12345',
    mainText: '12.345.00',
    subText: 'Tax 256.12',
    isRowContentText: true,
  },
];
const paymentDateSelectOptions = [
  {
    value: 'today',
    mainText: 'Today',
  },
  {
    value: 'tomorrow',
    mainText: 'Tomorrow',
  },
];
const payFromSelectOptions = [
  {
    image: <DefaultCompanyIcon />,
    value: 'bank_a',
    mainText: 'Dansk-Bank_dk',
    subText: 'USD · XXXX 1023',
  },
  {
    image: <DefaultCompanyIcon />,
    value: 'bank_b',
    mainText: 'Bank of America',
    subText: 'EUR · XXXX 3213',
    isReversedLabel: true,
  },
];
const payToSelectOptions = [
  {
    image: <DefaultCompanyIcon />,
    value: 'bank_a',
    mainText: 'Jyske-Bank',
    subText: '4321',
  },
  {
    image: <DefaultCompanyIcon />,
    value: 'bank_b',
    mainText: 'Yoda Bank',
    subText: 'C3PO',
  },
];
const costCenterSelectOptions = [
  {
    value: 'marketing',
    mainText: 'Marketing',
  },
  {
    value: 'development',
    mainText: 'Development',
  },
];
const entitySelectOptions = [
  {
    value: 'DK-company',
    mainText: 'DK-company',
  },
  {
    value: '123',
    mainText: 'Another-company',
  },
];
const syncSelectOptions = [
  {
    value: 'it',
    mainText: 'IT & Technology',
  },
  {
    value: 'marketing',
    mainText: 'Marketing',
  },
];
const dueDateSelectOptions = [
  {
    value: '22/11/2022',
    mainText: '22/11/2022',
  },
  {
    value: '31/03/2222',
    mainText: '31/03/2222',
  },
];
const invoiceDateSelectOptions = [
  {
    value: '22/11/2022',
    mainText: '22/11/2022',
  },
  {
    value: '31/03/2222',
    mainText: '31/03/2222',
  },
];
