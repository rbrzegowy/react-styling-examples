// MUI - Material UI - biblioteka komponentów
// https://mui.com/

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
} from '@mui/material'
export function MaterialUiCard({
  name = 'MaterialUI Card',
  price = 199,
}: {
  name?: string
  price?: number
}) {
  return (
    <Card sx={{ maxWidth: 350, p: 1 }}>
      <CardContent>
        <Chip label="Promocja" color="success" size="small" />
        <Typography variant="h5" sx={{ mt: 2 }}>
          {name}
        </Typography>
        <Typography color="text.secondary">Cena: {price} zł</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Kup teraz</Button>
        <Button variant="outlined">Szczegóły</Button>
      </CardActions>
    </Card>
  )
}
