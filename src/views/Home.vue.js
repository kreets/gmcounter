export default (await import('vue')).defineComponent({
    data() {
        return {
            games: ['TicketToRide', 'Agricola'],
        };
    },
    methods: {
        selectGame(game) {
            this.$router.push({ name: 'GameCounter', params: { name: game } });
        },
    },
});
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("list-group") }, });
    for (const [game] of __VLS_getVForSourceType((__VLS_ctx.games))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.selectGame(game);
                    // @ts-ignore
                    [games, selectGame,];
                } }, ...{ class: ("list-group-item") }, key: ((game)), });
        (game);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['home'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['list-group'];
        __VLS_styleScopedClasses['list-group-item'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
