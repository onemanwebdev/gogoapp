import { opacity } from '../constants/config'

export const setBackgroundColor = (hexColor, alfa = opacity ) => {
    const substrLenght = hexColor.length / 3
    const regex = new RegExp(`^([a-f\\d]{${substrLenght}})([a-f\\d]{${substrLenght}})([a-f\\d]{${substrLenght}})$`, 'i')
    const arrayWithHex = regex.exec(hexColor).slice(1,4)
    const arrayWithInt = arrayWithHex.map(arrayElem => substrLenght === 2 ? parseInt(arrayElem, 16) : Math.sqrt(parseInt(arrayElem, 16) - 1))
    arrayWithInt.push(alfa)

    return `rgba(${arrayWithInt.join(',')})`
}
