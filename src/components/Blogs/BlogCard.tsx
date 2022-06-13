import {
  Button,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
} from "@mui/material";

export interface BlogType {
  title: string;
  description: string;
  link?: string;
  img: string;
}
export interface BlogCardType {
  blog: BlogType;
}

const BlogCard: React.FC<BlogCardType> = ({ blog }) => (
  <Card
    sx={{
      maxWidth: 345,
      boxShadow: 3,
      borderRadius: 3,
    }}
  >
    <CardActionArea
      disabled={!blog.link}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        height: "100%",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={blog.img}
        alt="blog image"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          {blog.title}
        </Typography>
        <Typography>{blog.description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          component="div"
          size="small"
          color="primary"
          disableRipple
          tabIndex={-1}
          disabled={!blog.link}
          sx={{ ml: "0.25rem", ":hover": { background: "none" } }}
        >
          {blog.link ? "Read more" : "Coming soon"}
        </Button>
      </CardActions>
    </CardActionArea>
  </Card>
);

export default BlogCard;
