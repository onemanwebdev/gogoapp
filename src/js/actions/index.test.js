import * as actionType from '../constants/actionTypes'
import * as actions from '.'

describe('actions', () => {
    it('should create action with colors payload', () => {
        const colorName = 'red'
        const colorHex = 'ff0000'
        const expectedColorAction = { type: actionType.CHOOSE_COLOR, payload: {colorName, colorHex} }
        expect(actions.chooseColor(colorName, colorHex)).toEqual(expectedColorAction)
    })
    it('should create action with searched string payload', () => {
        const string = 'someString'
        const expectedStringAction = { type: actionType.SEARCH_COLOR, payload: string }
        expect(actions.searchColor(string)).toEqual(expectedStringAction)
    })
    it('should create action with colorSet payload', () => {
        const colorSet = [{name: 'abc', hex: '123456'}, {name: 'efgh', hex: 'fedcba'}]
        const expectedColorSetAction = { type: actionType.GET_COLORS_SET, payload: colorSet }
        expect(actions.getColorsSet(colorSet)).toEqual(expectedColorSetAction)
    })
    it('should creat action without payload (only with type)', () => {
        const expectedCleanAction = { type: actionType.CLEAN_STATE }
        expect(actions.cleanState()).toEqual(expectedCleanAction)
    })
})
