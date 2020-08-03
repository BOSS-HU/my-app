import React, { useState, useEffect } from 'react'
export default function Example() {
    const [count, setCount] = useState(0)
    function changeCount() {
        setCount(count + 1)
    }
    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={changeCount}>
                click me
            </button>
        </div>
    )
}