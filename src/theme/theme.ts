import { extendTheme } from "@chakra-ui/react";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/poppins/700.css";

export const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});
