import { IFooState } from './state';
import { IFoo } from '../models/foo';


// export const myAction = (state) => {

// }

export const setFoos = ( state:IFooState, foos:IFoo[] ) => {

    state.foos = [...state.foos, ...foos]
    state.isLoading = false

}

export const updateFoo = ( state:IFooState, foo:IFoo ) => {

    console.log({foo})
    const idx = state.foos.map( f => f.id ).indexOf( foo.id )

    console.log({idx})
    state.foos[idx] = foo
}

export const addEntry = ( state:IFooState, newFoo:IFoo ) => {

    state.foos = [ newFoo, ...state.foos ]

}


export const deleteEntry = ( state:IFooState, id:number ) => {

    state.foos = state.foos.filter( foo => foo.id !== id)
}

export const clearEntries = ( state:IFooState ) => {

    state.foos = []
}