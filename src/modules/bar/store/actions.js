
import journalApi from "@/api/journalApi"

// export const myAction = async ({ commit }) => {


// }


export const loadEntries = async ( { commit } ) => {

    const { data } = await journalApi.get('/entries.json')

    if(!data){
        commit('setEntries', [])
        return 
    }

    const entries = []

    for( let id of Object.keys( data )){
        entries.push({
            id,
            ...data[id]
        })
    }

    // utilizando la mutación
    commit('setEntries', entries)
}

export const updateEntry = async ( { commit }, entry ) => { 

    const { date, picture, text } = entry; 
    const dataToSave = {
        date,
        picture,
        text
    }

    const resp = await journalApi.put(`/entries/${entry.id}.json`, dataToSave)
    console.log(resp)

    dataToSave.id = entry.id
    
    commit('updateEntry', {...dataToSave})


}


export const createEntry = async ( { commit }, entry ) => {

    const { date, text, picture } = entry

    const dataToSave = {
        date, 
        text, 
        picture
    }

    const { data } = await journalApi.post(`/entries.json`, dataToSave)

    dataToSave.id = data.name 

    commit('addEntry', dataToSave)

    return data.name
}


export const deleteEntry = async ({ commit }, id) => {

    const resp = await journalApi.delete(`/entries/${id}.json`)

    console.log(resp)

    commit('deleteEntry', id)
}