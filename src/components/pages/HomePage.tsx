import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';

import GameGrid from '../GameGrid';
import GameHeading from '../GameHeading';
import GenreList from '../GenreList';
import PlatformSelector from '../PlatformSelector';
import SortSelector from '../SortSelector';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr',
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingRight={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
