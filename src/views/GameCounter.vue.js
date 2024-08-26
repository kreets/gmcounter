import AgricolaCalculator from '../components/AgricolaCalculator.vue';
import TicketToRideCalculator from '../components/TicketToRideCalculator.vue';
import MunchkinCalculator from '../components/MunchkinCalculator.vue';
import TwilightImperiumCalculator from '../components/TwilightImperiumCalculator.vue';
export default (await import('vue')).defineComponent({
    components: {
        AgricolaCalculator, TicketToRideCalculator, MunchkinCalculator, TwilightImperiumCalculator
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
    if (__VLS_ctx.gameName === 'Munchkin') {
        // @ts-ignore
        const __VLS_12 = {}
            .MunchkinCalculator;
        ({}.MunchkinCalculator);
        __VLS_components.MunchkinCalculator;
        // @ts-ignore
        [MunchkinCalculator,];
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
        const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({}));
        const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
        // @ts-ignore
        [gameName,];
    }
    if (__VLS_ctx.gameName === 'Twilight') {
        // @ts-ignore
        const __VLS_18 = {}
            .TwilightImperiumCalculator;
        ({}.TwilightImperiumCalculator);
        __VLS_components.TwilightImperiumCalculator;
        // @ts-ignore
        [TwilightImperiumCalculator,];
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
        const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({}));
        const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
        // @ts-ignore
        [gameName,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['game-counter'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        AgricolaCalculator, TicketToRideCalculator, MunchkinCalculator, TwilightImperiumCalculator
    };
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
