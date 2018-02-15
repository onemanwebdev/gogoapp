import { opacity } from '../constants/config'

export const setBackgroundColor = (hexColor) => {
    const arrayWithHex = [];

    hexColor.length === 3 ?
        arrayWithHex.push(hexColor.slice(0,1).concat(hexColor.slice(0,1)), hexColor.slice(1,2).concat(hexColor.slice(1,2)), hexColor.slice(2).concat(hexColor.slice(2)))
    :
        arrayWithHex.push(hexColor.slice(0,2), hexColor.slice(2,4), hexColor.slice(4))

    const arrayWithInt = arrayWithHex.map(arrayElem => parseInt(arrayElem, 16))
    arrayWithInt.push(opacity)

    document.body.style.backgroundColor = `rgba(${arrayWithInt[0]}, ${arrayWithInt[1]}, ${arrayWithInt[2]}, ${arrayWithInt[3]})`
}
