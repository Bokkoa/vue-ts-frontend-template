import { createStore } from 'vuex'
import authModule from '../modules/auth/store'
import journalModule from '../modules/daybook/store/journal'

const store = createStore({

    modules: {
        journal: journalModule,
        auth: authModule
    }
})


export default store