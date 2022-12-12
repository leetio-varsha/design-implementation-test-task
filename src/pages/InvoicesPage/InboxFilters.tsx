import styled from 'styled-components';
import { SearchInput } from 'src/components/Forms/SearchInput';
import { ReactComponent as PlusIcon } from 'src/assets/icons/plus.svg';
import { ReactComponent as CogIcon } from 'src/assets/icons/cog.svg';
import { useContext } from 'react';
import { InboxContext } from 'src/pages/InvoicesPage/InboxContext';

export const InboxFilters = () => {
  const { setSearchFilter } = useContext(InboxContext);

  return (
    <InboxFiltersWrapper>
      <SearchInput
        className={'light'}
        onChangeCallback={setSearchFilter}
        waitSeconds={500}
        hideCommandHelper={true}
      />
      <AddFilter>
        <PlusIcon /> Add Filter
      </AddFilter>
      <CogIconStyled />
    </InboxFiltersWrapper>
  );
};

const InboxFiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  .light {
    background: ${({ theme }) => theme.palette.grey[200]};
    color: ${({ theme }) => theme.palette.grey[500]};
    margin-left: 0;
    input {
      color: ${({ theme }) => theme.palette.grey[500]};
    }
  }
`;
const AddFilter = styled.div`
  color: ${({ theme }) => theme.palette.grey[600]};
  cursor: pointer;
  margin-left: 40px;
  display: flex;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.palette.grey[400]};
    margin-right: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
`;
const CogIconStyled = styled(CogIcon)`
  margin-left: auto;
  color: ${({ theme }) => theme.palette.grey[400]};
`;
