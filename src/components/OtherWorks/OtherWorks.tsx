import { Box, colors, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import {
  rolesContainerStyle,
  boxContainerStyle,
  boxStyle,
  roleTitleStyle,
} from "./OtherWorks.styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

interface PreviousRoleType {
  companyLogo: string;
  title: string;
  description: string;
}
const previousRoles: PreviousRoleType[] = [
  {
    companyLogo: "icons/indeed.png",
    title: "Design Technologist",
    description:
      "My first role at Indeed was a Design Technologist(DT). I supported the product lifecycle by iterating on user study, prototyping and AB testing.",
  },
  {
    companyLogo: "icons/siemens.png",
    title: "UX Prototype Engineer",
    description:
      "Work in a UX team together with engineers and designers to enable super fast parallel iterations of developing tools, digital platforms and cloud service systems.",
  },
  {
    companyLogo: "icons/deephow.png",
    title: "Chef Engineer Front End",
    description:
      "This AI start-up is incubated in Techstar by the hands of talents from Siemens UX team. I lead the front end architecture design and MVP development. During the short journey I established a highly-reusable and efficient development ecosystem, introduced a fully automated process from coding, testing, building, to deployment, and built a team with strong ownership and trust.",
  },
  {
    companyLogo: "icons/cmu.png",
    title: "Researcher",
    description:
      "I joined a group of HCI student to create AR application and study its social impact. I received my degree of Master of Science in Software Engineering at Carnegie Mellon University(CMU) in 2018. CMU courses paved solid ground in engineering which I benefit from util today and encouraged me to pursue a life-long learning.",
  },
];

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

const OtherWorks: React.FC = () => {
  return (
    <>
      <Typography variant="h4" sx={{ mt: 5, pb: 4 }}>
        My previous roles
      </Typography>
      <Box sx={rolesContainerStyle}>
        {previousRoles.map((role, i) => (
          <LightTooltip
            key={`previous-role-${i}`}
            title={role.description}
            tabIndex={0}
          >
            <Box sx={boxContainerStyle}>
              <Paper sx={boxStyle}>
                <Box
                  component="img"
                  src={`/imgs/${role.companyLogo}`}
                  alt="Other works icon"
                  sx={{
                    display: "block",
                    width: "80%",
                  }}
                />
              </Paper>
              <Typography sx={roleTitleStyle}>{role.title}</Typography>
            </Box>
          </LightTooltip>
        ))}
        <MoreHorizIcon sx={{ mt: 7, color: colors.grey[500] }} />
      </Box>
    </>
  );
};

export default OtherWorks;
