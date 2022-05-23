import { createStore } from 'vuex'
import fooModule from '@/modules/foo/store'

const store = createStore({

    modules: {
        foo: fooModule,
    }
})


export default store