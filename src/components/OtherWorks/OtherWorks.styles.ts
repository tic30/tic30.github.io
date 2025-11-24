import { colors } from '@mui/material';

export const rolesContainerStyle = {
    display: 'flex',
    gap: 3,
    ml: -2,
    pl: 2,
    py: 4,
    mb: 5,
    maxWidth: '100%',
    overflowX: 'auto',
};

export const boxContainerStyle = {
    display: 'flex',
    flexShrink: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexBasis: 'min-content',
    gap: 1,
    borderRadius: 5,
    pb: 1,
    transitionDuration: '0.2s',
    '&:hover, &:focus': {
        backgroundColor: 'background.action',
    },
};

export const boxStyle = {
    backgroundColor: colors.common.white,
    width: '8rem',
    height: '8rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    transitionDuration: '0.2s',
    transitionProperty: 'background-color',
    boxShadow: 2,
};

export const roleTitleStyle = {
    textAlign: 'center',
    transitionDuration: '0.2s',
};
