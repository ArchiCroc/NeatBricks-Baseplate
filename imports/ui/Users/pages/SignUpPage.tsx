import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import PageWrapper from '/imports/ui/components/PageWrapper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { TextField } from 'uniforms-mui';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Form from '/imports/ui/components/Form';
import SignUpSchema from '/imports/common/Users/schemas/SignUpSchema';
import useI18n from '/imports/ui/hooks/useI18n';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';


export default function SignUpPage() {

  const { t } = useI18n('Users');
  const navigate = useNavigate();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  function handleSuccess() {
    enqueueSnackbar(t`signUpSuccess`, { variant: 'success' });
    navigate('/');
  }

  const handleSubmit = (model: any) => {
    Accounts.createUser(
      {
        email: model.email,
        password: model.password,
        profile: {
          firstName: model.firstName,
          lastName: model.lastName,
          settings: {
            marketingEmails: model.marketingEmails,
          },
        },

      },
      (error) => {
        if (error) {
          enqueueSnackbar(error.message, { variant: 'error' });
        } else {
          handleSuccess()
        }
      },
    );
  };

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
          {t`SignUpPage.title`}
        </Typography>
        <Form schema={SignUpSchema} i18nModule="Users.fields" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="username"
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                type="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {t`signUp`}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                {t`alreadyHaveAccount`}
              </Link>
            </Grid>
          </Grid>
        </Form>
      </Box>
    </PageWrapper>
  );
}