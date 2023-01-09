<template>
	<view class="add">
		<unicloud-db ref="udb" :where="where" v-slot:default="{data, loading, error, options}"
			collection="guestbook,uni-id-users" field="_id,text,state,user_id.nickname,user_id._id,user_id.avatar_file">
			<view v-if="error">{{error.message}}</view>
			<view v-else>
				<view v-for="(item,index) in data" :key="index" class="item">
					<view class="main">
						<cloud-image class="img" :src="item.user_id[0].avatar_file.url"></cloud-image>
						<view class="right">
							<view class="nickname">{{item.user_id[0].nickname}}</view>
							<view class="text">{{item.text}}</view>
						</view>
						<text @click="changeState(item)">{{item.state?'审核通过':'审核中'}}</text>
					</view>
				</view>
			</view>
		</unicloud-db>
		<view class="submit-box">
			<input class="input-box" v-model="text" />
			<button @click="text?send():''" class="btn" :class="{active:text}">发送</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: null
			}
		},
		computed:{
			where(){
				if(this.uniIDHasRole('AUDITOR')){
					return ''
				}else{
					return 'state == true || user_id._id == $cloudEnv_uid'
				}
			}
		},
		methods: {
			async send() {
				const db = uniCloud.database();
				const guestbookTable = db.collection('guestbook');
				let res = await guestbookTable.add({
					"text": this.text,
					"state": false,
				})
				if(!res.result.code){
					uni.showToast({
						title:'发送成功！',
						icon:'none'
					})
					this.text = '';
					this.$refs.udb.refresh();
				}
			},
			changeState(item){
				this.$refs.udb.update(item._id,{state:!item.state},{
					complete:e=>{
						console.log(e)
						this.$refs.udb.refresh();
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.add {
		padding: 20rpx;
		box-sizing: border-box;

		.main {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 40rpx;
			padding-bottom: 20rpx;
			border-bottom: 1px solid #ccc;

			.img {
				width: 200rpx;
				height: 200rpx;
				margin-right: 20rpx;
			}

			.right {
				flex: 1;
				color: #333;

				.nickname {
					font-size: 28rpx;
					margin-bottom: 10rpx;
				}

				.text {
					font-size: 30rpx;
				}
			}
		}

		.submit-box {
			position: absolute;
			bottom: 10rpx;
			display: flex;
			width: calc(100vw - 40rpx);

			.input-box {
				background-color: #f7f7f7;
				height: 80rpx;
				flex: 1;
			}

			.btn {
				height: 80rpx;
				width: 140rpx;
				font-size: 32rpx;
				line-height: 80rpx;
			}
		}
	}
</style>
