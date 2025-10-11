import { Box, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import transition from '../../transition';

// const imgSx: SxProps = {
//   display: "block",
//   marginInline: "auto",
//   paddingBlock: 4,
//   maxWidth: "100%",
// };

const IndeedMicroFE: React.FC<{
    scrollAreaRef: React.RefObject<HTMLDivElement>;
}> = ({ scrollAreaRef }) => {
    useEffect(() => {
        scrollAreaRef.current?.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box
            component="section"
            // initial="initial"
            // animate="animate"
            // exit="exit"
            id="storybook-title"
            // layoutId="project-microfe"
            sx={{
                'p, span, li': {
                    fontSize: '1.25rem',
                },
                'li p': {
                    fontSize: '1rem',
                },
                'h1, h4': { fontWeight: 'bold' },
                h4: { py: 1 },
            }}
        >
            <Container
                component={motion.div}
                initial={{ opacity: 0, y: '20px' }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                }}
                sx={{
                    pt: 'min(30vh, 30rem)',
                    pb: 4,
                    '*': {
                        textAlign: 'center',
                        textTransform: 'uppercase',
                    },
                }}
                maxWidth="xl"
            >
                <Typography
                    variant="h1"
                    sx={{
                        lineHeight: 1,
                        fontSize: ['3rem', '4rem', '6rem'],
                    }}
                >
                    Micro Frontend
                </Typography>
                <Typography variant="h4">@ Indeed</Typography>
            </Container>
            <Box
                component={motion.img}
                initial={{ opacity: 0, y: '20px' }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                src="/imgs/indeed-oh.png"
                alt="Micro Frontend @ Indeed"
                aria-hidden
                sx={{
                    width: '100%',
                    height: 'min(30vh, 30rem)',
                    objectFit: 'cover',
                    pb: 4,
                }}
            />
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}
                maxWidth="xl"
            >
                <Typography sx={{ marginBlock: 4 }}>
                    Indeed has gone through several iterations of re-architecturing to enable teams
                    to focus on feature development and have minimum friction in collaboration and
                    integration. When Webpack 5 & GraphQL Apollo client were here, we finally found
                    a solid direction. My part is to set up federated feature repositories and
                    generate proper guidelines to help my team onboard and do the migration.
                </Typography>
                <Typography variant="h4">Problem</Typography>
                <Typography>
                    Tight coupling appears as we fetch data in one big query, use a transformation
                    layer to format the data to match what UI needs, and store everything in one
                    giant data object. Features often ask for different format of the same/similar
                    data, resulting in unmaintainable large number of transformer functions,
                    confusing data object keys, prop drilling and poor performance.
                </Typography>
                {/* <Box
          component="img"
          sx={imgSx}
          alt="Problem"
          aria-hidden
          src="/imgs/mfe1.png"
        /> */}
                <Typography variant="h4">Concept and design</Typography>
                <Typography>
                    Webpack 5 module federation and GraphQL fragments are two powerful tools we can
                    use. Here are how we interpret and apply these concepts.
                </Typography>
                <Typography variant="subtitle1">
                    Concept: Webpack 5 federated module repositories
                </Typography>
                <Typography>
                    UI layer is broken down into page level "container" repositories, plus many
                    "feature" repositories owned by product teams. Feature repos are exposed as
                    federated modules and consumed by container repos, or other feature repos as
                    needed.
                </Typography>
                {/* <Box
          component="img"
          sx={imgSx}
          alt="Federated React Components"
          aria-hidden
          src="/imgs/mfe-react.png"
        /> */}
                <Typography variant="subtitle1">Concept: Federated GraphQL fragment</Typography>
                <Typography>
                    GraphQL fragments can exist for any feature, live in any repository, be written
                    as much as needed. They are all federated onto a few main queries, resulting in
                    a small number of queries fired at page load, significantly boosts performance
                    and reduces server load.
                </Typography>
                {/* <Box
          component="img"
          sx={imgSx}
          alt="Federated React Components"
          aria-hidden
          src="/imgs/mfe-frag.png"
        /> */}
                <Typography variant="subtitle1">Design: Fragment first architecture</Typography>
                <Typography>
                    Each UI feature module exposes its own GraphQL fragment. Never reuse a fragment
                    from another feature. Then all the fragments are federated onto main queries in
                    the container repository. This clarifies the relationship between presentational
                    and data layers, decouples modules, and makes feature iterations, code tracing
                    and cleanups much easier.
                </Typography>
                {/* <Box
          component="img"
          sx={imgSx}
          alt="Fragment first architecture"
          aria-hidden
          src="/imgs/mfe-together.png"
        /> */}
                <Typography variant="h4">Workflow</Typography>
                <List>
                    <ListItem>
                        <ListItemText
                            primary="Spin up"
                            secondary={`Clearly define the scope of "container" and "feature",
            both in terms of UI and data entities. Breakdown efforts and plan migrating from old repositories in terms of time and resources.`}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Setup repositories and implement pilot feature"
                            secondary="My job was to set up a feature domain when someone else was working on the container. We took the approach of splitting the work into pure UI part and function/data part. With feature flags, translations and logging added on top, there were a lot of things going on and I'm glad we did the splitting which allows us to test things thoroughly and makes the integration very simple."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Test build and deployment"
                            secondary="We use AWS S3 bucket to deploy feature modules with proper bundle splitting. We used similar steps in CI for the build, pack and deployment for all repositories. The performance turned out pretty good and we added preloading mechanism for certain time sensitive features to make it even better."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Add tooling"
                            secondary="Linting, prettier, logging, translation, and a varies of testing tools were added to the repositories. Storybook and Chromatic is a big part of my work and I managed to set up multiple useful addons and checks to help with development. See my Storybook blog for more information on that. I also collaborated with Indeed UX Quality and Design System teams to figure out a most suited set of linting rules and wrote a few of our own to ensure the highest code quality."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Create documentations and organize training sessions"
                            secondary="As an early adopter to this new micro frontend architecture, I took on the task to document the process, share learnings and give introductory sessions to onboard peer engineers. Wiki space was created and important tech stack and decisions we made were well documented with pros and cons. A few presentation and workshops were organized across teams."
                        />
                    </ListItem>
                </List>
                <Typography variant="h4">Challenges</Typography>
                <Typography>
                    Below are a list of some of the technical challenges we ran into.
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText
                            primary="Decoupling"
                            secondary="Reusing code, as attempting as it sounds, often creates coupling. It was a big problem in our old codebase where we ended up having tangled code and very hard to maintain. In the new architecture, we created shared folders that is specifically for generic features, and put a stop to any other forms of cross reference/reusing. With the help of the Indeed design system reusable UI component library, we enforced a one way bottom up code sharing mechanism that has minimum to none coupling."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="UI Reusablity"
                            secondary="When a certain feature shows up in different places, especially across different container environments, we built a standalone wrapper to enable reusing a federated feature across environments. The wrapper contains domain specific context and data handler that is used in features of that container environment, so those features become a self-contained plugin that can be reused anywhere."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Singleton"
                            secondary="Like React, some npm libraries doesn't work when there is more than one copy. So singletons are set at platform level to regulate usage across the board. Parent repositories can have their own domain specific singleton settings too. E.g. Formik."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Feature flags & GraphQL fragments"
                            secondary="Feature flag are especially tricky when used to control a GrahpQL fragment across repositories. We learned established "
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Apollo cache update problem"
                            secondary="When a mutation is fired, user sometimes don't see the change on the page right away. We digged deep into how to set fetch policy and handle Apollo cache update inside very complicated data objects and across federated modules/repositories, with the goal of making sure Apollo client manages the cache and updates all related states properly."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="1+N queries problem"
                            secondary="Significant slow can happen if N individual queries are needed for N children entities which all depends on one parent entity. E.g. we found 20 jobs as the user input search result. Then we need all of these jobs' details so 20 individual queries are fired. The page displays only when all of these 21 queries resolve which is very slow. At front end, we need to avoid writing such children queries and only fire one parent qurey. But it depends on back end having all children fields being federated onto the parent entity. In server and database level, correlation need to be established which helps servers fetch related data in a single query or in batches."
                        />
                    </ListItem>
                </List>
                <Typography variant="h4">Where we are and what's next</Typography>
                <Typography>
                    The new system has been running for employer side of Indeed for a while and it
                    is reliable, performant and proven easy to adapt across a few reorg. Teams are
                    working to refine some of the features, adding capabilities and pushing for
                    broader audience across the company.
                </Typography>
                <Typography variant="caption" component="div">
                    *Illustrations are credited to Indeed colleague.
                </Typography>
            </Container>
        </Box>
    );
};

export default transition(IndeedMicroFE, { leftOffset: '20rem' });
