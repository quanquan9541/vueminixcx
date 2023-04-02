<template>
  <view>
    1234
    <button type="default" @click="click">按钮</button>
  </view>
</template>

<script>
  const db = uniCloud.database();
  export default {
    data() {
      return {

      }
    },
    methods: {
      async click() {
        const data1 = db.collection('Manufacturer_brand').getTemp();
        const data2 = db.collection('Mcamera')
          .getTemp();
        const data3 = db.collection('Mparameter').getTemp();
        // const data4 = db.collection('Msoc').getTemp();
        const listdata = await db.collection(data1, data2, data3).get()
        console.log(listdata);
      }
    }
  }
</script>

<style>

</style>