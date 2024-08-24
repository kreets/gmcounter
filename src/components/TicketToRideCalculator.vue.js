export default (await import('vue')).defineComponent({
    data() {
        return {
            scoreItems: [
                {
                    name: 'Route length 1',
                    quantity: 0,
                    calculateScore: (quantity) => {
                        if (quantity === 0)
                            return 0;
                        return quantity;
                    },
                },
                {
                    name: 'Route length 2',
                    quantity: 0,
                    calculateScore: (quantity) => {
                        if (quantity === 0)
                            return 0;
                        return quantity * 2;
                    },
                },
                {
                    name: 'Route length 3',
                    quantity: 0,
                    calculateScore: (quantity) => {
                        if (quantity === 0)
                            return 0;
                        return quantity * 4;
                    },
                },
                {
                    name: 'Route length 4',
                    quantity: 0,
                    calculateScore: (quantity) => {
                        if (quantity === 0)
                            return 0;
                        return quantity * 7;
                    },
                },
                {
                    name: 'Route length 5',
                    quantity: 0,
                    calculateScore: (quantity) => {
                        if (quantity === 0)
                            return 0;
                        return quantity * 10;
                    },
                },
                {
                    name: 'Route length 6',
                    quantity: 0,
                    calculateScore: (quantity) => {
                        if (quantity === 0)
                            return 0;
                        return quantity * 15;
                    },
                },
                {
                    name: 'Kept Station',
                    quantity: 0,
                    calculateScore: (quantity) => {
                        if (quantity === 0)
                            return 0;
                        return quantity * 4;
                    },
                },
            ],
            availableRoutes: [
                { name: '20-point route', points: 20 },
                { name: '10-point route', points: 10 },
                { name: '7-point route', points: 7 },
                { name: '5-point route', points: 5 },
            ],
            completedRoutes: [],
            selectedRoute: '',
        };
    },
    computed: {
        totalScore() {
            const baseScore = this.scoreItems.reduce((total, item) => total + item.calculateScore(item.quantity), 0);
            const routeScore = this.completedRoutes.reduce((total, route) => total + route.points, 0);
            return baseScore + routeScore;
        },
    },
    methods: {
        increaseQuantity(index) {
            this.scoreItems[index].quantity++;
        },
        decreaseQuantity(index) {
            if (this.scoreItems[index].quantity > 0) {
                this.scoreItems[index].quantity--;
            }
        },
        addCompletedRoute() {
            if (this.selectedRoute) {
                this.completedRoutes.push(this.selectedRoute);
                this.selectedRoute = ''; // Reset the dropdown
            }
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({ ...{ class: ("table table-bordered") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.scoreItems))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (item.name);
        // @ts-ignore
        [scoreItems,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.decreaseQuantity(index);
                    // @ts-ignore
                    [decreaseQuantity,];
                } }, ...{ class: ("btn btn-outline-secondary") }, type: ("button"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("number"), ...{ class: ("form-control") }, });
        (item.quantity);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.increaseQuantity(index);
                    // @ts-ignore
                    [increaseQuantity,];
                } }, ...{ class: ("btn btn-outline-secondary") }, type: ("button"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (item.calculateScore(item.quantity));
    }
    for (const [route, index] of __VLS_getVForSourceType((__VLS_ctx.completedRoutes))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ key: (('route-' + index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (index + 1);
        // @ts-ignore
        [completedRoutes,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (route.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (route.points);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.tfoot, __VLS_intrinsicElements.tfoot)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ colspan: ("2"), });
    (__VLS_ctx.totalScore);
    // @ts-ignore
    [totalScore,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group mb-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ class: ("form-select") }, value: ((__VLS_ctx.selectedRoute)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ disabled: (true), value: (""), });
    // @ts-ignore
    [selectedRoute,];
    for (const [route] of __VLS_getVForSourceType((__VLS_ctx.availableRoutes))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((route.name)), value: ((route)), });
        (route.name);
        (route.points);
        // @ts-ignore
        [availableRoutes,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.addCompletedRoute) }, ...{ class: ("btn btn-outline-secondary") }, type: ("button"), });
    // @ts-ignore
    [addCompletedRoute,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['table'];
        __VLS_styleScopedClasses['table-bordered'];
        __VLS_styleScopedClasses['input-group'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-outline-secondary'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-outline-secondary'];
        __VLS_styleScopedClasses['input-group'];
        __VLS_styleScopedClasses['mb-3'];
        __VLS_styleScopedClasses['form-select'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-outline-secondary'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
