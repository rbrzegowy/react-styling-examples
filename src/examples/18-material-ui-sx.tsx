// Biblioteka MUI pozwala stylować własne elementy zgodnie z szablonem biblioteki - funkcja sx()
import { Button } from '@mui/material'
export function MaterialUiSx() {
  return (
    <Button
      sx={{
        backgroundColor: 'primary.main',
        borderRadius: 2,
        px: 3,
        color: 'white',
        '&:hover': { backgroundColor: 'primary.dark' },
      }}
    >
      Zapisz (sx)
    </Button>
  )
}
