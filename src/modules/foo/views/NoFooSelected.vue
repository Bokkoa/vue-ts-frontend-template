<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">No hay nada seleccionado</h1>
    </div>

</template>


<script>
export default {
    name: 'NoEntrySelected',
  
    methods:{
        createNewEntry(){
            this.$router.push({ name: 'entry', params: { id: 'new' } })
        }
    }
}
</script>

<style  scoped>
    div{
        height: 100%;
    }
</style>