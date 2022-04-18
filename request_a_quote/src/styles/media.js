import breakpoints from './breakpoints';

const mediaQuery = (maxWidth) => `@media(max-width: ${maxWidth}px)`;

const { xlarge, large, medium, small } = breakpoints;

const media = {
    xlarge: mediaQuery(xlarge),
    large: mediaQuery(large),
    medium: mediaQuery(medium),
    small: mediaQuery(small),
    custom: mediaQuery,
};

export default media;
