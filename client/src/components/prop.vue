<template >
    <div>
        <div class="container"><h3> tac gia : {{ten}}</h3> 
       <h1>May tinh</h1>
       <div class="col-3">
           <input type="text" v-model="a"> +
       </div>
       <div class="col-3">
           <input type="text" v-model="b"> =
       </div>
       <div class="col-3">{{$store.state.tong}}</div>
        <div class="col-3"><button @click="tinhtong({a, b})">tinh</button></div>
        </div>
       
       
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    props : ['ten'],
    data() {
        return {
            a : 0,
            b: 0
        }
    },
    methods: {
        ...mapActions(['tinhtong'])
    },
}
</script>
<style lang="">
    
</style>