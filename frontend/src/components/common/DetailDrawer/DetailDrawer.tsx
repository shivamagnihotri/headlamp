import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setDetailDrawerOpen } from '../../../redux/drawerModeSlice';

export interface DetailDrawerProps {
  // isOpen: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export default function DetailDrawer({ children }: DetailDrawerProps) {
  const dispatch = useDispatch();
  // const isDetailDrawerEnabled = useTypedSelector(state => state.drawerMode.isDetailDrawerEnabled);

  const isDetailDrawerOpen = localStorage.getItem('detailDrawerOpen');

  console.log('OFF SETTINGS isDetailDrawerOpen', isDetailDrawerOpen);

  const [openDetailDrawer, changeOpenDetailDrawer] = useState<boolean>(Boolean(isDetailDrawerOpen));
  console.log('openDetailDrawer', openDetailDrawer);

  useEffect(() => {
    console.log('Toggle Open Drawer', openDetailDrawer);
    dispatch(setDetailDrawerOpen(openDetailDrawer));
  }, [openDetailDrawer]);

  function toggleOpenDrawer() {
    changeOpenDetailDrawer(!openDetailDrawer);
  }

  return (
    <>
      {!openDetailDrawer && (
        <>
          <Drawer
            hideBackdrop
            variant="persistent"
            open
            anchor="right"
            onClose={() => toggleOpenDrawer()}
          >
            <Box p={2}>
              <Button onClick={() => toggleOpenDrawer()}>Close</Button>
              {children}
            </Box>
          </Drawer>
        </>
      )}
      {openDetailDrawer && (
        <>
          <Drawer
            hideBackdrop
            variant="temporary"
            anchor="right"
            open
            onClose={() => toggleOpenDrawer()}
          >
            <Box width={600} p={2}>
              <Button onClick={() => toggleOpenDrawer()}>Close</Button>
              {children}
            </Box>
          </Drawer>
        </>
      )}
    </>
  );
}

// * the drawer is not opening in minimized mode? persistent drawer fix maybe - https://mui.com/material-ui/react-drawer/#persistent-drawer
