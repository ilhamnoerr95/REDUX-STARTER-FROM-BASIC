import * as actions from './actionType'

export function bugAdded(desc){
    return {
        type:actions.BUG_ADDED,
    payload: {
        description: desc
    }
    }
}

export function bugRemoved(id){
    return {
        type:actions.BUG_REMOVED,
        payload:{
            id: 1
        }
    }
}

// ARROW FUNCTION
export const BugAdded = (descr)=>{
    return {
            type:actions.BUG_ADDED,
            payload: {
                description: "bug1"
            }
    }
}

//  ATAU 
export const BugAdded1 = desc => ({
            type:actions.BUG_ADDED,
            payload: {
                description: desc
            }
    }
)

export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
    payload: {
        id
    }
})