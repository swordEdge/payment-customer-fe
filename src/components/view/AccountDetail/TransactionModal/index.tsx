import React, { useMemo } from 'react';

import { Box, Button, Grid } from '@mui/material';
import { useModal } from 'hooks';
import { ICurrency, ITransaction } from 'new_models';

import { TransactionModalStyle } from './index.style';

import { InfoCardComponent, NewModalComponent } from 'components/common';

type TransactionModalProps = {
  onCancel: () => void;
  transaction: ITransaction;
  currencies: ICurrency[];
};

export const TransactionModal: React.FC<TransactionModalProps> = ({
  onCancel,
  transaction,
  currencies,
}) => {
  const {
    isShowing: transactionDetailModalShowing,
    close: transactionDetailModalClose,
    show: transactionDetailModalShow,
  } = useModal();

  const onCancelClick = () => {
    onCancel();
  };

  return (
    <NewModalComponent.Root
      isClosable={false}
      onClose={transactionDetailModalClose}
    >
      <TransactionModalStyle>
        <Box className='modal-container'>
          <NewModalComponent.Header>
            <Box className='modal-header'>
              {transaction && transaction.name}
              <Box className='description-title'>
                {transaction.inOuts ? 'Received' : 'Sent'} fund to
                {transaction.inOuts ? (
                  <>
                    {transaction.cpDisplayName} from {transaction.accountName}(
                    {transaction.accountNumber})
                  </>
                ) : (
                  <>

                    {transaction.accountName}({transaction.accountNumber} from
                    {transaction.cpDisplayName})
                  </>
                )}
              </Box>
            </Box>
          </NewModalComponent.Header>

          <NewModalComponent.Content>
            <Box className='modal-content'>
              <Grid container className='detail-container' spacing={2}>
                <Grid item lg={6}>
                  <Box className='grid-title-container'> Amount </Box>
                  <br />
                  <Grid container spacing={2}>
                    <Grid item lg={4}>
                      <InfoCardComponent
                        title='Amount'
                        value={`${transaction.amount} ${transaction.currencyCode
                          } `}
                      />
                    </Grid>
                    <Grid item lg={4}>
                      <InfoCardComponent
                        title='Fees'
                        value={`${transaction.feeAmount}${transaction.currencyCode
                          } `}
                      />
                    </Grid>
                    <Grid item lg={4}>
                      <InfoCardComponent
                        title='Rate'
                        value={`${transaction.rate ?? "1.0000"}`}
                      />
                    </Grid>
                  </Grid>
                  <br />
                  <br />
                  <InfoCardComponent
                    title='Total Received'
                    value={transaction.inOuts ?
                      `${+transaction.amount + +transaction.feeAmount}$${transaction.currencyCode}` :
                      `${+transaction.amount - +transaction.feeAmount}$${transaction.currencyCode}`}
                  />
                  <br />
                  <br />
                  <InfoCardComponent
                    title='Transaction Type'
                    value={`${transaction.type}`}
                  />
                </Grid>
                <Grid item lg={6}>
                  <Box className='grid-title-container'> Details </Box>
                  <br />
                  <Grid container spacing={2}>
                    <Grid item lg={6}>
                      <InfoCardComponent
                        title='Date'
                        value={`${transaction.create_at}`}
                      />
                    </Grid>
                    <Grid item lg={6}>
                      <InfoCardComponent title='Memo' value='' />
                    </Grid>
                  </Grid>
                  <br />
                  <br />
                  <InfoCardComponent
                    title='Transaction Status'
                    value={`${transaction.status}`}
                  />
                  <br />
                  <br />
                  <InfoCardComponent
                    title='Last Update'
                    value={`${transaction.create_at}`}
                  />
                </Grid>
              </Grid>

              <br />
              <br />

              <Grid container className='detail-container' spacing={2}>
                <Grid item lg={6}>
                  <Box className='grid-title-container'> From </Box>
                  <br />
                  <InfoCardComponent
                    title='Name'
                    value={`${transaction.cpAccountName}`}
                  />
                  <br />
                  <br />
                  <InfoCardComponent
                    title='Email'
                    value={`${transaction.cpAccountEmail ?? ""}`}
                  />
                  <br />
                  <br />
                  <InfoCardComponent
                    title='Account'
                    value={`${transaction.cpAccountNumber}`}
                  />
                </Grid>
                <Grid item lg={6}>
                  <Box className='grid-title-container'> To </Box>
                  <br />
                  <InfoCardComponent
                    title='Name'
                    value={`${transaction.accountName}`}
                  />
                  <br />
                  <br />
                  <InfoCardComponent
                    title='Email'
                    value={`${transaction.email ?? ""}`}
                  />
                  <br />
                  <br />
                  <InfoCardComponent
                    title='Account'
                    value={`${transaction.accountNumber}`}
                  />
                </Grid>
              </Grid>
            </Box>
          </NewModalComponent.Content>

          <NewModalComponent.Footer>
            <Box className='control-container'>
              <Button className='close-button' onClick={onCancelClick}>
                Close
              </Button>
            </Box>
          </NewModalComponent.Footer>
        </Box>
      </TransactionModalStyle>
    </NewModalComponent.Root>
  );
};
