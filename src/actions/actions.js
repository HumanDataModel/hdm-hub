export const ADD_SEED = 'ADD_SEED'

let nextSeedId = 0;

export function addSeed(identity) {
   return {
      type: ADD_SEED,
      id: nextSeedId++,
      identity
   };
}
