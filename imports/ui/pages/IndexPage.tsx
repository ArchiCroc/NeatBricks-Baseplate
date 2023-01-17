import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PageWrapper from '/imports/ui/components/PageWrapper';
import useI18n from '/imports/ui/hooks/useI18n';

export default function IndexPage() {

  const { t } = useI18n('indexPage');


  return (
    <PageWrapper>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            {t`title`}
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            {t`description`}
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Main call to action</Button>
            <Button variant="outlined">Secondary action</Button>
          </Stack>
        </Container>
      </Box>


    </PageWrapper>
  );
}
