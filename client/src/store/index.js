import { createStore } from 'vuex'

export default createStore({
  state: {
    //luu tru du lieu
    tacgia : 'hoabeo',
    tong : 0,
    tenCongViec : '',
            noiDung : '',
            list : [ ]
  },
  mutations: {
    TINH_TONG(state, {a,b}){
      return state.tong = parseInt(a) + parseInt(b)
    }
  },
  actions: {
    tinhtong({commit}, {a,b}){
      commit('TINH_TONG', {a,b})
    },
    themcongviec(){
      api.post('add', {ten : this.tenCongViec, noidung : this.noiDung})
      this.tenCongViec = ''
      this.noiDung = ''
      this.laycongviec()
  },  
  }
})
