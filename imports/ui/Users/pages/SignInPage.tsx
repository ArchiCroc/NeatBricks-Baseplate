import React from 'react';
import PageWrapper from '/imports/ui/components/PageWrapper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { TextField } from 'uniforms-mui';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Form from '/imports/ui/components/Form';
import SignInSchema from '/imports/common/Users/schemas/SignInSchema';
import useI18n from '/imports/ui/hooks/useI18n';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

export default function SignInPage() {

  const { t } = useI18n('Users');
  const navigate = useNavigate();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  function handleSuccess() {
    enqueueSnackbar(t`signInSuccess`, { variant: 'success' });
    navigate(window._afterLoginPath || '/');
    window._afterLoginPath = undefined;
  }

  const handleSubmit = (model: any) => {
    Meteor.loginWithPassword(model.selector, model.password, (error?: Error) => {
      if (error) {
        enqueueSnackbar(error.message, { variant: 'error' });
      } else {
        handleSuccess();
      }
    });
  };

  return (
    <PageWrapper>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {t`SignInPage.title`}
            </Typography>
            <Form schema={SignInSchema} i18nModule="Users.fields" onSubmit={handleSubmit}>
              {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}> */}
              <TextField
                name="selector"
                autoComplete="email"
                autoFocus
              />
              <TextField
                name="password"
                type="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {t`signIn`}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/forgot-password" variant="body2">
                    {t`forgotPassword`}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {t`createAccount`}
                  </Link>
                </Grid>
              </Grid>
            </Form>
          </Box>
        </Grid></Grid>
    </PageWrapper>
  );
}