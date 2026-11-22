// MUI - Szablony
import { createTheme, ThemeProvider, CssBaseline, Button } from '@mui/material'
const theme = createTheme({
  palette: { primary: { main: '#f3c017' } },
  shape: { borderRadius: 6 },
})
export function MaterialUiTheme() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button variant="contained">Zapisz (ThemeProvider)</Button>
    </ThemeProvider>
  )
}
