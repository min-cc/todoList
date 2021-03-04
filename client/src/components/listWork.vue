<template> 
    <div>
        <!-- <p>danh sach cong viec</p>
        <p v-for="(item,index) in name" :key="index">ten {{index+1}} : {{item}}</p>
        <p>tuoi :{{age}}</p>
        <button @click="tangtuoi">tang tuoi</button>
        <button @click="age--">giam tuoi</button>
        <br>
        <br>
        <p v-for="(item,index) in list" :key="index">ten {{index}} : {{item.name}} - tuoi : {{item.age}}</p> -->
        <div class="container">
            <h4>Ten cong viec :</h4>
            <br>
        <input v-model="tenCongViec" type="text" class="form-control">
        <br>
        <h4>Noi dung :</h4>
        <br>
        <input v-model="noiDung" type="text" class="form-control">
        <br>
        <br>
        <button class="btn btn-success" @click="themcongviec">Them</button>
        <br>
        <br>
        
        <div>
            <hr>
            <br>
            <p v-for="(item,index) in list" :key="index"> Ten {{index.ten}} : {{item.ten}} - Noi dung {{index.noidung}} : {{item.noidung}} </p>
            <br>
            <hr>
            
        </div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Ten</th>
      <th scope="col">Noi dung</th>
      <th scope="col">#</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in list" :key="index">
     <td>{{item.ten}}</td>
     <td>{{item.noidung}}</td>
     <td>
         <button class="btn btn-danger" @click="xoacongviec(item._id)">Xoa</button>
     </td>
    </tr>
  </tbody>
</table>
        </div>
        

    </div>
</template>
<script>
import api from '../services/callApi'
import {mapActions} from 'vuex'
export default {
    data() {
        return {
            // name : ['hoa','khanh','pup'],
            // age : 23,
            // list : [
            //     {
            //         name : 'khanh',
            //         age : 12
            //     },
            //      {
            //         name : 'hoa',
            //         age : 21
            //     },
            //      {
            //         name : 'pup',
            //         age : 13
            //     }
            // ]
            tenCongViec : '',
            noiDung : '',
            list : [ ]
        }
    },

    methods: {
    //     tangtuoi(){
    //         this.age ++
    //         this.name.push('nguoi moi')
    //    }
            themcongviec(){
                api.post('add', {ten : this.tenCongViec, noidung : this.noiDung})
                this.tenCongViec = ''
                this.noiDung = ''
                this.laycongviec()
            },
            async laycongviec(){
                this.list = (await api.get('/all')).data
            },
            async xoacongviec(id){
                await api.delete(`/xoacv/${id}`)
                this.laycongviec()
            },
            
    },
    mounted() {
        this.laycongviec()
    }
   
}
</script>
<style lang="">
    
</style>