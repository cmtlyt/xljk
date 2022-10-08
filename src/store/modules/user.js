import actions from "../actions/user"
import mutations from "../mutations/user"

const user = {
    namespaced: true,
    state: {
        userInfo: ''
    },
    actions,
    mutations
}

export default user