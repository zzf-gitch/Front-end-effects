<template>
  <div class="home">
    <div class="common-layout">
      <el-container>
        <el-aside :width="isCollapse ? '50px' : '200px'">
          <menu_demo />
        </el-aside>
        <el-container>
          <el-header>
            <div class="img">
              <div class="cal" @click="toisCollopse" :title="isCollapse ? '展开菜单' : '收起菜单'" :class="isCollapse
                ? 'iconfont icon-zhankaicaidan'
                : 'iconfont icon-shouqicaidan'
                "></div>
            </div>
            <div v-if="isSupport" class="full-screen" :title="fullScreen ? '退出全屏' : '进入全屏'" @click="screen">
              <i :class="fullScreen
                ? 'iconfont icon-guanbiquanping'
                : 'iconfont icon-fullscreen-line'
                ">
              </i>
            </div>
            <div ref="darkSwitchRef" style="width:150px">
              <el-switch v-model="toTheme" active-text="暗色" inactive-text="亮色" @change="updateThemeMode" />
            </div>
          </el-header>
          <el-main>
            <!-- 动态组件动画效果 -->
          <router-view #default="{ Component }">
            <Transition :appear="true" enter-active-class="admin_fadeInRight" leave-active-class="admin_fadeOutLeft">
              <component :is="Component"></component>
            </Transition>
          </router-view>
          </el-main>
          <!--          <el-footer></el-footer>-->
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script setup>
import menu_demo from '../components/menu.vue'
import {
  ref,
  defineEmits,
  defineProps,
  nextTick,
  reactive,
  onMounted,
  watch,
  computed,
  onUnmounted,
  onBeforeUnmount,
} from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { useTheme } from '@/utils/useTheme.js'
import { successmessage, warningmessage } from '@/api/message.js'
const { theme , toggleTheme , doWithTransition } = useTheme()
const toTheme = ref(theme.value === 'dark' ? true : false)

const darkSwitchRef = ref(null)
const updateThemeMode = (val) => {
  doWithTransition(
    () => toggleTheme(val),
    darkSwitchRef.value?.querySelector?.('.el-switch__action'),
    !val
  );
}
const router = useRouter()
const route = useRoute()

//控制左侧边栏menu菜单缩放
const isCollapse = ref(false);

const toisCollopse = () => {
  isCollapse.value = !isCollapse.value
};

//浏览器是否支持全屏模式
const isSupport = document.fullscreenEnabled;
//控制开启全屏和关闭全屏
const fullScreen = ref(false);
const screen = () => {
  //浏览器是否支持全屏模式
  if (isSupport) {
    //Document.fullscreenElement只读属性返回Element当前在本文档中以全屏模式呈现的，或者 如果 null当前未使用全屏模式
    if (document.fullscreenElement) {
      //Document.exitFullscreen() 方法用于让当前文档退出全屏模式（原文表述不准确，详见备注）。调用这个方法会让文档回退到上一个调用Element.requestFullscreen()方法进入全屏模式之前的状态
      document.exitFullscreen();
      fullScreen.value = false;
      warningmessage('退出全屏')
    } else {
      // 这里选择将html元素全屏展示，也可以选择其它元素
      //Element.requestFullscreen() 方法用于发出异步请求使元素进入全屏模式
      //Document.documentElement返回 的 Element根元素document（例如，<html>HTML 文档的元素）
      document.documentElement.requestFullscreen();
      successmessage('进入全屏')
      fullScreen.value = true;
    }
  }
};
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  color: var(--text-color);
  background: linear-gradient(to bottom, var(--bg1), var(--bg2));
}

.common-layout {
  width: 100%;
  height: 100%;
}

.el-container {
  width: 100%;
  height: 100%;
}
.el-header{
  width: 100%;
  display: flex;
  align-items: center;
  gap:20px;
}
.el-aside {
  height: 100%;
  transition: all 0.5s;
}

.img {
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  cursor: pointer;
}

.cal {
  width: 0px !important;
}

.full-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  cursor: pointer;
}

.admin_fadeInRight {
  animation-duration: 0.5s;
  animation-name: fadeInRight;
}

.admin_fadeOutLeft {
  animation-duration: 0.3s;
  animation-name: fadeOutLeft;
}
</style>
