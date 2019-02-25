<template>
  <div class="container-fluid bg-light">
    <!-- 导航 -->
    <div class="row">
      <div class="col-10 offset-1 mt-4 bg-white">
        <nav class="navbar navbar-expand justify-content-between">
          <span class="navbar-brand">热门广告</span>
          <ul class="navbar-nav">
            <li class="nav-link" v-for="i in navdata">
              <router-link tap="a" to>{{i}}</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- 内容 -->
    <div class="row" v-for="i in contentAd">
      <div class="col-10 offset-1 bg-white border-top">
        <div class="row p-3">
          <span class="text-danger">{{i.zan-i.nozan>=100?"热.":""}}</span>
          <span class="text-primary">{{i.type}}</span>.
          <span class="text-black">{{i.author}}</span>.
          <span class="text-black">{{i.date}}</span>.
          <span class="text-black">{{i.adType}}</span>
        </div>
        <div class="row pl-3 h5">
          <span style="cursor:pointer" @click="browse(i)">{{i.title}}</span>
        </div>
        <div class="row p-3">
          <div class="btn-group">
            <!-- 赞按钮 -->
            <button class="btn btn-outline-dark" @click="zan(i)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h16v16H0z"></path>
                  <path
                    fill="#B2BAC2"
                    d="M4.234 6.693v7.243H2.881c-.486 0-.881-.492-.881-1.095V7.875c0-.63.412-1.182.88-1.182h1.354zm3.688-3.7C8.01 2.404 8.49 1.99 9.018 2c.754.015 1.204.663 1.36.983.284.585.292 1.549.097 2.167-.177.56-.586 1.296-.586 1.296h3.066c.324 0 .625.164.826.449.204.29.27.668.178 1.011l-1.387 5.183c-.126.499-.544.847-1.016.847H5.53V6.693c1.385-.309 2.236-2.632 2.392-3.7z"
                  ></path>
                </g>
              </svg>
              {{i.zan}}
            </button>
            <!-- 不赞按钮 -->
            <button class="btn btn-outline-dark" @click="nozan(i)">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>7531DDE4-6B38-4287-8A2A-F685F0835AFC</title>
                <defs>
                  <rect id="a" x="59" y="54" width="54" height="25" rx="1"></rect>
                  <mask id="b" x="0" y="0" width="54" height="25" fill="#fff">
                    <use xlink:href="#a"></use>
                  </mask>
                </defs>
                <g transform="translate(-68 -56)" fill="none" fill-rule="evenodd">
                  <path fill="#B2BAC2" d="M72 61v8.038h4.444L81.111 72v-2.962H84V61z"></path>
                  <use stroke="#EDEEEF" mask="url(#b)" stroke-width="2" xlink:href="#a"></use>
                </g>
              </svg>
              {{i.nozan}}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  //注册组件
  components: {},
  //数据
  data() {
    return {
      navdata: [
        "推荐",
        "前端",
        "Android",
        "后端",
        "人工智能",
        "iOS",
        "工具资源",
        "阅读"
      ],
      contentAd: [
        {
          iszan: false,
          type: "专栏",
          author: "刘鑫鹏",
          date: "1天前",
          adType: "面试",
          title: "中高级前端大厂面试秘籍，为你保驾护航金三银四，直通大厂(上)",
          zan: 150,
          nozan: 50
        },
        {
          iszan: false,
          hot: "",
          type: "专栏",
          author: "PSY",
          date: "1天前",
          adType: "面试",
          title: "中高级前端大厂面试秘籍，为你保驾护航金三银四，直通大厂(上)",
          zan: 100,
          nozan: 50
        }
      ]
    };
  },
  //事件
  methods: {
    //点赞方法
    zan(i) {
      if (!i.iszan) {
        i.zan++;
        i.iszan = true;
      }
    },
    //不赞方法
    nozan(i) {
      if (!i.iszan) {
        i.nozan++;
        i.iszan = true;
      }
    },
    //浏览内容方法
    browse(i) {
      //点击链接跳转到具体内容页面
      this.$router.push({ name: "adcontent", params: { author: i.author,title:i.title} });
    }
  }
};
</script>
<style scoped>
.container-fluid {
  min-height: 94vh;
}
</style>
