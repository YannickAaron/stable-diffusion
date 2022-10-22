import InvokeButton from './InvokeButton';
import CancelButton from './CancelButton';
import AddToQueueButton from './AddToQueueButton';
import { Grid, GridItem } from '@chakra-ui/react'

/**
 * Buttons to start and cancel image generation.
 */
const ProcessButtons = () => {
  return (
    <div className="process-buttons">
      {/* Grid with 3 columns  where InvokeButton takes up 1/2 of the space */}
      <Grid templateColumns="repeat(6, 1fr)" gap={2}>
        <GridItem colSpan={4}>
          <InvokeButton />
        </GridItem>
        <GridItem colSpan={1}>
        <AddToQueueButton />
        </GridItem>
        <GridItem colSpan={1}>
          <CancelButton />
        </GridItem>
      </Grid>

    </div>
  );
}

export default ProcessButtons;
