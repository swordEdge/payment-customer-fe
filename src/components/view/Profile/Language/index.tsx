import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, FormControlLabel, FormGroup } from '@mui/material';
import { LanguageViewStyle } from './index.style';
import { NewButtonComponent, MobileHeaderComponent } from 'components/common';
import { PATH } from 'consts';

type LanguageViewProps = {};

export const LanguageView: React.FC<LanguageViewProps> = ({ }) => {
  const navigate = useNavigate();

  const onMobileHeaderPrevClick = (path: string) => {
    navigate(path);
  };

  return (
    <LanguageViewStyle>
      <Box className='mobile-header-container'>
        <MobileHeaderComponent
          title='Language'
          backPath={PATH.PROFILE_INDEX + '/' + PATH.PROFILE_OVERVIEW}
          prevAction={onMobileHeaderPrevClick}
          actionIcon={
            <NewButtonComponent className='button-item mobile-header-button'>
              Update
            </NewButtonComponent>
          }
        />
        <Box sx={{ height: '5rem' }}> </Box>
      </Box>
      <FormGroup className="form-container">
        <Box sx={{ fontSize: '1.2rem' }}> Will be coming soon... </Box>
        {/* <Box className='header'>Preferred Language</Box>
        <Box className='content'></Box>

        <div className='margin-top-32 button-container'>
          <NewButtonComponent className='button-item' disabled={true}>
            Cancel
          </NewButtonComponent>
          <NewButtonComponent
            type='submit'
            className='button-item'
            disabled={true}
          >
            Update
          </NewButtonComponent>
        </div> */}
      </FormGroup>
    </LanguageViewStyle>
  );
};
