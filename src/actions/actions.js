import seedsService from "../services/seedsService";

export const INIT_SEEDS = 'INIT_SEEDS'
export const ADD_SEED = 'ADD_SEED'
export const NEW_SEED = 'NEW_SEED'
export const NOTIFY = 'NOTIFY'
export const CLEAR = 'CLEAR'


/*
let nextSeedId = 0;

export function addSeed(identity) {
  return {
    type: ADD_SEED,
    id: nextSeedId++,
    identity
  };
}*/

export const createNewSeed = (seedObject) => {
  return async (dispatch) => {
    console.log('Posting new seed to server')
    try {
      const newSeed = await seedsService.create(seedObject)
      dispatch({
        type: 'NEW_SEED',
        data: newSeed
      })
    } catch (error) {
      const message = 'Sorry, but it seems that: ' + error.message
      console.log(message)
      dispatchNotification(dispatch, message, 5)
    }
  }
}


export const initializeSeeds = () => {
  return async (dispatch) => {
    const seeds = await seedsService.getAll()
    dispatch({
      type: 'INIT_SEEDS',
      data: seeds
    })
  }
}

const dispatchNotification = (dispatch, message, timeInSeconds) => {

  dispatch({
    type: 'NOTIFY',
    message
  })

  setTimeout(() => {
    dispatch({
      type: 'CLEAR',
      message
    })
  }, timeInSeconds * 1000)
}

export const notify = (message, timeInSeconds) => {
  return async (dispatch) => {
    dispatchNotification(dispatch, message, timeInSeconds)
  }
}