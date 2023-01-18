<template>

  <view>
    <view v-for="item in data">
      <view>{{item}}</view>
    </view>
    <view>{{data}}</view>
    <u--form :model="form" :rules='rules' ref="uForm">
      <u-form-item label="姓名" prop="name">
        <u-input v-model="form.name" />
      </u-form-item>
    </u--form>
    <u-button @click="submit">提交</u-button>
    <u-button @click="post">按钮</u-button>

  </view>
</template>

<script>
  export default {
    data() {
      return {
        data: [],
        form: {
          name: '',
          type: 0
        },
        rules: {
          name: [{
            required: true,
            message: '请输入姓名',
            trigger: ['blur', 'change']
          }]
        }
      };
    },
    methods: {
      submit() {
        this.$refs.uForm.validate().then(res => {
          console.log(res);
          // this.data = this.form.name
          this.push()
        }).catch(errors => {
          console.log(errors);
        })
      },
      push() {
        this.data.push({
          ...this.form
        })
        this.form.name = ''
      }
    },
  };
</script>

<style lang="scss">

</style>
