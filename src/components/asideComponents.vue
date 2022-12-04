<template>
  <v-list
      nav
      dense
  >
    <v-list-item-group
        color="blue"
    >
    <v-list-item link v-for="item in itemList" :key="item.id" :to="item.path" :disabled="item.disabled" >
      <v-list-item-icon >
        <v-icon>{{item.icon}}</v-icon>
      </v-list-item-icon>
      <v-list-item-title>
        {{item.title}}
      </v-list-item-title>
    </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: "asideComponents",
  data(){
    return{
      itemList:[
        {
          id:1, //菜单id
          icon:'mdi-home', //菜单图标
          title:'Home', //菜单标题
          path:'main', //菜单路径
          disabled:false, //是否禁用
        },
        {
          id:2,
          icon:'mdi-cloud',
          title:'Cloud',
          path:'', //菜单路径
          disabled:false, //是否禁用
        },
        {
          id:3,
          icon:'mdi-apps',
          title:'Plugin',
          path:'', //菜单路径
          disabled:true, //是否禁用
        },
        {
          id:4,
          icon:'mdi-history',
          title:'History',
          path:'', //菜单路径
          disabled:false, //是否禁用
        },
        {
          id:5,
          icon:'mdi-download',
          title:'Download',
          path:'', //菜单路径
          disabled:true, //是否禁用
        },
        {
          id:6,
          icon:'mdi-cog',
          title:'Settings',
          path:'', //菜单路径
          disabled:false, //是否禁用
        },
      ],
      drawer:true
    }
  },

}
</script>

<style scoped>
.aside {
  width: 100%;
}
</style>