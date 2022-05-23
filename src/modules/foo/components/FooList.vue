<template>
  <div class="entry-list-container">
      <div class="px-2 pt-2">
        <input 
          type="text" 
          placeholder="Buscar entrada"
          class="form-control"
          v-model="term">
      </div>

      <div class="mt-2 d-flex flex-column">
        <button class="btn btn-primary mx-3"
            @click="$router.push({ name: 'foo', params: { id: 'new' } })"
          >
           <i class="fa fa-plus-circle"></i> Nueva entrada
        </button>
      </div>
<!-- 
      <div class="entry-scrollarea">
            <Foo  v-for="foo in fooByTerm"
                    :key="foo.id"
                    :entry="foo"/>
      </div> -->
  </div>
</template>

<script>
// import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'

export default {

  components: {
    // Foo: defineAsyncComponent( () => import('./Foo.vue'))
  },

  computed:{
    ...mapGetters('journal', ['getEntriesByTerm']),

    entriesByTerm(){
      return this.getEntriesByTerm( this.term )
    }
  },
  data(){
    return {
      term: ''
    }
  }
}
</script>

<style scoped>

  .entry-list-container{
    border-right: 1px solid #2c3e50;
    height: calc(100vh - 56px);
  }

  .entry-scrollarea{
    height: calc(100vh - 110px);
    overflow: scroll;
  }
</style>