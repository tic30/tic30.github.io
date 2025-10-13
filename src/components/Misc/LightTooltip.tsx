import { styled } from '@mui/material/styles';
import Tooltip, { type TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip classes={{ popper: className }} arrow placement="bottom-start" {...props} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        boxShadow: theme.shadows[3],
        fontSize: '1rem',
        lineHeight: 1.5,
        borderRadius: 8,
        padding: 16,
    },
    [`& .${tooltipClasses.arrow}::before`]: {
        backgroundColor: theme.palette.background.default,
        boxShadow: theme.shadows[3],
    },
}));

export default LightTooltip;
