<template>
    <div class="container-fluid bg-light">
        <div class="row">
         <div class="col-10 offset-1">
           {{$route.params.author}}
           {{$route.params.title}}
         </div>
        </div>
    </div>
</template>
<script>
export default{
    name:"adcontent",
    data() {
        return {
            
        }
    }
}
</script>
<style scoped>
.container-fluid{
    min-width: 700px;
}
</style>