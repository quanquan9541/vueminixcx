<template>
  <view>
    <uni-easyinput v-model="item.name" placeholder="name" />
    <uni-easyinput v-model="item.phone" placeholder="phone" />
    <button type="default" @click="sumbit">提交</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        item: {
          name: "",
          phone: ""
        }

      }
    },
    methods: {
      sumbit() {
        const db = uniCloud.database();
        db.collection("contacts").add(this.item).then(e => {
          close.log(e);
        })
      }
    }
  }
</script>

<style>

</style>
