import { Button, CardActionArea, CardMedia, Typography, Paper, Box } from '@mui/material';

export interface BlogType {
    title: string;
    description: string;
    link?: string;
    img: string;
}
export interface BlogCardType {
    blog: BlogType;
    external?: boolean;
}

const BlogCard: React.FC<BlogCardType> = ({ blog, external = false }) => {
    return (
        <Paper sx={{ borderRadius: 3 }}>
            <CardActionArea
                disabled={!blog.link}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    height: '100%',
                }}
                {...(blog.link ? { href: blog.link, target: external ? '_blank' : undefined } : {})}
            >
                <CardMedia component="img" height="140" image={blog.img} alt="blog image" />
                <Box sx={{ flexGrow: 1, p: 2 }}>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        {blog.title}
                    </Typography>
                    <Typography>{blog.description}</Typography>
                </Box>
                <Button
                    component="div"
                    size="small"
                    color="primary"
                    disableRipple
                    tabIndex={-1}
                    disabled={!blog.link}
                    sx={{ p: 2, ':hover': { background: 'none' } }}
                >
                    {blog.link ? 'Read more' : 'By request'}
                </Button>
            </CardActionArea>
        </Paper>
    );
};
export default BlogCard;
