<template>
  <div class="home">
<h1 class="text-center">TodoList</h1>
<router-link to="/" class="nav-link" tag="a">Home</router-link>
<router-link to="/about" class="nav-link">About</router-link>

<hr>
<br>
<ListWork></ListWork>
<Prop :ten="author"></Prop>
  </div>
</template>

<script>

import Prop from '../components/prop'
import ListWork from '../components/listWork'
export default {
  name: 'Home',
  data() {
    return {
      author : 'hoa'
    }
  },
  components: {
    Prop,
    ListWork,
  }
}
</script>
