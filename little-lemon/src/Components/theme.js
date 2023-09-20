import "@fontsource/markazi-text/400.css";
import "@fontsource/karla/400.css";
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Markazi Text', sans-serif`,
    body: `'Karla', sans-serif`,
  },
})

export default theme