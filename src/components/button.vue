<template>
	<button @click.prevent="clicked">
		<slot />
	</button>
</template>
<script lang="ts">
import {Vue, Component, Prop, Emit} from 'nuxt-property-decorator';

@Component({
	name:'button'
})
export default class Button extends Vue {
	private index = 0;

	@Emit('clicked')
	clicked(e:any){
		return this.index += 1;
	}
}
</script>