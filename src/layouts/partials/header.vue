<template>
	<header>
		{{headerName}}
	</header>
</template>

<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator';

@Component
export default class Header extends Vue {
	private message = 'header';

	get headerName(){
		return this.message;
	}
}
</script>