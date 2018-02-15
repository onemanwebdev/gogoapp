import * as actionTypes from '../constants/actionTypes'

const initialState = {
    searchedString: '',
    choosedColor: {
        colorName: '',
        colorHex: ''
    },
    metaData: []
}

const backgroundColor = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SEARCH_COLOR:
            return {
                ...state,
                searchedString: action.payload
            }
        case actionTypes.GET_COLORS_SET:
            return {
                ...state,
                metaData: action.payload.slice()
            }
        case actionTypes.CHOOSE_COLOR:
            return {
                ...state,
                choosedColor: {...action.payload},
                searchedString: ''
            }
        case actionTypes.CLEAN_STATE:
            return {
                ...state,
                choosedColor: {
                    ...initialState.choosedColor
                }
            }
    }
    return state
}

export default backgroundColor
