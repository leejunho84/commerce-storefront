<template>
	<div class="alert-wrapper" v-if="status.contents !== null">
		<div class="container">
			<div class="header" v-html="status.title"></div>
			<div class="contents" v-html="status.contents"></div>
			<div class="footer">
				<button class="confirm" @click="confirm">확인</button>
				<button class="cancel" v-if="status.type === 'confirm'" @click="cancel">취소</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {Vue, Component, Getter, Mutation} from 'nuxt-property-decorator';
import Alerts from '../store/alert';

@Component({
	name:'alert'
})
export default class Alert extends Vue {
	@Getter('alert/status') status;
	@Mutation('alert/changeStatus') changeStatus;

	mounted(){
		this.changeStatus({
			type:'alert',
			title:'Title',
			contents:'얼럿 입니다.<br/>확인을 클릭해주세요.'
		});
	}

	confirm(){
		this.$emit('confirm');
		this.changeStatus({title:null, contents:null});
	}
	
	cancel(){
		this.changeStatus({title:null, contents:null});
	}
}
</script>

<style lang="scss">
.alert-wrapper {
	position:fixed;
	top:0;
	bottom:0;
	left:0;
	right:0;
	background:rgba(0,0,0,0.3);
	text-align:center;

	&:before {
		display:inline-block;
		content:'';
		height:100%;
		vertical-align:middle;
	}

	.container {
		overflow:hidden;
		display:inline-block;
		width:80%;
		max-width:320px;
		margin:0 auto;
		border-radius:9px;
		vertical-align:middle;
		line-height:22px;
		background-color:#fff;
		z-index:100;

		.header {
			padding:10px 20px;
			border-bottom:1px solid #ddd;
			text-align:left;
			font-weight:bold;
		}

		.contents {
			padding:20px;
		}

		.footer {
			display:table;
			width:100%;
			border-top:1px solid #ddd;
		}

		button {
			display:table-cell;			
			border:0;
			padding:14px 0;
			background:none;
			cursor:pointer;
			outline:none;
		}
	}
}
</style>