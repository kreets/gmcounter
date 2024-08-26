import FightModal from "./FightModal.vue";
export default (await import('vue')).defineComponent({
    components: { FightModal },
    data() {
        return {
            level: 1,
            gear: 0,
            isFightModalOpen: false
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
        openFightModal() {
            this.isFightModalOpen = true;
        },
        closeFightModal() {
            this.isFightModalOpen = false;
        }
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
    (__VLS_ctx.$t('addLevel'));
    // @ts-ignore
    [increaseLevel, $t,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-body") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("card-title") }, });
    (__VLS_ctx.$t('currentLevel'));
    // @ts-ignore
    [$t,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("card-text bigtext") }, });
    (__VLS_ctx.level);
    // @ts-ignore
    [level,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-footer") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.decreaseLevel) }, ...{ class: ("btn btn-danger") }, });
    (__VLS_ctx.$t('removeLevel'));
    // @ts-ignore
    [$t, decreaseLevel,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.increaseGear) }, ...{ class: ("btn btn-primary") }, });
    (__VLS_ctx.$t('addGear'));
    // @ts-ignore
    [$t, increaseGear,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-body") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("card-title") }, });
    (__VLS_ctx.$t('currentGear'));
    // @ts-ignore
    [$t,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("card-text bigtext") }, });
    (__VLS_ctx.gear);
    // @ts-ignore
    [gear,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-footer") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.decreaseGear) }, ...{ class: ("btn btn-danger") }, });
    (__VLS_ctx.$t('removeGear'));
    // @ts-ignore
    [$t, decreaseGear,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row mt-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12 text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    (__VLS_ctx.$t('totalPower'));
    (__VLS_ctx.totalPower);
    // @ts-ignore
    [$t, totalPower,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.openFightModal) }, ...{ class: ("btn btn-primary") }, });
    (__VLS_ctx.$t('munchkinFight'));
    // @ts-ignore
    [$t, openFightModal,];
    // @ts-ignore
    const __VLS_0 = {}
        .FightModal;
    ({}.FightModal);
    __VLS_components.FightModal;
    // @ts-ignore
    [FightModal,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onCloseModal': {} }, isOpen: ((__VLS_ctx.isFightModalOpen)), munchkinStrength: ((__VLS_ctx.totalPower)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onCloseModal': {} }, isOpen: ((__VLS_ctx.isFightModalOpen)), munchkinStrength: ((__VLS_ctx.totalPower)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onCloseModal': {} }, isOpen: ((__VLS_ctx.isFightModalOpen)), munchkinStrength: ((__VLS_ctx.totalPower)), }));
    let __VLS_6;
    const __VLS_7 = {
        onCloseModal: (__VLS_ctx.closeFightModal)
    };
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    let __VLS_3;
    let __VLS_4;
    // @ts-ignore
    [totalPower, isFightModalOpen, closeFightModal,];
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
        __VLS_styleScopedClasses['bigtext'];
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
        __VLS_styleScopedClasses['bigtext'];
        __VLS_styleScopedClasses['card-footer'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-danger'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['mt-4'];
        __VLS_styleScopedClasses['col-12'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-primary'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = { FightModal };
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
