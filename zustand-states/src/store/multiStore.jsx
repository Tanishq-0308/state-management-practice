import {create} from 'zustand'
import {devtools, persist} from 'zustand/middleware'

const useStore= create((set)=>({
    states:{
        stateIL: '',
        stateEL:''
    },
    setState:(key, value) => set((state)=>({
        states:{
            ...state.states,
            [key]: value,
        }
    }))
}))

// const useMultiStore= create(
//     devtools(
//         persist(useStore,{
//             name:'states',
//         })
//     )
// )

export default useStore;