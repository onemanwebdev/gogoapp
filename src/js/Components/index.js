import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import DataList from './DataList'
import { endpoint } from '../constants/config'
import { setBackgroundColor } from '../services/setBackgroundColor'
import { searchColor, getColorsSet, cleanState } from '../actions'

class App extends Component {
    constructor(props) {
        super(props)
    }

    setColor = () => {
        setBackgroundColor(this.props.selectedColor.colorHex)
        this.props.dispatch(cleanState())
    }

    componentDidMount() {
        axios.get(endpoint).then(response => this.props.fetchColors(response.data))
    }

    componentWillReceiveProps(nextProps, nextState) {
        this.refs.input.value = nextProps.selectedColor.colorName
    }

    render() {
        return (
            <div className="form form__panel">
                <input
                    ref="input"
                    className="form form__input"
                    list="colors"
                    type="text"
                    placeholder="Find your color!"
                    onInput={() => this.props.getInput(this.refs.input.value)}
                />
                <DataList />
                <button className={`form form__button form__button--${this.props.selectedColor.colorHex !== "" ? "active" : "disabled"}`} onClick={this.props.selectedColor.colorHex ? this.setColor : void(0)}>Accept</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedColor: state.backgroundColor.choosedColor
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getInput: value => {
            dispatch(searchColor(value))
        },
        fetchColors: colorSet => {
            dispatch(getColorsSet(colorSet))
        },
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
