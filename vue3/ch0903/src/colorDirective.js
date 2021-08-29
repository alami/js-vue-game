let interval
export default {
    mounted(el, binding) {
        el.style[binding.arg] = binding.value
        if (binding.modifiers.blink) {
            let flag = true
            interval = setInterval(()=>{
                el.style.color = flag?'#fff':binding.value
                flag = !flag
            }, 1000)
        }
    },
    updated(el, binding) {
        el.style[binding.arg] = binding.value
    },
    unmounted() {
        console.log('unmounted')
        if (interval) {
            clearInterval(interval)
        }
    },
}