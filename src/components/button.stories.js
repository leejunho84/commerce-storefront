import {storiesOf} from '@storybook/vue';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import ButtonComponent from './button.vue';

const actionData = {
	onClick:action('onClick')
}

storiesOf('Button', module)
	.add('default', () => ({
		components:{ButtonComponent},
		template:`<button-component @clicked="onClick">default</button-component>`,
		methods:actionData
	}))
	.add('label', () => ({
		components:{ButtonComponent},
		template:`<button-component @clicked="onClick">label</button-component>`,
		methods:actionData
	}));