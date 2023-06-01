// Helper function to easy get access to the context → to "consume" the context.

import { useContext } from 'react';
import { WorkoutsContext } from '../context/WorkoutContext';

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

    if (!context) {
        throw new Error('useWorkoutsContext must be used inside a WorkoutsContextProvider')
    }

  return context
};
