const DISTANCE = 150
const DURATION = 1000
const animationMap = new WeakMap()
const ob = new IntersectionObserver(entries => {
    for(const item of entries) {
        if(item.isIntersecting) {
            console.log(item.target)
            const animation = animationMap.get(item.target)
            animation.play()
            ob.unobserve(item.target)
        }
    }
})

function isBelowViewport(el) {
    const  rect = el.getBoundingClientRect()
    return rect.top > window.innerHeight
}

const vSride = {
    mounted(el) {
        console.log(el)
        if(!isBelowViewport(el)) {
            return
        }
        const animation = el.animate([
            {
                transform:`translateY(${DISTANCE}px)`,
                opacity:0.5
            },
            {
                transform:`translateY(0px)`,
                opacity:1
            }
        ],{
            duration: DURATION,
            easing:"ease"
        })

        animation.pause()
        animationMap.set(el,animation)
        ob.observe(el)
    },
    unmounted(el) {
        ob.unobserve(el)
    }
}

const directives = {
    install(app) {
        app.directive('side',vSride)
    }
}
export default directives
