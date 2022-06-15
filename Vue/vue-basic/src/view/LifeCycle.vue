<template>
    <div>
        라이프 사이클 훅
    </div>
</template>

<script>
export default {
    created() {
        console.log('created');
    },
    beforeCreate(){
        console.log('beforeCreate');
    },
    beforeMount(){
        console.log('beforeMount');
    },
    mounted(){
        console.log('mounted');
    },
    beforeUpdate(){
        console.log('beforeUpdate');
    },
    updated(){
        console.log('updated');
    },
    activated(){
        console.log('activated');
    },
    deactivated(){
        console.log('deactivated');
    },
    beforeUnmount(){
        console.log('beforeUnmount');
    },
    unmounted(){
        console.log('unmounted');
    },
    errorCaptured(){
        console.log('errorCaptured');
    }
}
</script>

<style>

</style>