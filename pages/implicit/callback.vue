<template>
    <div>
        Callback
    </div>
</template>

<script>


export default {
    async created () {
        await this.$auth.handleAuthentication()        
        this.$router.push({
        path: this.$auth.getFromUri()
        })
    }
}
</script>
