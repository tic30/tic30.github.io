import {
  Box,
  colors,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect } from "react";

const Storybook: React.FC<{
  scrollAreaRef: React.RefObject<HTMLDivElement>;
}> = ({ scrollAreaRef }) => {
  useEffect(() => {
    scrollAreaRef.current?.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      component="section"
      id="storybook-title"
      sx={{
        "*": {
          color: colors.grey[800],
        },
        "p, span, li": {
          fontSize: "1.25rem",
          color: colors.grey[800],
        },
        "li p": {
          fontSize: "1rem",
        },
        "h1, h4, h5": {
          textTransform: "uppercase",
        },
      }}
    >
      <Container
        sx={{
          py: "min(30vh, 30rem)",
          "*": {
            textAlign: "center",
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            lineHeight: 1,
            mb: 2,
            fontSize: ["3rem", "4rem", "6rem"],
          }}
        >
          Storybook & Chromatic
        </Typography>
        <Typography variant="h4">setup for large organization</Typography>
      </Container>
      <Container>
        <Typography sx={{ pb: "2rem" }}>
          To fully utitize Storybook as a tool to help cross functional
          peers(Eng, UX, PM...) among a large number of teams to view, test and
          interact with UI components with best clarity and minimum effort, I
          aim to set up rules and utilities to standardize Storybook usage at
          Indeed.
        </Typography>
        <Typography variant="h5" sx={{ pb: "1rem" }}>
          Build as a community
        </Typography>
        <Typography sx={{ pb: "2rem" }}>
          Most engineering teams already use Storybook in some way. My first
          effort was to learn from their pain points and build up interest in
          making Storybook and Chromatic standardized across the company. I
          started conversations with engineers, UXers and team leads, created
          surveys and gave presentations to pitch the idea. In a short period of
          time, teams showed significant interest. I also received volunteering
          requests from a few engineers which helped push this initiative
          forward.
        </Typography>
        <Typography variant="h5">Identify workflow</Typography>
        <List sx={{ pb: "2rem" }}>
          <ListItem>
            PM & Eng leaders: Document and track feature iterations
          </ListItem>
          <ListItem>
            UXers: See all UI component straightfoward; Review changes in
            Chromatic; Communicate changes
          </ListItem>
          <ListItem>
            Engineers: Build UI in isolation, test variants, test user
            interactions.
          </ListItem>
          <ListItem>
            Code quality control: Automations and test coverage
          </ListItem>
          <ListItem>
            Internationalization: Verify translations, verify RTL/LTR alignments
            work
          </ListItem>
        </List>
        <Typography variant="h5" sx={{ pb: "1rem" }}>
          Code change
        </Typography>
        <Typography>
          Teams use Storybook in very different ways. After many iterations, the
          most straightfoward steps are summarized and advocated to engineers to
          ensure the adoption is progressive and streamlined. The steps are the
          following:
        </Typography>
        <List sx={{ pb: "2rem" }}>
          <ListItem>
            <ListItemText
              primary="Install utilty library and hand over version management task to the library"
              secondary="I built an NPM package that manages storybook and commonly used addons. This ensures version consistency and compatibility. Consuming teams are instructed to delete all covered Storybook dependencies at the same time."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Perform additional tasks to support Storybook v8"
              secondary="Teams can choose to upgrade other non-common addons to Storybook v8 compatible versions at there own pace. A v7 compatible utility library is also provided in case the addon is not yet upgraded."
            />
          </ListItem>
        </List>
        <Typography variant="h5" sx={{ pb: "1rem" }}>
          Automation
        </Typography>
        <Typography>The following are done in GitLab CI:</Typography>
        <List sx={{ pb: "2rem" }}>
          <ListItem>
            Chromatic is set up as a step in CI to auto build, deploy, send
            alerts in merge requests and start review sessions when UI changes.
          </ListItem>
          <ListItem>
            We also deploy static Storybook pages for non engineers to have
            quick access.
          </ListItem>
          <ListItem>
            Interaction tests are executed in CI and its coverage is combined
            with unit test coverage to produce an accurate overall coverage.
          </ListItem>
        </List>
        <Typography variant="h5" sx={{ pb: "1rem" }}>
          Documentation
        </Typography>
        <Typography>
          Aside from the utility library, I released a guideline doc
          simultaneously which answers many "what", "why" and "how" questions.
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="What is new with Storybook v8 and why worth the effort to upgrade?"
              secondary="Many teams are still using Storybook v6. The doc explains the new and simplified Component Story Format 3(CSF3), improved build performance, better documentation support and many other exciting new features."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="How to upgrade Storybook to v8? How much effort is needed?"
              secondary="The doc explains that installing the new utility library will automatically upgrade their Storybook to v8. Some common errors and solutions are also provided. Teams use addons that are not v8 compatible is instructed to use v7 compatible utility library for now. I explained that Storybook v7/8 are backward compatible so updating existing stories is optional, making the adoption progressive and the overall upfront effort minimum ."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="What are the included core addons?"
              secondary="Only critical and commonly used addons are included. The doc clearly explains why each of them is important and how to use them. User is also given the option to turn one off if they don't need it."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="What about the non-common addons?"
              secondary="I've encountered some very interesting and potentially useful addons that teams use when I did my research. Those are mentioned with a brief explanation and my thoughts on the pros and cons of using them. Some of them are marked experimental, some are on roadmap to be added to core list after I collect enough interest and need from the community."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Are interaction tests good? How to write them?"
              secondary="The idea that most UI components are easier to be tested with interaction tests is advocated. The doc explains when to choose interaction tests and how to write them."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="What are new best practises?"
              secondary="A few examples: CSF3 is the standard code format for story file; Interaction tests are encouraged as the first choise for React components; Certain ways of mocking things(GragphQL query and cache, feature flag...) are established; Autodoc is enabled by default; MDX documentation is encouraged should a single component has too many variants or two components are correlated and autodoc is not enough."
            />
          </ListItem>
        </List>
      </Container>
    </Box>
  );
};
export default Storybook;
