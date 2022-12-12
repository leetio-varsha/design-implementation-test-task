import styled from 'styled-components';
import { InboxContext } from 'src/pages/InvoicesPage/InboxContext';
import { useContext, useState } from 'react';
import { Checkbox } from 'src/components/Forms/Checkbox';
import { Typography } from 'src/components/Typography';
import { IDictionary } from 'src/utils/globalTypes';
import { Badge } from 'src/components/Badge';

import { ReactComponent as DefaultCompanyIcon } from 'src/assets/icons/default-company.svg';
import { ReactComponent as CheckGreenIcon } from 'src/assets/icons/check-icon-green.svg';
import { ReactComponent as CheckIcon } from 'src/assets/icons/check.svg';
import { ReactComponent as BellIcon } from 'src/assets/icons/bell.svg';
import { ReactComponent as ReassignIcon } from 'src/assets/icons/reassign.svg';
import approverImage from 'src/assets/img/darline.jpg';

//TMP company icons. In real life should get from server side
import { ReactComponent as DixaIcon } from 'src/assets/icons/dixa.svg';
import { ReactComponent as AwsIcon } from 'src/assets/icons/aws.svg';
import { ReactComponent as DocuignIcon } from 'src/assets/icons/docusign.svg';
import { ReactComponent as TewillioIcon } from 'src/assets/icons/twillio.svg';
import { ReactComponent as MixPanelIcon } from 'src/assets/icons/mixpanel.svg';
import { ReactComponent as ForecastIcon } from 'src/assets/icons/forecast.svg';

const companyIcons: IDictionary<any> = {
  dixa: <DixaIcon />,
  amazon: <AwsIcon />,
  twillio: <TewillioIcon />,
  docuSign: <DocuignIcon />,
  mixpanel: <MixPanelIcon />,
  forecast: <ForecastIcon />,
};

