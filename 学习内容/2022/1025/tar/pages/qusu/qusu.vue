<template>
  <view>
    提取三个数字
    <button @click="shuzu">按钮</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      shuzu() {
        let arrss = ["1", "2", "3"]
        let arr1 = []
        for (let i = 0; i < 3; i++) {
          let num = String(Math.floor(Math.random() * 2))
          // let texr = arrss[num]
          // arrss.splice(num, 1)
          arr1.push(num)
        }
        console.log(arr1)
      }
    }
  }
</script>

<style>

</style>
