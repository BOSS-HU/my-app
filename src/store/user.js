const initStatus = {
    isLogin:false
}
export default (state=initStatus,action)=>{
    switch (action.type){
        case 'login':
            return {isLogin:true}
        default:
            return state
    }
}