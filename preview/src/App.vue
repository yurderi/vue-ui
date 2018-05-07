<template>
    <div id="app" class="column center-y">
        <img src="./assets/logo.png">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="less">
img {
    margin: 25px 0;
}
</style>