export const InboxTable = () => {
  const { inboxList, setInBoxData, setSelectedInvoice } =
    useContext(InboxContext);
  const [isSelectedAll, setSelectedAll] = useState(false);

  const checkboxCallback = (checkData: IDictionary<any>) => {
    if (checkData.name === 'all') {
      setSelectedAll(checkData.isChecked);
      setInBoxData(
        inboxList.map((item: any) => ({
          ...item,
          isSelected: checkData.isChecked,
        }))
      );
    } else {
      setSelectedAll(false);
      setInBoxData(
        inboxList.map((item: any) =>
          item.id === checkData.name
            ? {
                ...item,
                isSelected: checkData.isChecked,
              }
            : item
        )
      );
    }
  };

  const getTimeColor = (time: string) => {
    const daysTimeIndex = time.indexOf('d');
    if (daysTimeIndex === -1) {
      return '';
    }
    const daysTime = parseInt(time.slice(0, daysTimeIndex - 1));
    if (isNaN(daysTime)) {
      return '';
    }
    if (daysTime > 3 && daysTime < 8) {
      return '#D97706';
    }
    if (daysTime > 8) {
      return '#EA580C';
    }
  };

  return (
    <InboxTableWrapper>
      <thead>
        <tr>
          <th>
            <Checkbox
              name={'all'}
              changeCallback={checkboxCallback}
              isChecked={isSelectedAll}
            />
          </th>
          <th>
            <Typography variant="BodySmallStrong">Vendor</Typography>
          </th>
          <th>
            <Typography variant="BodySmallStrong">Description</Typography>
          </th>
          <th>
            <Typography variant="BodySmallStrong">Status</Typography>
          </th>
          <th>
            <Typography variant="BodySmallStrong">Time in stage</Typography>
          </th>
          <th>
            <Typography variant="BodySmallStrong">Approver</Typography>
          </th>
          <th>
            <Typography variant="BodySmallStrong">Paym. date</Typography>
          </th>
          <th>
            <Typography variant="BodySmallStrong">To be paid</Typography>
          </th>
        </tr>
      </thead>
      <tbody>
        {inboxList.map((item: any) => (
          <tr key={item.id}>
            <td>
              <Checkbox
                name={item.id}
                changeCallback={checkboxCallback}
                isChecked={item.isSelected}
              />
            </td>
            <td onClick={() => setSelectedInvoice(item)}>
              <span className="vendor-cell">
                {companyIcons[item.vendor.icon] || <DefaultCompanyIcon />}
                {item.vendor.name ? (
                  <Typography variant="BodyMediumStrong">
                    {item.vendor.name}
                  </Typography>
                ) : (
                  <Typography
                    variant="BodyMediumStrong"
                    className="missing-name"
                  >
                    Missing
                  </Typography>
                )}
                {item.vendor.checked ? (
                  <CheckGreenIcon className="green-check" />
                ) : null}
              </span>
            </td>
            <td>
              <Typography variant="BodyMediumRegular" className="description">
                {item.description}
              </Typography>
            </td>
            <td>
              <span className="status-cell">
                <Badge
                  type={item.status.type}
                  withCheck={item.status.isChecked}
                >
                  <Typography variant={'BodySmallStrong'}>
                    {item.status.text}
                  </Typography>
                </Badge>
                {item.status.pending ? (
                  <Pending>
                    <span className={'check-amber'}>
                      <CheckIcon />
                    </span>
                    <Typography variant={'BodySmallStrong'}>
                      {item.status.pending}
                    </Typography>
                  </Pending>
                ) : null}
              </span>
            </td>
            <td>
              <Typography
                variant="BodyMediumRegular"
                className="time-is-stage"
                style={{ color: getTimeColor(item.timeInStage) }}
              >
                {item.timeInStage}
              </Typography>
            </td>
            <td>
              {item.approver.name ? (
                <Approver>
                  <img src={approverImage} alt="Approver image" />
                  <Typography variant="BodyMediumRegular">
                    {item.approver.name}
                  </Typography>
                  {item.approver.action === 'remind' ? (
                    <ActionLabel>
                      <BellIcon />
                      Remind
                    </ActionLabel>
                  ) : null}
                  {item.approver.action === 'reassign' ? (
                    <ActionLabel>
                      <ReassignIcon /> Re-assign
                    </ActionLabel>
                  ) : null}
                </Approver>
              ) : (
                <EmptyApprover>
                  <Typography variant="BodyMediumStrong">Not set</Typography>
                </EmptyApprover>
              )}
            </td>
            <td>
              <Typography variant="BodyMediumRegular">
                {item.paymDate}
              </Typography>
            </td>
            <td>
              <Typography variant="BodyMediumRegular">
                {item.toBePaid}
              </Typography>
            </td>
          </tr>
        ))}
      </tbody>
    </InboxTableWrapper>
  );
};

const InboxTableWrapper = styled.table`
  width: 100%;
  border: 1px solid #e7e5e4;
  border-radius: 4px 4px 0 4px;
  tr {
    border-bottom: 1px solid #e7e5e4;
  }
  tbody {
    &:last-child {
      border: none;
    }
  }
  th,
  td {
    padding: 16px 8px;
    .vendor-cell {
      display: flex;
      align-items: center;
      svg {
        margin-right: 8px;
      }
    }
    .green-check {
      margin-left: 4px;
      margin-right: 0;
    }
    .missing-name {
      color: ${({ theme }) => theme.palette.grey[400]};
    }
    .description {
      color: ${({ theme }) => theme.palette.grey[600]};
    }
    .status-cell {
      display: flex;
      align-items: center;
    }
    .time-is-stage {
      color: ${({ theme }) => theme.palette.grey[700]};
    }
  }
  th {
    padding: 8px;
    text-align: left;
  }
`;
const Pending = styled.span`
  padding: 2px 8px 2px 2px;
  border: 1px solid ${({ theme }) => theme.palette.grey[200]};
  border-radius: 100px;
  display: flex;
  align-items: center;
  margin-left: 4px;
  color: ${({ theme }) => theme.palette.grey[500]};

  .check-amber {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #d97706;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    svg {
      margin-right: 0;
      width: 5px;
      color: ${({ theme }) => theme.palette.defaults.white};
    }
  }
`;
const EmptyApprover = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.grey[400]};
  &:before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${({ theme }) => theme.palette.grey[200]};
    margin-right: 8px;
  }
`;
const Approver = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  img {
    margin-right: 8px;
    width: 24px;
    height: 24px;
  }
`;
const ActionLabel = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.sky[600]};
  margin-left: auto;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  svg {
    margin-right: 6px;
  }
`;
