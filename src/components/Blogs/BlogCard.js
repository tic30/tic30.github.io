import React from 'react';
import { Button, Card, CardContent, CardActionArea, CardActions, CardMedia, Typography, colors } from '@mui/material';

export default function BlogCard({
    blog
}) {
    return (
        <Card sx={{ maxWidth: 345, boxShadow: `0 0 12px ${colors.grey[200]}`, borderRadius: 2 }}>
            <CardActionArea disabled={!blog.link} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '100%' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={blog.img}
                    alt="blog image"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" sx={{ lineHeight: 1.1, mb: 2 }}>
                        {blog.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {blog.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" disableRipple tabIndex={-1} disabled={!blog.link} sx={{ ml: '0.25rem', ':hover': { background: 'none' } }}>
                        {blog.link ? 'Read more' : 'Coming soon'}
                    </Button>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}
