import { useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import WalletTemplate from "./components/templates/WalletTemplate";
import { darkTheme, lightTheme } from "./styles/theme/theme";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.background};
  transition: 0.3s;
`
function App() {
  const theme = useSelector((state: any) => state.theme)
  return (
    <ThemeProvider theme={theme.isDark ? darkTheme : lightTheme}>
      <Container className="App">
        <WalletTemplate />
      </Container>
    </ThemeProvider>
  );
}

export default App;
