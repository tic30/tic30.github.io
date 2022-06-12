import {
  Button,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
  CardProps,
  Box,
} from "@mui/material";
import {
  baseCardStyle,
  btnStyle,
  cardActionAreaDefaultStyle,
  cardActionAreaWideStyle,
  cardContentDefaultStyle,
  cardContentWideStyle,
  wideCardStyle,
} from "./PortfolioCard.styles";

interface PortfolioCardContentType {
  title: string;
  imgUrl: string;
  subTitle: string;
  btnText: string;
  pageUrl: string;
}

interface PortfolioCardType extends CardProps {
  wide?: boolean;
  content: PortfolioCardContentType;
}

const PortfolioCard: React.FC<PortfolioCardType> = ({
  wide = false,
  content,
  sx,
  ...rest
}) => {
  return (
    <Card
      sx={{
        ...(wide ? wideCardStyle : baseCardStyle),
        ...sx,
      }}
      {...rest}
    >
      <CardActionArea
        disabled={!content.pageUrl}
        sx={{
          ...(wide ? cardActionAreaWideStyle : cardActionAreaDefaultStyle),
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={`/imgs/${content.imgUrl}`}
          alt="content image"
        />
        <CardContent
          sx={{
            ...(wide ? cardContentWideStyle : cardContentDefaultStyle),
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ lineHeight: 1.1, mb: 2 }}>
              {content.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {content.subTitle}
            </Typography>
          </Box>
          {content.pageUrl && (
            <Button
              component="div"
              size="small"
              color="primary"
              disableRipple
              tabIndex={-1}
              disabled={!content.pageUrl}
              sx={btnStyle}
            >
              Read more
            </Button>
          )}
        </CardContent>
        <CardActions></CardActions>
      </CardActionArea>
    </Card>
  );
};

export default PortfolioCard;
