import { Toolbar, Box } from '@mui/material';
import AppHeader from './AppHeader';
import BackToTopButton from '@/layout/back-to-top-button';
import AppDrawerProvider from '@/layout/AppDrawerContext';
import AppDrawer, { APP_DRAWER_WIDTH } from '@/layout/AppDrawer';
import AppDrawerGenres from './AppDrawerGenres';

type AppLayoutProps = React.PropsWithChildren<unknown>;

function AppLayout({ children }: AppLayoutProps) {
  return (
    <AppDrawerProvider>
      <AppHeader />
      {/* <Toolbar /> */}
      <Box sx={{ flex: 1, display: 'flex' }}>
        <Box
          component="nav"
          sx={{
            // width: { xs: 0, md: APP_DRAWER_WIDTH },
            flex: 'none',
          }}
        >
          <AppDrawer>
            <AppDrawerGenres />
          </AppDrawer>
        </Box>
        <Box
          component="main"
          sx={{
            flex: 1,
            // To not let content of "main" to exceed it horizontally.
            minWidth: 0,
            minHeight: '100%',
            paddingBottom: 4,
          }}
        >
          {children}
        </Box>
      </Box>
      <BackToTopButton />
    </AppDrawerProvider>
  );
}

export default AppLayout;
