<template>
    <div class="hello3">{{ greeting }} <span><slot>{{ name }}</slot></span>!</div>
</template>
<script>
export default {
       props: ['name'],
        data() {
            return {
                greeting: 'Hello3'
            }
        }
}
</script>
<style lang="scss" scoped>
  .hello3{
 
    color:aqua;

  }

</style>