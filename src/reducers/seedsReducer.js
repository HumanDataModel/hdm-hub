import { INIT_SEEDS, NEW_SEED } from '../actions/actions'

/*function seed(state, action) {
  switch (action.type) {

    case ADD_SEED:
      return {
        id: action.id,
        text: action.identity,
      }

    default:
      return state
  }
}*/

const initalState = [
  /*
  {
    ownername: "bob",
    identity: "bob@hd",
    companionUUID: "FB694B90-F49E-4597-8306-171BBA78F844",
    facebookID: "102684690214746",
    devices: [
      { uuid: "5BF2E050-4730-46DE-B6A7-2C8BE4D9FA36", identity: "bob@iphoneSE" },
      { uuid: "FB694B90-F49E-4597-8306-171BBA78F844", identity: "bob@mac" }
    ]
  }, {
    ownername: "alice",
    identity: "alice@hd",
    companionUUID: "717F860E-F0E6-4C93-A4E3-CC724D27E05E",
    facebookID: "119560198524790",
    devices: [
      { uuid: "717F860E-F0E6-4C93-A4E3-CC724D27E05E", identity: "alice@iphone" },
      { uuid: "8B034F7B-FA9B-540F-ACF3-88C0CA70C84F", identity: "alice@ibeacon" }
    ]
  }, {
    ownername: "nkm",
    identity: "nkm@hd",
    companionUUID: "717F860E-F0E6-4C93-A4E3-CC724D27E05B",
    facebookID: "120144918465781",
    devices: [
      { uuid: "717F860E-F0E6-4C93-A4E3-CC724D27E05E", identity: "nkm@iphone5" }
    ]
  }
  */
]


/*
const generateId = () => Number((Math.random() * 1000000).toFixed(0))

export const seedCreation = (content) => {
  return {
    type: 'NEW_SEED',
    data: {
      ownername: "nkm",
      identity: "nkm@hd",
      companionUUID: "717F860E-F0E6-4C93-A4E3-CC724D27E05B",
      facebookID: "120144918465781",
      id: generateId()
    }
  }
}*/

function seedsReducer(state = initalState, action) {
  switch (action.type) {

    case INIT_SEEDS:
      return action.data

    case NEW_SEED:
      return [...state, action.data]

    /*case ADD_SEED:
      return [
        ...state,
        seed(undefined, action)
      ]*/

    default:
      return state
  }
}

export default seedsReducer
