



// export const myAction = (state) => {

// }

export const setEntries = ( state, entries ) => {

    state.entries = [...state.entries, ...entries]
    state.isLoading = false

}

export const updateEntry = ( state, entry ) => {

    console.log({entry})
    const idx = state.entries.map( e => e.id ).indexOf( entry.id )

    console.log({idx})
    state.entries[idx] = entry
}

export const addEntry = ( state, newEntry ) => {

    state.entries = [ newEntry, ...state.entries ]

}


export const deleteEntry = ( state, id ) => {

    state.entries = state.entries.filter( entry => entry.id !== id)
}

export const clearEntries = ( state ) => {

    state.entries = []
}