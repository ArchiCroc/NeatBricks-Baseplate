

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import useI18n from '/imports/ui/hooks/useI18n';
import { useUser } from 'meteor/react-meteor-accounts';
import UserMenu from './UserMenu';

export default function Header(/*{ children }: FooterProps */) {
  const { t } = useI18n();
  const user = useUser();
  console.log({ user })
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, textDecoration: 'none', }} component={Link} href="/">
          {t`siteName`}
        </Typography>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Features
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Enterprise
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Support
          </Link>
        </nav>
        {user == null ? (
          <Button href="/signin" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            {t`Users.signIn`}
          </Button>) : <UserMenu user={user} />}
      </Toolbar>
    </AppBar>
  );
}
