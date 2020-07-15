<template>
	<footer>
		<Alert />
	</footer>
</template>

<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator';

import Alert from '../../components/alert.vue';

@Component({
	components:{Alert}
})
export default class Footer extends Vue {
	private message = 'footer';

	get footerName(){
		return this.message;
	}
}
</script>