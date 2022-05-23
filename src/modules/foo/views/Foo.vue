<template>
    <template v-if="entry" >
        <div 
            class="entry-title d-flex justify-content-between p-2">

            <div>
                <span class="text-success fs-3 fw-bold">{{ day }}</span>
                <span class="mx-1 fs-3">{{ month }}</span>
                <span class="mx-2 fs-4 fw-light">{{yearDay}}</span>
            </div>

            <div>
                <input type="file"
                        @change="onSelectedImage"
                        ref="imageSelector"
                        v-show="false"
                        accept="image/png, image/jpeg"
                    >

                <button 
                    v-if="entry.id"
                    class="btn btn-danger mx-2"
                    @click="onDeleteEntry">
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>

                <button class="btn btn-primary"
                        @click="onSelectImage">
                    Subir foto
                    <i class="fa fa-upload"></i>
                </button>
            </div>

        </div>


        <hr>

        <div class="d-flex flex-column px-3 h-75">
            <textarea placeholder="¿Qué sucedió hoy?" v-model="entry.text"></textarea>
        </div>


        
        <img v-if="entry.picture && !localImage" 
        :src="entry.picture" 
         class="img-thumbnail"
         alt="entry-picture">

        <img v-if="localImage" :src="localImage" 
         class="img-thumbnail"
         alt="entry-picture">


    </template>

    
</template>

<script>
import { mapGetters, mapActions } from 'vuex';


export default {
    name:'EntryView',
    props: {
        id:{
            type: String,
            required: true
        }
    },
   

    data(){
        return {
            entry: null,
            localImage: null,
            file: null,
        }
    },

    computed:{
        ...mapGetters('foo', ['getFooById']),

    },
    methods:{
        ...mapActions('foo', ['updateFoo', 'createFoo', 'deleteFoo']),

        async saveEntry(){


            if( this.entry.id ){

                // Actualizar
                await this.updateEntry( this.entry )

            } else {

                // crear nueva entrada
               const id = await this.createEntry( this.entry )

               this.$router.push( { name: 'entry', params: { id } } )


            }
            this.file = null
        },

        async onDeleteEntry(){
                
                    await this.deleteEntry( this.entry.id )
                    this.$router.push( { name: 'no-entry' } )
         

             
        },

        loadEntry(){

            let entry

            if( this.id === 'new') {

                entry = {
                    text: '',
                    date: new Date().getTime()
                }
                
            } else {

                entry = this.getEntryById( this.id )
                if( !entry ) return this.$router.push({ name: 'no-entry'})

            }

            this.entry = entry
        },
        onSelectedImage( event ){

            const file = event.target.files[0]
            if( !file ){
                this.localImage = null
                this.file = null
                return
            }
            this.file = file

            const fr = new FileReader()

            fr.onload = () => this.localImage = fr.result
            fr.readAsDataURL( file )


        },
        onSelectImage(){
            this.$refs.imageSelector.click()
        }
    },
    created(){
        this.loadEntry()
    },

    watch:{
        id( ){
            this.loadEntry()
        }
    }

}
</script>

<style scoped>

textarea{
    font-size: 20px;
    border: none;
    height: 100%;

}
textarea:focus{
       outline: none; 

}


</style>