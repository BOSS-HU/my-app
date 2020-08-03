import React from 'react'
export const UserContext = React.createContext({
    user: {
        sex: "male-default",
        name: "Mike-default",
        age: 22
    }
})