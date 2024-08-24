import { useRoute, useRouter } from 'vue-router';
export default (await import('vue')).defineComponent({
    setup() {
        const route = useRoute();
        const router = useRouter();
        const gameName = route.params?.name || 'Score Counter';
        const games = ['Munchkin', 'TicketToRide', 'Agricola'];
        const selectGame = (game) => {
            router.push({ name: 'GameCounter', params: { name: game } });
        };
        return {
            gameName,
            games,
            selectGame,
        };
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("app"), ...{ class: ("container-fluid") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("d-flex justify-content-between align-items-center py-3 mb-4 border-bottom") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("h3") }, });
    (__VLS_ctx.gameName);
    // @ts-ignore
    [gameName,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("button"), ...{ class: ("btn btn-primary") }, "data-bs-toggle": ("modal"), "data-bs-target": ("#gameModal"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
    // @ts-ignore
    const __VLS_0 = {}
        .RouterView;
    ({}.RouterView);
    ({}.RouterView);
    __VLS_components.RouterView;
    __VLS_components.routerView;
    __VLS_components.RouterView;
    __VLS_components.routerView;
    // @ts-ignore
    [RouterView, RouterView,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal fade") }, id: ("gameModal"), tabindex: ("-1"), "aria-labelledby": ("gameModalLabel"), "aria-hidden": ("true"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-dialog") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("modal-title") }, id: ("gameModalLabel"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("button"), ...{ class: ("btn-close") }, "data-bs-dismiss": ("modal"), "aria-label": ("Close"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-body") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("list-group") }, });
    for (const [game] of __VLS_getVForSourceType((__VLS_ctx.games))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.selectGame(game);
                    // @ts-ignore
                    [games, selectGame,];
                } }, ...{ class: ("list-group-item") }, key: ((game)), });
        (game);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-footer") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("button"), ...{ class: ("btn btn-secondary") }, "data-bs-dismiss": ("modal"), });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['container-fluid'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['justify-content-between'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['border-bottom'];
        __VLS_styleScopedClasses['h3'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-primary'];
        __VLS_styleScopedClasses['modal'];
        __VLS_styleScopedClasses['fade'];
        __VLS_styleScopedClasses['modal-dialog'];
        __VLS_styleScopedClasses['modal-content'];
        __VLS_styleScopedClasses['modal-header'];
        __VLS_styleScopedClasses['modal-title'];
        __VLS_styleScopedClasses['btn-close'];
        __VLS_styleScopedClasses['modal-body'];
        __VLS_styleScopedClasses['list-group'];
        __VLS_styleScopedClasses['list-group-item'];
        __VLS_styleScopedClasses['modal-footer'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-secondary'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
