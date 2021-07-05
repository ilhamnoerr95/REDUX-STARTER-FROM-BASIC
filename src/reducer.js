let lasId= 0;
import * as actions from './actionType'

export default function reducer(state = [], action) {
    // SWITCH CASE
        switch(action.type){
            case actions.BUG_ADDED:
                return [
                    ...state,
                    {
                        id: ++lasId,
                        description: action.payload.description,
                        resolved: false
                    }
                ];  
            case actions.BUG_REMOVED: 
                return state.filter(bug => bug.id !== action.payload.id);
            case actions.BUG_RESOLVED:
                return state.map(bug => 
                    bug.id !== action.payload.id ? bug : {...bug, resolved: true})
        default:
            return state;
        }
        

    //  IF ELSE
    if(action.type === 'bugAdded')
        return [
            ...state,
            {
                id: ++lasId,
                description: action.payload.description,
                resolved: false
            }
        ];
        else if (action.type === 'bugRemoved')
            return state.filter(bug => bug.id !== action.payload.id);
            
        return state;
}