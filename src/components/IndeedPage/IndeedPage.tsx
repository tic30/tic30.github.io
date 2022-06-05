import React from "react";
import { Box, colors, Paper, Typography } from "@mui/material";
import { topStorySx, storiesSx, storyDivider } from "./IndeedPage.style";

const indeedStories = [
  {
    title: "Maintain UI Library @Indeed community",
    content:
      "I maintain one of the mostly adopted Indeed internal UI libraries. It is community based and I am there to encourage and guide contributors. We made sure each library has clear documentation and passes the highest standard of code quality, performance and accessibility check.",
  },
  {
    title: "Improve engineering efficiency",
    content:
      "As a developer, I constantly look for ways to improve code quality and dev experience. I adopt patterns, technologies and introduce tools to help speed up the engineering process, increase test coverage, create test plans, automate pipelines, track errors and monitor performance.",
  },
  {
    title: "Explore, learn and grow together",
    content:
      "I actively research on useful new gadgets in open source community and bring them to the company. Meanwhile, I organize ad hoc training and knowledge sharing sessions to onboard new members, learn from each other and share insights towards the future of front end.",
  },
];

const IndeedPage: React.FC = () => (
  <>
    <Typography variant="h4" sx={{ pb: 4 }}>
      UX Developer
    </Typography>
    <Typography sx={{ mb: 5 }}>
      I work at Indeed as a UX Developer. I play a role of front end contributor
      and design-engineering coordinator in the team. My work supports the front
      end feature iterations, drive adoption of company-wide UX & FE directions
      and guidelines, and coordinate across teams.
    </Typography>
    <Paper sx={topStorySx.outer}>
      <Box sx={{ mr: 6 }}>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Build the platform for{" "}
          <Box component="span" sx={{ color: colors.blue[800] }}>
            every employer
          </Box>
        </Typography>
        <Typography sx={{ mb: 3 }}>
          In employer team, I focus on presenting{" "}
          <Box component="span" sx={{ color: colors.amber[800] }}>
            easy to use
          </Box>{" "}
          flow and features for employers to post a job and manage postings.
        </Typography>
        <Typography sx={{ mb: 3 }}>
          I build onboarding pages that boost initial{" "}
          <Box component="span" sx={{ color: colors.amber[800] }}>
            engagement
          </Box>{" "}
          from small, medium businesses and enterprises.
        </Typography>
        <Typography>
          I craft story-telling features in employers' job dashboard to increase
          employers'{" "}
          <Box component="span" sx={{ color: colors.amber[800] }}>
            awareness
          </Box>{" "}
          of Indeed features and help them quickly{" "}
          <Box component="span" sx={{ color: colors.amber[800] }}>
            navigate
          </Box>{" "}
          to the right action to get the most hires.
        </Typography>
      </Box>
      <Box
        component="img"
        src="/imgs/indeed-illstration1.png"
        alt="indeed"
        aria-hidden
        sx={topStorySx.img}
      />
    </Paper>
    <Paper sx={{ ...topStorySx.outer, pl: 2 }}>
      <Box
        component="img"
        src="/imgs/indeed-illstration2.png"
        alt="indeed"
        aria-hidden
        sx={{ ...topStorySx.img, maxWidth: "50%", mr: 5 }}
      />
      <Box>
        <Typography
          variant="h5"
          sx={{ fontSize: ["1.5rem", "1.5rem", "2rem"], mb: 4 }}
        >
          One Experience
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Working in UX org, I push towards consistent user experience across
          Indeed products.
        </Typography>
        <Typography sx={{ mb: 3 }}>
          I advocate the adoption of the latest design and UI libraries across
          teams, identify broken experiences and coordinate with engineers and
          other UX Developers to fix them.
        </Typography>
        <Typography>
          My believe is that the best way to build customer trust and brand
          recognition is through{" "}
          <Box component="span" sx={{ color: colors.amber[800] }}>
            consistent visual presentation
          </Box>
          ,{" "}
          <Box component="span" sx={{ color: colors.blue[800] }}>
            high quality content
          </Box>
          , and{" "}
          <Box component="span" sx={{ color: colors.amber[800] }}>
            productive features
          </Box>
          .
        </Typography>
      </Box>
    </Paper>
    <Typography variant="h5" sx={storyDivider}>
      I've also been doing...
    </Typography>
    <Box sx={storiesSx.wrapper}>
      {indeedStories.map((story, i) => (
        <Paper sx={storiesSx.paper} key={i}>
          <Box sx={storiesSx.titleWrapper}>
            <Typography variant="h5">{story.title}</Typography>
          </Box>
          <Typography>{story.content}</Typography>
        </Paper>
      ))}
    </Box>
  </>
);

export default IndeedPage;
