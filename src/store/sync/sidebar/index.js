export default {
    state() {
        return {
            isNavOpen: false,
        }
    },
    mutations: {
        setIsNavOpen(state , yesno) {
            state.isNavOpen = yesno
        },
        toggleNav(state) {
            state.isNavOpen = !state.isNavOpen
        }
    },

}
