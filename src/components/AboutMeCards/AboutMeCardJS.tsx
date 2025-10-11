import { Typography } from '@mui/material';
import StyledAboutMeCard from './StyledAboutMeCard';

const AboutMeCardJS = () => (
    <StyledAboutMeCard>
        <Typography variant="h5" className="aboutme-card-heading">
            Support Design System <br /> & UI Component Library
        </Typography>
        <Typography className="aboutme-card-content">
            I put effort in supporting design system iterations and maintaining a highly usable
            React component library.
        </Typography>
    </StyledAboutMeCard>
);

export default AboutMeCardJS;
