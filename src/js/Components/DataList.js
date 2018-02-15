import React from 'react'
import { connect } from 'react-redux'
import { chooseColor } from '../actions'

const DataList = ({metaData, searchedString, chooseColor}) => {
    const filteredData = metaData.filter(metaDataElement => metaDataElement.name.includes(searchedString.toLowerCase()))

    return (
        searchedString.length > 1 ?
            <div className="form__color-selector">
                {filteredData.map((color, idx) => {
                    return (
                        <div
                            key={idx}
                            className="form__color-option"
                            data-hex={color.hex}
                            onClick={ev => chooseColor(color.name, color.hex)}
                        >
                            <p>{color.name}</p>
                            <div className="form__color-box" style={{backgroundColor: `#${color.hex}`}}></div>
                        </div>
                    )
                })}
            </div>
        :
            null
    )
}

const mapStateToProps = state => {
    return {
        searchedString: state.backgroundColor.searchedString,
        metaData: state.backgroundColor.metaData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        chooseColor: (colorName, colorHex) => {
            dispatch(chooseColor(colorName, colorHex))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataList)
