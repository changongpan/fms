<template>
  <div id="main-view">
    <full-view>
      <top-status-bar slot="top-status-bar"></top-status-bar>
      <content-view slot="content-view">
        <login slot="content-view-items" v-if="!isLogged" @isLogin="login"></login>
        <div id="content-view-items" slot="content-view-items" v-if="isLogged">
          <content-header>
            <div id="logo-img" slot="content-header-left">
              <a href="http://www.handa-group.com" target="view_window"><img id="logo" src="~assets/img/Logo_HDI.png"/></a>
            </div>
              <nav-bar slot="content-header-right">
                <nav-bar-content slot="nav-bar-items"></nav-bar-content>
              </nav-bar>
          </content-header>
          <content-body>
            <router-view></router-view>
          </content-body>
          <content-footer></content-footer>
        </div>
      </content-view>
    </full-view>
  </div>
</template>

<script>
  import FullView from "components/common/frameworks/FullView";
  import TopStatusBar from "components/common/frameworks/TopStatusBar";
  import ContentView from "components/common/frameworks/ContentView";
  import ContentHeader from "components/common/frameworks/contentHeader/ContentHeader";
  import ContentBody from "components/common/frameworks/contentBody/ContentBody";
  import ContentFooter from "components/common/frameworks/contentFooter/ContentFooter";
  import NavBar from "components/common/navBar/NavBar";

  import Login from "components/content/login/Login";

  import NavBarContent from "views/navBar/NavBarContent";


  export default {
    name: "MainView",
    data() {
      return {
        isLogged: false
      }
    },
    methods: {
      login() {
        this.isLogged = true
      }
    },
    components: {
      FullView,
      TopStatusBar,
      ContentView,
      ContentHeader,
      ContentBody,
      ContentFooter,
      NavBar,
      Login,
      NavBarContent,
    }
  }
</script>

<style scoped>
#logo-img{
  flex: 0;
  height: 48px;
  padding-right: 3px;
}
  #logo{
    height: 48px;
  }
</style>
