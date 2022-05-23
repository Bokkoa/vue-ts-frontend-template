
import {fooApi} from "@/api"
import { IFoo, IFooFormValues } from '../models/foo';

// export const myAction = async ({ commit }) => {


// }


export const loadFoos = async ( { commit }:any ) => {

    const foosFromApi = await fooApi.getAll()

    if(!foosFromApi){
        commit('setFoos', [])
        return 
    }

    const foos = []

    for( let id of Object.keys( foosFromApi )){
        foos.push({
            id,
            ...foosFromApi
        })
    }

    // utilizando la mutación
    commit('setFoos', foos)
}

export const updateFoo = async ( { commit }:any, foo:IFooFormValues ) => { 

    const { bar } = foo; 
    const dataToSave: IFooFormValues = {
        bar,
    }

    const resp = await fooApi.put(foo.id!!, dataToSave)
    console.log(resp)

    dataToSave.id = foo.id
    
    commit('updateFoo', {...dataToSave})


}


export const createFoo = async ( { commit }:any, foo:IFooFormValues ) => {

    const { bar } = foo

    const dataToSave:IFooFormValues = {
        bar
    }

    const storedFoo = await fooApi.post(dataToSave)

    dataToSave.id = storedFoo.id 

    commit('addFoo', dataToSave)

    return foo.bar
}


export const deleteFoo = async ({ commit }:any, id:number) => {

    const foo = await fooApi.delete(id)

    console.log(foo)

    commit('deleteFoo', id)
}