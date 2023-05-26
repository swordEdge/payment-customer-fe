import React, { useState } from 'react';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PrintIcon from '@mui/icons-material/Print';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { Box, Button, Divider, TextField } from '@mui/material';

import { MyMsgViewStyle } from './index.style';

import { DropDownComponent, MsgItemComponent } from 'components/common';

import { IMsgItem } from 'models';

const msgData: IMsgItem[] = [
  {
    title: 'Account with Card',
    date: '09/12/2022',
  },
  {
    title: 'A new document is available',
    date: '09/12/2022',
  },
  {
    title: 'Bank Accounts',
    date: '09/12/2022',
  },
  {
    title: 'How to get paid with Payoneer',
    date: '09/12/2022',
  },
  {
    title: 'A document is available',
    date: '09/12/2022',
  },
  {
    title: 'How do I reset my password',
    date: '09/12/2022',
  },
  {
    title: 'A new document is available',
    date: '09/12/2022',
  },
  {
    title: 'A new document is available',
    date: '09/12/2022',
  },
];

const accounts = ['EUR Account', 'USD Account'];

export const MessagesView: React.FC = () => {
  const [currentMsg, setCurrentMsg] = useState<number>(0);
  const [newMsg, setNewMsg] = useState<boolean>(false);

  const onSendNewClicked = () => {
    setNewMsg(true);
  };

  const setCurrent = (index: number) => {
    setNewMsg(false);
    setCurrentMsg(index);
  };

  const onChangeValue = (value: string) => {
  };
  return (
    <MyMsgViewStyle>
      <Box className='main-container'>
        <Box className='msg-menu-container'>
          <Button className='send-msg-button' onClick={onSendNewClicked}>
            <SaveAsIcon sx={{ fontSize: '1.4rem' }} />
            Send us a messasge
          </Button>

          <Box className='msg-list-container'>
            {msgData.map((msg, index) => (
              <Box key={index} sx={{ marginTop: '0.5rem' }}>
                <MsgItemComponent
                  key={index}
                  title={msg.title}
                  date={msg.date}
                  msgIndex={index}
                  currentIndex={currentMsg}
                  setCurrent={setCurrent}
                />
              </Box>
            ))}
          </Box>
        </Box>

        <Box className='msg-main'>
          <Box className='msg-header'>
            <Box className='msg-title'>
              {!newMsg && msgData[currentMsg].title}
              {newMsg && (
                <Box className='account-drop'>
                  {/* <DropDownComponent
                    required={false}
                    label=''
                    values={accounts}
                    onChangeValue={onChangeValue}
                  /> */}
                </Box>
              )}
            </Box>
            {!newMsg && (
              <Box className='msg-date'>{msgData[currentMsg].date}</Box>
            )}
          </Box>

          <Divider className='custom-divider' />

          <Box className='msg-content'>
            {!newMsg && (
              <>
                <Box className='sub-title'>{msgData[currentMsg].title}</Box>
                <Box className='msg-main-content'>
                  There are documents relating to your application for a new
                  product for you to view. To access now, please select
                  'Mortgage options' from the left hand menu or within the
                  Mortgage section under 'my banking'. Thank you.
                </Box>
              </>
            )}
            {newMsg && (
              <TextField
                className='msg-edit-container'
                label=''
                multiline
                sx={{ '& fieldset': { border: 'none' } }}
                rows={11}
                placeholder='Type your message here...'
                variant='standard'
              />
            )}
          </Box>

          {newMsg && (
            <>
              <Box className='note-container'>
                <Box className='note-header'>Please note</Box>

                <pre className='note-content'>
                  We aim to respond your message within 2 working days.
                  <br />
                  For an immediate response, use our Chat service. You can
                  start, pause, and continue
                  <br />a conversation at your convenience.
                  <br />
                  If you use the Payment System APP, you can also continue your
                  conversation with us there.
                </pre>
              </Box>

              <Divider
                className='custom-divider'
                sx={{ marginTop: '0.5rem' }}
              />
            </>
          )}

          <Box className='action-button-container'>
            {!newMsg && (
              <Button className='nonback-button'>
                <PrintIcon />
                Print
              </Button>
            )}
            {!newMsg && (
              <Box sx={{ display: 'flex' }}>
                <Button className='nonback-button'>
                  <DeleteForeverIcon />
                  Delete
                </Button>

                <Button className='back-button'>Reply</Button>
              </Box>
            )}
            {newMsg && (
              <Box
                sx={{ display: 'flex', width: '100%', justifyContent: 'right' }}
              >
                <Button className='nonback-button'>Cancel</Button>

                <Button className='back-button'>Send</Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </MyMsgViewStyle>
  );
};
