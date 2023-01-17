import React, { useEffect } from 'react';
import { Accounts } from 'meteor/accounts-base';
import PageWrapper from '/imports/ui/components/PageWrapper';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import useI18n from '/imports/ui/hooks/useI18n';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';


export default function SignOutPage() {

  const { t } = useI18n('Users');
  const navigate = useNavigate();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    Accounts.logout(() => {
      enqueueSnackbar(t`signOutSuccess`, { variant: 'success' });
      window._afterLoginPath = undefined;
    })
  });

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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t`SignOutPage.title`}
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          {t`SignOutPage.description`}
        </Typography>
      </Box>
    </PageWrapper>
  );
}