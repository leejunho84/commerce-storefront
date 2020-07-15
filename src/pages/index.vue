<template>
  <div>
    {{ fullName }}
  </div>
</template>

<script lang='ts'>
import {Vue, Component} from 'nuxt-property-decorator';

@Component({
    name:'index'
})
export default class Index extends Vue {
    private message = 'This is a message';

    get fullName(){
        return this.message;
    }
}
</script>