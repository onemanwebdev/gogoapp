import * as actionType from '../constants/actionTypes'

export const searchColor = (searchedString) => {
    return {
        type: actionType.SEARCH_COLOR,
        payload: searchedString
    }
}

export const getColorsSet = (colorSet) => {
    return {
        type: actionType.GET_COLORS_SET,
        payload: colorSet
    }
}

export const chooseColor = (colorName, colorHex) => {
    return {
        type: actionType.CHOOSE_COLOR,
        payload: {
            colorName,
            colorHex,
        }
    }
}

export const cleanState = () => {
    return {
        type: actionType.CLEAN_STATE
    }
}
