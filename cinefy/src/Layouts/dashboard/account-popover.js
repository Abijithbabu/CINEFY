import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Box, Divider, MenuItem, MenuList, Popover, Typography } from '@mui/material';
import { signOut } from '../../redux/action';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

export const AccountPopover = (props) => {
  const { anchorEl, onClose, open } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const data = useSelector((store) => store.data.user);
  const handleSignOut = useCallback(
    () => {
      signOut(dispatch) ;
    }, 
    [onClose]
  );

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom'
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
      style={{cursor:'pointer'}} 
      onClick={()=>navigate('/profile')}
        sx={{
          py: 1.5,
          px: 2
        }}
      >
        <Typography variant="overline">
          Account
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {data?.name ?? 'user'}
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: '8px',
          '& > *': {
            borderRadius: 1
          }
        }}
      >
       {data?(<MenuItem onClick={handleSignOut}>
          Sign out
        </MenuItem>):
        <MenuItem onClick={()=>navigate('/login')}>
        Sign in
      </MenuItem>} 
      </MenuList>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
};
