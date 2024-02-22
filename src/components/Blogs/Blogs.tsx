import { Box, Theme, useMediaQuery } from "@mui/material";
import BlogCard, { BlogType } from "./BlogCard";

const blogList: BlogType[] = [
  {
    title: "Storybook and Chromatic for large org",
    description:
      "Comprehensive visual testing and documentation of UI components using Storybook and Chromatic can work efficiently across teams in large organizations.",
    // link: '#',
    img: "/imgs/storybook.jpg",
  },
  {
    title: "Common practise in accessibility",
    description:
      "A11y can do you a lot more good than in WCAG paper. Look at this list of common practises to boost page usability.",
    // link: '#',
    img: "/imgs/a11y.gif",
  },
  {
    title: "Build flexible UI system and component library",
    description:
      "Build a design system that is both complete and extentively flexible.",
    img: "/imgs/design-system.png",
  },
  {
    title: "Tools and methodologies to prevent broken experiene",
    description:
      "Debugging and fixing incidents are stressful and costly. There are precautions we can make to mitigate this risk.",
    img: "/imgs/prevent-broken.jpeg",
  },
];

export default function Blogs() {
  const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        ...(isMdUp
          ? {}
          : {
              flexDirection: "column",
            }),
      }}
    >
      {blogList.map((blog, id) => (
        <BlogCard key={`blog-accordion-${id}`} blog={blog} />
      ))}
    </Box>
  );
}
