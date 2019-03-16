export default (state = {}, { type , data }) => {
    switch (type) {
        case "RES_ASYNC":
            return {
                ...state,
                data
            }
        default:
            return state;
    }
}