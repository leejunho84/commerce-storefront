<template>
	<section>
		<Header />
		<nuxt />
		<Footer />
	</section>
</template>

<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator';

import Header from './partials/header.vue';
import Footer from './partials/footer.vue';

@Component({
	components:{
		Header,
		Footer
	}
})
export default class Default extends Vue {
	created(){}
	mounted(){}
	updated(){}
	destroyed(){}
}
</script>