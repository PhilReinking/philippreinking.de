export default {
    bind(el) {
        // set initial transform styles
        el.style.transform = `scale(1.05)`

        window.addEventListener("mousemove", e => {
            window.requestAnimationFrame(timestamp => {
                let yShift = e.clientY / e.view.innerHeight
                let xShift = e.clientX / e.view.innerWidth

                const BASE = 3

                let yShiftAbsolute = BASE * yShift
                let xShiftAbsolute = BASE * xShift

                let transform = `perspective(1000px) rotate3d(1,0,0,${yShiftAbsolute}deg) rotate3d(0,1,0,${xShiftAbsolute}deg) scale(1.05)`

                el.style.transform = transform
            })
        })
    },
}
