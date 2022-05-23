import { IFooState } from './state';



// export const myGetter = (state) => {
    // return state.something
// }



export const getFoosByTerm = ( state:IFooState ) =>  ( term = '' ) => {

    if( term.length === 0 ) return state.foos


    return state.foos.filter( foo => foo.bar.toLowerCase().includes( term.toLowerCase() ) )
}


export const getEntryById = ( state:IFooState ) => ( id:number ) => {

    const foo = state.foos.find( foo => foo.id === id )

    if( !foo ) return

    return {...foo}
}   
