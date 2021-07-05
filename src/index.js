import store from './store';
import {bugAdded, bugRemoved, bugResolved} from './actionCreator'

const unsubscribe = store.subscribe(()=>{
     console.log("Store Changed!", store.getState())
})


store.dispatch(bugAdded("bobo boi"))
store.dispatch(bugResolved(1));
// unsubscribe()

// store.dispatch(bugRemoved())

console.log(store.getState())