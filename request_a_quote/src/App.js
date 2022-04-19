import MainPages from 'pages/MainPages';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <MainPages />
            </ThemeProvider>
        </>
    );
}

export default App;
