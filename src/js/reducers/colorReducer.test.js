import * as actionTypes from '../constants/actionTypes'
import reducer from './colorReducer'

const initialState = {
    searchedString: '',
    choosedColor: {
        colorName: '',
        colorHex: ''
    },
    metaData: []
}

describe('color reducer', () => {
    //defulat state
    it('should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    //searchColor
    it('should get action SEARCH_COLOR', () => {
        expect(
            reducer(
                undefined,
                {
                    type: actionTypes.SEARCH_COLOR,
                    payload: ''
                }
            )
        ).toEqual(
            {
                searchedString: '',
                choosedColor: {
                    colorName: '',
                    colorHex: ''
                },
                metaData: []
            }
        )
        expect(
            reducer(
                undefined,
                {
                    type: actionTypes.SEARCH_COLOR,
                    payload: 'someString'
                }
            )
        ).toEqual(
            {
                searchedString: 'someString',
                choosedColor: {
                    colorName: '',
                    colorHex: ''
                },
                metaData: []
            }
        )
        expect(
            reducer(
                undefined,
                {
                    type: actionTypes.SEARCH_COLOR,
                    payload: 'someString'
                }
            )
        ).toEqual(
            {
                searchedString: 'someString',
                choosedColor: {
                    colorName: '',
                    colorHex: ''
                },
                metaData: []
            }
        )
    })

    //getColorsSet
    it('should get action GET_COLORS_SET', () => {
        expect(
            reducer(
                undefined,
                {
                    type: actionTypes.GET_COLORS_SET,
                    payload: [{name: 'abc', hex: '123456'}, {name: 'efgh', hex: 'fedcba'}]
                }
            )
        ).toEqual(
            {
                searchedString: '',
                choosedColor: {
                    colorName: '',
                    colorHex: ''
                },
                metaData: [{name: 'abc', hex: '123456'}, {name: 'efgh', hex: 'fedcba'}]
            }
        )
    })

    //chooseColor
    it('should get action CHOOSE_COLOR', () => {
        expect(
            reducer(
                undefined,
                {
                    type: actionTypes.CHOOSE_COLOR,
                    payload: {colorName: 'green', colorHex: '00ff00'}
                }
            )
        ).toEqual(
            {
                searchedString: '',
                choosedColor: {
                    colorName: 'green',
                    colorHex: '00ff00'
                },
                metaData: []
            }
        )
        expect(
            reducer(
                {
                    searchedString: 'someString',
                    choosedColor: {
                        colorName: '',
                        colorHex: ''
                    },
                    metaData: []
                },
                {
                    type: actionTypes.CHOOSE_COLOR,
                    payload: {colorName: 'green', colorHex: '00ff00'}
                }
            )
        ).toEqual(
            {
                searchedString: '',
                choosedColor: {
                    colorName: 'green',
                    colorHex: '00ff00'
                },
                metaData: []
            }
        )
        expect(
            reducer(
                {
                    searchedString: 'someString',
                    choosedColor: {
                        colorName: '',
                        colorHex: ''
                    },
                    metaData: [{name: 'abc', hex: '123456'}, {name: 'efgh', hex: 'fedcba'}]
                },
                {
                    type: actionTypes.CHOOSE_COLOR,
                    payload: {colorName: 'green', colorHex: '00ff00'}
                }
            )
        ).toEqual(
            {
                searchedString: '',
                choosedColor: {
                    colorName: 'green',
                    colorHex: '00ff00'
                },
                metaData: [{name: 'abc', hex: '123456'}, {name: 'efgh', hex: 'fedcba'}]
            }
        )
    })

    //cleanState
    it('should get action CLEAN_STATE', () => {
        expect(
            reducer(
                undefined,
                {
                    type: actionTypes.CLEAN_STATE,
                }
            )
        ).toEqual(
            {
                searchedString: '',
                choosedColor: {
                    colorName: '',
                    colorHex: ''
                },
                metaData: []
            }
        )
        expect(
            reducer(
                {
                    searchedString: '',
                    choosedColor: {
                        colorName: 'green',
                        colorHex: '00ff00'
                    },
                    metaData: [{name: 'abc', hex: '123456'}, {name: 'efgh', hex: 'fedcba'}]
                },
                {
                    type: actionTypes.CLEAN_STATE,
                }
            )
        ).toEqual(
            {
                searchedString: '',
                choosedColor: {
                    colorName: '',
                    colorHex: ''
                },
                metaData: [{name: 'abc', hex: '123456'}, {name: 'efgh', hex: 'fedcba'}]
            }
        )
        expect(
            reducer(
                {
                    searchedString: 'someString',
                    choosedColor: {
                        colorName: 'green',
                        colorHex: '00ff00'
                    },
                    metaData: [{name: 'abc', hex: '123456'}, {name: 'efgh', hex: 'fedcba'}]
                },
                {
                    type: actionTypes.CLEAN_STATE,
                }
            )
        ).toEqual(
            {
                searchedString: 'someString',
                choosedColor: {
                    colorName: '',
                    colorHex: ''
                },
                metaData: [{name: 'abc', hex: '123456'}, {name: 'efgh', hex: 'fedcba'}]
            }
        )
        expect(
            reducer(
                {
                    searchedString: 'someString',
                    choosedColor: {
                        colorName: 'green',
                        colorHex: '00ff00'
                    },
                    metaData: [{name: 'abc', hex: '123456'}, {name: 'efgh', hex: 'fedcba'}]
                },
                {
                    type: actionTypes.CLEAN_STATE,
                }
            )
        ).not.toEqual(
            {
                searchedString: 'someString',
                choosedColor: {},
                metaData: [{name: 'abc', hex: '123456'}, {name: 'efgh', hex: 'fedcba'}]
            }
        )
    })
})
