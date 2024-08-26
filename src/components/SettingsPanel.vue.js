export default (await import('vue')).defineComponent({
    props: {
        isOpen: Boolean,
        currentDarkMode: Boolean
    },
    data() {
        return {
            isDarkMode: this.currentDarkMode
        };
    },
    methods: {
        close() {
            this.$emit('close');
        },
        toggleTheme() {
            this.isDarkMode = !this.isDarkMode;
            this.$emit('updateTheme', this.isDarkMode);
            localStorage.setItem('darkMode', this.isDarkMode);
        }
    }
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
    if (__VLS_ctx.isOpen) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal") }, tabindex: ("-1"), role: ("dialog"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-dialog") }, role: ("document"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-content") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("modal-title") }, });
        (__VLS_ctx.$t('settings'));
        // @ts-ignore
        [isOpen, $t,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-body") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.dl, __VLS_intrinsicElements.dl)({ ...{ class: ("row") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.dt, __VLS_intrinsicElements.dt)({ ...{ class: ("col-sm-4") }, });
        (__VLS_ctx.$t('theme'));
        // @ts-ignore
        [$t,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.dd, __VLS_intrinsicElements.dd)({ ...{ class: ("col-sm-8") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleTheme) }, ...{ class: ("btn btn-sm") }, ...{ class: (([__VLS_ctx.isDarkMode ? 'btn-success' : 'btn-info'])) }, });
        __VLS_styleScopedClasses = ([isDarkMode ? 'btn-success' : 'btn-info']);
        (__VLS_ctx.isDarkMode ? __VLS_ctx.$t('lightMode') : __VLS_ctx.$t('darkMode'));
        // @ts-ignore
        [$t, $t, toggleTheme, isDarkMode, isDarkMode,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-footer") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.close) }, type: ("button"), ...{ class: ("btn btn-secondary") }, });
        (__VLS_ctx.$t('close'));
        // @ts-ignore
        [$t, close,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['modal'];
        __VLS_styleScopedClasses['modal-dialog'];
        __VLS_styleScopedClasses['modal-content'];
        __VLS_styleScopedClasses['modal-header'];
        __VLS_styleScopedClasses['modal-title'];
        __VLS_styleScopedClasses['modal-body'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['col-sm-4'];
        __VLS_styleScopedClasses['col-sm-8'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-sm'];
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
