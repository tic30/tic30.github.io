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
  useMediaQuery,
  Theme,
} from "@mui/material";
import {
  baseCardStyle,
  btnStyle,
  cardActionAreaDefaultStyle,
  cardActionAreaWideStyleDesktop,
  cardContentDefaultStyle,
  cardContentWideStyleDesktop,
  wideCardStyleDesktop,
} from "./PortfolioCard.styles";

interface PortfolioCardContentType {
  title: string;
  imgUrl: string;
  subTitle: string;
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
  const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  return (
    <Card
      sx={{
        ...(wide && isSmUp ? wideCardStyleDesktop : baseCardStyle),
        ...sx,
      }}
      {...rest}
    >
      <CardActionArea
        disabled={!content.pageUrl}
        sx={{
          ...(wide && isSmUp
            ? cardActionAreaWideStyleDesktop
            : cardActionAreaDefaultStyle),
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
            ...(wide && isSmUp
              ? cardContentWideStyleDesktop
              : cardContentDefaultStyle),
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ lineHeight: 1.1, mb: 2 }}>
              {content.title}
            </Typography>
            <Typography>{content.subTitle}</Typography>
          </Box>
          {content.pageUrl && (
            <Button
              component="div"
              size="small"
              color="primary"
              disableRipple
              tabIndex={-1}
              disabled={content.pageUrl === "tbd"}
              sx={btnStyle}
            >
              {content.pageUrl === "tbd" ? "Coming soon" : "Read more"}
            </Button>
          )}
        </CardContent>
        <CardActions></CardActions>
      </CardActionArea>
    </Card>
  );
};

export default PortfolioCard;
