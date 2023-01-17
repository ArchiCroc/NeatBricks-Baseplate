import React, { useEffect } from 'react';
import { Accounts } from 'meteor/accounts-base';
import PageWrapper from '/imports/ui/components/PageWrapper';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import Typography from '@mui/material/Typography';
import useI18n from '/imports/ui/hooks/useI18n';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useUser } from 'meteor/react-meteor-accounts';

export default function ProfilePage() {

  const { t } = useI18n('Users');
  const user = useUser();
  //const navigate = useNavigate();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return (
    <PageWrapper maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <AccountCircleOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t`ProfilePage.title`}
        </Typography>
        <Typography component="p" align="left" color="text.secondary" paragraph>
          {JSON.stringify(user)}
        </Typography>
      </Box>
    </PageWrapper>
  );
}