export default (await import('vue')).defineComponent({
    data() {
        return {
            level: 1,
            gear: 0,
        };
    },
    computed: {
        totalPower() {
            return this.level + this.gear;
        },
    },
    methods: {
        increaseLevel() {
            this.level++;
        },
        decreaseLevel() {
            if (this.level > 1) {
                this.level--;
            }
        },
        increaseGear() {
            this.gear++;
        },
        decreaseGear() {
            if (this.gear > 0) {
                this.gear--;
            }
        },
    },
});
;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.increaseLevel) }, ...{ class: ("btn btn-primary") }, });
    // @ts-ignore
    [increaseLevel,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-body") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("card-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("card-text") }, });
    (__VLS_ctx.level);
    // @ts-ignore
    [level,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-footer") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.decreaseLevel) }, ...{ class: ("btn btn-danger") }, });
    // @ts-ignore
    [decreaseLevel,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.increaseGear) }, ...{ class: ("btn btn-primary") }, });
    // @ts-ignore
    [increaseGear,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-body") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("card-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("card-text") }, });
    (__VLS_ctx.gear);
    // @ts-ignore
    [gear,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-footer") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.decreaseGear) }, ...{ class: ("btn btn-danger") }, });
    // @ts-ignore
    [decreaseGear,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row mt-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12 text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    (__VLS_ctx.totalPower);
    // @ts-ignore
    [totalPower,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['col-6'];
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['card-header'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-primary'];
        __VLS_styleScopedClasses['card-body'];
        __VLS_styleScopedClasses['card-title'];
        __VLS_styleScopedClasses['card-text'];
        __VLS_styleScopedClasses['card-footer'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-danger'];
        __VLS_styleScopedClasses['col-6'];
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['card-header'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-primary'];
        __VLS_styleScopedClasses['card-body'];
        __VLS_styleScopedClasses['card-title'];
        __VLS_styleScopedClasses['card-text'];
        __VLS_styleScopedClasses['card-footer'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-danger'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['mt-4'];
        __VLS_styleScopedClasses['col-12'];
        __VLS_styleScopedClasses['text-center'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
