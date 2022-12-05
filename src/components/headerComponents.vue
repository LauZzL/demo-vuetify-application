<template>
  <div style="width: 100%" class="headerBar">
    <img slot="logo"
         width="136"
         class="logo"
         src="https://www.tencent.com/img/index/menu_logo_hover.png"
         alt="logo">
    <div class="right-content">
      <v-btn icon v-for="item in controlBtnList" :key="item.id" :disabled="item.disabled" @click="item.click()" :to="item.path">
        <v-icon>{{item.icon}}</v-icon>
      </v-btn>
    </div>
  </div>

</template>

<script>

const { ipcRenderer: ipc } = window.require("electron");

export default {
  name: "headerComponents",
  data(){
    return {
      controlBtnList: [
        {
          id: 1,
          icon: 'mdi-minus',
          title: '最小化',
          click: function (){
            ipc.send('window-min');
          },
          disabled: false,
          path: '',
        },
        {
          id: 2,
          icon: 'mdi-checkbox-blank-outline',
          title: '最大化',
          click: function (){
            ipc.send('window-max');
          },
          disabled: true,
          path: '',
        },
        {
          id: 3,
          icon: 'mdi-close',
          title: '关闭',
          click: function (){
            ipc.send('window-close');
          },
          disabled: false,
          path: '',
        },
      ]
    }
  }
}
</script>

<style scoped>
.logo {
  margin: 20px;
}
.right-content {
  float: right;
  margin-top: 10px;
}
.headerBar {
  -webkit-app-region: drag;
}
.headerBar .right-content {
  -webkit-app-region: no-drag;
  -webkit-user-select: none;
}
</style>