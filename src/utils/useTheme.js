import { ref, watchEffect } from 'vue'

const KEY = ref('THEME')
const theme = ref(localStorage.getItem(KEY.value) || 'light')

watchEffect(() => {
    document.documentElement.dataset.theme = theme.value
    // 给html元素添加class类名
    // document.documentElement.classList.add(theme.value)
    localStorage.setItem(KEY.value, theme.value)
})

const toggleTheme = (val) => {
    theme.value = val ? 'dark' : 'light'
}

/**
 * 切换主题过渡动画
 * @param callback 执行的方法
 * @param el 过渡动画触发元素
 * @param isOut 是否是退出方向
 * @param isBody 是否在 body 上执行动画
 */
const doWithTransition = (callback, el, isOut, isBody) => {
    if (!el || typeof document.startViewTransition !== 'function') {
        callback().then(() => { });
        return;
    }
    document.documentElement.classList.add('disabled-transition');
    el.classList.add('view-transition-trigger');
    el.style.setProperty('view-transition-name', 'view-transition-trigger');
    if (isBody) {
        document.body.style.setProperty('view-transition-name', 'body');
    }
    const rect = el.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y)
    );
    document.startViewTransition(callback).ready.then(() => {
        const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
        ];
        const anim = document.documentElement.animate(
            { clipPath: isOut ? [...clipPath].reverse() : clipPath },
            {
                duration: 400,
                easing: 'ease-in',
                pseudoElement: isOut
                    ? `::view-transition-old(${isBody ? 'body' : 'root'})`
                    : `::view-transition-new(${isBody ? 'body' : 'root'})`
            }
        );
        anim.onfinish = () => {
            document.body.style.removeProperty('view-transition-name');
            el.style.removeProperty('view-transition-name');
            el.classList.remove('view-transition-trigger');
            document.documentElement.classList.remove('disabled-transition');
        };
    });
}

export const useTheme = () => {
    return {
        theme,
        toggleTheme,
        doWithTransition
    }
}