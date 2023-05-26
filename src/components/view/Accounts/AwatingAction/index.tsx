import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { AwaitingActionViewStyle } from './index.style';
import { AwaitingActionComponent } from 'components/common';
import { PATH } from 'consts';

type AwaitingActionViewProps = {
  leftDays: number;
};

export const AwatingActionView: React.FC<AwaitingActionViewProps> = (props) => {
  const { leftDays } = props;
  return (
    <AwaitingActionViewStyle>
      <Typography className='title-typo'> Awaiting Your Action </Typography>
      <Box className='action-card'>
        <Link to={PATH.PROFILE_INDEX + '/' + PATH.PROFILE_INFO}>
          <AwaitingActionComponent
            title='Complete your personal detail'
            note={`Finish in ${leftDays} days`}
          />
        </Link>
      </Box>
    </AwaitingActionViewStyle>
  );
};
