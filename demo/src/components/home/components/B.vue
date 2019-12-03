<template>
    <div class="Bhome">
        BBB
    </div>
</template>

<script>
    export default {
        name: 'Bhome',
        data(){
            return{
                id:''
            }
        },
       created(){
        //   this.id=this.$route.query.id;
           this.id=this.$route.params.id;
           window.console.log(this.id)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
