import React, { FC } from 'react';

import chakraTheme from 'src/core/chakra/chakraTheme';
import { Box, PortalProps, ChakraProvider as ThemeProvider } from '@chakra-ui/react';
import { BackgroundImages } from 'src/components/BackgroundImages/BackgroundImages';

export const ChakraProvider: FC = ({ children }) => (
  <ThemeProvider theme={chakraTheme}>
    <Box id="react-root-node">
      {children}
      <BackgroundImages />
    </Box>
  </ThemeProvider>
);

// export function getChakraPortalProps(): Pick<PortalProps, 'appendToParentPortal' | 'containerRef'> {
//   return {
//     containerRef: { current: document.querySelector('#react-root-node') },
//   };
// }
