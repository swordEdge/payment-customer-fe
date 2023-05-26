import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, BoxProps } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DirectorShareholdersViewStyle } from './index.style';
import { BusinessProfileComponent, NewButtonComponent } from 'components/common';
import { VERIFY_STATUS } from 'consts';
import { PATH, BUSINESS_MEMBER_TYPE } from 'consts';
import { IBusinessMember } from 'new_models';
import { UserKYCStatus } from 'types';

type DirectorShareholdersViewProps = BoxProps & {
  members: IBusinessMember[];
  deleteBusinessMember: (id: number) => void;
};


export const DirectorShareholdersView: React.FC<DirectorShareholdersViewProps> = (props) => {
  const { members, deleteBusinessMember } = props;

  const handleDeleteBusinessMember = (id: number) => {
    alert(id);
    deleteBusinessMember(id);
  }

  return <DirectorShareholdersViewStyle>
    <Grid container spacing={4}>
      <Grid item lg={6} md={6} xs={12}>
        <Box className="info-panel">
          <Box className="panel-comment"> Directors </Box>
          <Box className="panel">
            {
              members.map((member: IBusinessMember, index: number) => {
                if (parseInt(member.memberType) === BUSINESS_MEMBER_TYPE.DIRECTOR) {
                  return (
                    <BusinessProfileComponent
                      className='margin-top-8px'
                      key={index}
                      userId={member.id}
                      name={member.firstName + ' ' + member.lastName}
                      status={parseInt(member.kycStatus)}
                      editAction={() => { }}
                      deleteAction={handleDeleteBusinessMember}
                    />
                  )
                }
              })
            }
            <Link to={PATH.PROFILE_INDEX + '/' + PATH.PROFILE_NEW_DIRECTOR}>
              <NewButtonComponent className="button margin-top-32px">
                <AddIcon />
                Add Director
              </NewButtonComponent>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid item lg={6} md={6} xs={12}>
        <Box className="info-panel">
          <Box className="panel-comment"> Shareholders </Box>
          <Box className="panel">
            {
              members.map((member: IBusinessMember, index: number) => {
                if (parseInt(member.memberType) === BUSINESS_MEMBER_TYPE.SHAREHOLDER) {
                  return (
                    <BusinessProfileComponent
                      key={index}
                      userId={member.id}
                      name={member.firstName + ' ' + member.lastName}
                      status={parseInt(member.kycStatus)}
                      editAction={() => { }}
                      deleteAction={() => { }}
                    />
                  )
                }
              })
            }
            <Link to={PATH.PROFILE_INDEX + '/' + PATH.PROFILE_NEW_SHAREHOLDER}>
              <NewButtonComponent className="button margin-top-32px">
                <AddIcon />
                Add Shareholder
              </NewButtonComponent>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </DirectorShareholdersViewStyle>
};