import { ADD_SEED } from '../actions/actions'

function seed(state, action) {
  switch (action.type) {

    case ADD_SEED:
      return {
        id: action.id,
        text: action.identity,
      }

    default:
      return state
  }
}

function seeds(state = [], action) {
  switch (action.type) {

    case ADD_SEED:
      return [
        ...state,
        seed(undefined, action)
      ]

    default:
      return state
  }
}

export default seeds
