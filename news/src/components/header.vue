<template>
  <header>
    <nav class="navnar navbar-expand-lg navbar-light bg-white border-bottom">
      <div class="container" v-if="status">
        <!-- 导航logo -->
        <a class="navbar-brand mr-5" href="javascript:void(0)">
          PSY
          <span>
            <img src="../assets/ad.png" width="25" alt srcset>
          </span>
        </a>
        <!-- 导航 -->
        <div class="menu d-inline-flex justify-content-between">
          <ul class="navbar-nav d-inline-flex">
            <!-- 首页 -->
            <li class="nav-item mr-5">
              <router-link :to="{name:'home'}" class="nav-link">首页</router-link>
            </li>
            <!-- 动态 -->
            <li class="nav-item mr-5">
              <router-link :to="{name:'home'}" class="nav-link">动态</router-link>
            </li>
            <!-- 话题 -->
            <li class="nav-item mr-5">
              <router-link :to="{name:'home'}" class="nav-link">话题</router-link>
            </li>
          </ul>
          <ul class="navbar-nav d-inline-flex">
            <!-- 搜索 -->
            <li class="nav-link">
              <div class="serachBox">
                <input class="serachInput" type="text" placeholder="搜索广告">
                <span style="cursor:pointer">
                  <img class="img-fluid" width="20" src="../assets/serach.png" alt srcset>
                </span>
              </div>
            </li>
            <li class="text-primary">
              <router-link :to="{name:'writeAd'}" class="nav-link">写文章</router-link>
            </li>
            <li class="text-primary nav-link">|</li>
            <li class="text-primary" v-if="!mobileStatus">
              <router-link :to="{name:'login'}" class="nav-link">登录</router-link>
            </li>
            <li class="text-primary nav-link" v-if="mobileStatus">
              {{currentname}}
            </li>
            <li class="text-primary nav-link" v-if="mobileStatus">
              {{"退出"}}
            </li>
            <li class="text-primary" v-if="!mobileStatus">
              <router-link tap="a" :to="{name:'register'}" class="nav-link">注册</router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- 手机端样式 -->
      <div class="container d-flex justify-content-around" v-if="!status">
        <!-- 导航logo -->
        <a class="navbar-brand" href="javascript:void(0)">
          PSY
          <span>
            <img src="../assets/ad.png" width="25" alt srcset>
          </span>
        </a>
        <ul class="navbar-nav" @mouseenter="entry" @mouseleave="out">
          <li class="nav-link">
            <span>
              <img src="../assets/menu.png" width="25" alt srcset>
            </span>
            <!-- 下拉菜单 -->
            <ul v-if="mobileStatus1" class="list-unstyled bg-dark position-absolute">
              <li>
                <router-link :to="{name:'home'}" class="nav-link text-white text-center">首页</router-link>
              </li>
              <li>
                <router-link :to="{name:'home'}" class="nav-link text-white text-center">动态</router-link>
              </li>
              <li>
                <router-link :to="{name:'home'}" class="nav-link text-white text-center">话题</router-link>
              </li>
              <li>
                <router-link :to="{name:'writeAd'}" class="nav-link text-white text-center">写文章</router-link>
              </li>
              <!-- <li>
                <router-link :to="{name:'login'}" class="nav-link text-white text-center">登录</router-link>
              </li>
              <li>
                <router-link :to="{name:'register'}" class="nav-link text-white text-center">注册</router-link>
              </li> -->
            </ul>
          </li>
         
        </ul>
         <li class="text-primary nav-link" v-if="!mobileStatus">
              <router-link :to="{name:'login'}" class="nav-link">登录</router-link>
            </li>
            <li class="text-primary nav-link" v-if="mobileStatus">
              {{currentname}}
            </li>
            <li class="text-primary nav-link" v-if="mobileStatus">
              {{"退出"}}
            </li>
            <li class="text-primary nav-link" v-if="!mobileStatus">
              <router-link tap="a" :to="{name:'register'}" class="nav-link">注册</router-link>
            </li>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      viewWidth: document.body.clientWidth, //获取屏幕宽度属性
      //  status: true, //flase 渲染手机端样式 true 渲染PC端样式
      mobileStatus1: false,//渲染下拉菜单开关
     currentname:""
    };
  },
  mounted() {
    //监测屏幕宽度大小
    let this_ = this;
    window.onresize = () => {
      this_.viewWidth = document.body.offsetWidth;
    };
  },
  computed: {
    isloginStatus() {
      if (this.$store.getters.islogin) {
      }
    },
    status: {
      get() {
        if (this.viewWidth < 1000) {
          return false;
        } else {
          return true;
        }
      },
      set() {}
    },
    mobileStatus:{
      get(){
        if(this.$store.getters.islogin){
          this.currentname=this.$store.getters.currentUsername
         return true;
        }else{
          return false;
        }
      },
      set(){

      }
    }
  },
  watch: {
    viewWidth(e) {
      if (e < 1000) {
        this.status = false;
      } else {
        this.status = true;
      }
    }
  },
  methods: {
    entry() {
      this.mobileStatus1 = true;
    },
    out() {
      this.mobileStatus1 = false;
    }
  }
};
</script>
<style scope>
.menu {
  width: 80%;
}
.serachBox {
  border: 1px solid lightblue;
}
.serachInput {
  border: 0px;
  outline: none;
}
.list-unstyled {
  z-index: 9999;
  width: 10%;
}
</style>
