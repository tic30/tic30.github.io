import { Box, Theme, useMediaQuery } from "@mui/material";
import BlogCard, { BlogType } from "./BlogCard";

const blogList: BlogType[] = [
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
];

export default function Blogs() {
  const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        ...(isSmUp
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
