import * as actionTypes from '../constants/userinfo'

export function update(data) {
    console.log("actionTypes.USERINFO_UPDATE")
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}