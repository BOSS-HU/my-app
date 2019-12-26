import React from 'react'
import { Button} from 'antd-mobile'
 class AntdButton extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return (
            <Button type='primary'>primary</Button>
        )
    }
}
let foo = 'bar';
setTimeout(() => foo = 'baz', 500);
export {AntdButton,foo}
console.log(`1+${foo}`)