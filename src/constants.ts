export const LINKEDIN = 'https://www.linkedin.com/in/tim-chu-980881a4';

export const GITHUB = 'https://github.com/tic30';

export const RESUME = 'https://drive.google.com/file/d/1bXDjJxRLXtQFc9ffnoZv-sCnxcFigy1Q';

export const globalStyle = {
    h1: {
        fontWeight: 'bold',
    },
    h2: {
        fontWeight: 'bold',
    },
};

export const customColors = {
    orange: '#e85827',
    blue: '#1565c0',
};

export const indeedProjects = [
    {
        name: 'microfe',
        title: 'Micro Frontend @ Indeed',
        description:
            'Design, construct and migrate to Webpack 5 based micro frontend, with GraphQL fragment first architecture.',
        btnText: 'Read more',
        link: '#/projects/microfe',
        img: '/imgs/indeed-oh.png',
        repColor: customColors.orange,
    },
    {
        name: 'storybook',
        title: 'Storybook and Chromatic for large org',
        description:
            'Comprehensive visual testing and documentation of UI components using Storybook and Chromatic can work efficiently across teams in large organizations.',
        link: '#/projects/storybook',
        img: '/imgs/storybook.png',
        repColor: customColors.blue,
    },
];
