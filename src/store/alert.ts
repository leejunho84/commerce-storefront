import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

interface alert {
	type:string
	title:string|null
	contents:string|null
}

@Module({stateFactory:true})
export default class Alert extends VuexModule {
	type = 'alert';
	title:string|null = null;
	contents:string|null = null;

	@Mutation
	changeStatus({type='alert', title=null, contents=null}){
		this.type = type;
		this.title = title;
		this.contents = contents
	}

	get status(){
		return {
			type:this.type,
			title:this.title,
			contents:this.contents
		}
	}
}