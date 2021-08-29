export default {
    mounted(el, binding) {
        el.style[binding.arg] = binding.value
    },
    updated(el, binding) {
        el.style[binding.arg] = binding.value
    },
    unmounted() {},
}