import AgricolaCalculator from '../components/AgricolaCalculator.vue';
import TicketToRideCalculator from '../components/TicketToRideCalculator.vue';
export default (await import('vue')).defineComponent({
    components: {
        AgricolaCalculator, TicketToRideCalculator
    },
    computed: {
        gameName() {
            return this.$route.params.name;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("game-counter") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    (__VLS_ctx.gameName);
    // @ts-ignore
    [gameName,];
    if (__VLS_ctx.gameName === 'Agricola') {
        // @ts-ignore
        const __VLS_0 = {}
            .AgricolaCalculator;
        ({}.AgricolaCalculator);
        __VLS_components.AgricolaCalculator;
        // @ts-ignore
        [AgricolaCalculator,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
        const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({}));
        const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
        // @ts-ignore
        [gameName,];
    }
    if (__VLS_ctx.gameName === 'TicketToRide') {
        // @ts-ignore
        const __VLS_6 = {}
            .TicketToRideCalculator;
        ({}.TicketToRideCalculator);
        __VLS_components.TicketToRideCalculator;
        // @ts-ignore
        [TicketToRideCalculator,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
        const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({}));
        const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
        // @ts-ignore
        [gameName,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['game-counter'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        AgricolaCalculator, TicketToRideCalculator
    };
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
