

const set_data = (data) => {
    return (dispatch) => {
        console.log('SET DATA FUNCTION IS RUNNING PROPERLY...');
        dispatch({type: 'SETDATA', data: data})
    }
}


export{
    set_data
}