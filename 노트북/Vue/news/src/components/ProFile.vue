<template>
    <div class="wrap">
        <div>
            <span class="material-symbols-outlined">person</span>
        </div>
        <div>
            <p>id : {{ userInfo.id }}</p>
            <!-- <p>karma : {{ userInfo.karma }}</p> -->
            <!-- <p>created : {{ userInfo.created }}</p> -->
        </div>
    </div>
</template>

<script>
export default {
    props : ['userInfo']
}
</script>

<style scoped>
.material-symbols-outlined {font-size: 50px;}
.wrap{display: flex; align-items: center;}
.wrap div:nth-child(1){padding: 10px;}
.wrap div:nth-child(2) p:not(:last-child){margin-bottom: 5px;}
</style>