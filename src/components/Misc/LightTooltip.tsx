import { colors } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    classes={{ popper: className }}
    arrow
    placement="bottom-start"
    {...props}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: colors.grey[800],
    boxShadow: theme.shadows[3],
    fontSize: 16,
    lineHeight: 2,
    borderRadius: 8,
    padding: 24,
  },
  [`& .${tooltipClasses.arrow}::before`]: {
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[3],
  },
}));

export default LightTooltip;
