<template>
  <div class="home">
    <h1>Hello World</h1>
    <button @click="goToFoo" class="btn btn-primary">Go To Foo</button>
  </div>
</template>


<script lang="ts">
export default {

  methods:{
    goToFoo(){
      this.$router.push({name:'no-foo'})
    }
  }
}
</script>