import React from 'react'
import qs from 'qs'
export default class Qs extends React.Component {
    qsFn() {
        const searchObj = qs.parse(window.location.search, { ignoreQueryPrefix: true })
        console.log(searchObj)
        const str = qs.stringify(searchObj)
        console.log(str)
    }
    componentDidMount() {
        this.qsFn()
    }
    render() {
        return (
            <div>qs</div>
        )
    }
}