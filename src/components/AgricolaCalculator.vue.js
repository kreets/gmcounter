export default (await import('vue')).defineComponent({
    data() {
        return {
            scoreItems: [
                {
                    name: 'Fields',
                    quantity: 0,
                    calculateScore: (quantity) => {
                        if (quantity <= 1)
                            return -1;
                        if (quantity <= 5)
                            return quantity - 1;
                        return 4;
                    },
                },
                {
                    name: 'Pastures',
                    quantity: 0,
                    calculateScore: (quantity) => {
                        if (quantity === 0)
                            return -1;
                        if (quantity <= 4)
                            return quantity;
                        return 4;
                    },
                },
                {
                    name: 'Sheep',
                    quantity: 0,
                    calculateScore: (quantity) => {
                        if (quantity <= 0)
                            return -1;
                        if (quantity > 0 && quantity < 4)
                            return 1;
                        if (quantity >= 4 && quantity < 6)
                            return 2;
                        if (quantity >= 6 && quantity < 8)
                            return 3;
                        return 4;
                    },
                },
                {
                    name: 'Cattle',
                    quantity: 0,
                    calculateScore: (quantity) => {
                        if (quantity === 0)
                            return -1;
                        if (quantity === 1)
                            return 1;
                        if (quantity >= 2 && quantity < 4)
                            return 2;
                        if (quantity >= 4 && quantity < 6)
                            return 3;
                        return 4;
                    },
                },
                {
                    name: 'Boar',
                    quantity: 0,
                    calculateScore: (quantity) => {
                        if (quantity <= 0)
                            return -1;
                        if (quantity < 3)
                            return 1;
                        if (quantity >= 3 && quantity < 5)
                            return 2;
                        if (quantity >= 5 && quantity < 7)
                            return 3;
                        return 4;
                    },
                },
                {
                    name: 'Horse',
                    quantity: 0,
                    calculateScore: (quantity) => {
                        if (quantity === 0)
                            return 0;
                        return quantity;
                    },
                },
                {
                    name: 'Grain',
                    quantity: 0,
                    calculateScore: (quantity) => {
                        if (quantity === 0)
                            return -1;
                        if (quantity <= 3)
                            return 1;
                        if (quantity <= 5)
                            return 2;
                        if (quantity <= 7)
                            return 3;
                        return 4;
                    },
                },
                {
                    name: 'Vegetables',
                    quantity: 0,
                    calculateScore: (quantity) => {
                        if (quantity === 0)
                            return -1;
                        if (quantity < 5)
                            return quantity;
                        return 4;
                    },
                },
                {
                    name: 'Fences',
                    quantity: 0,
                    calculateScore: (quantity) => {
                        if (quantity === 0)
                            return -1;
                        if (quantity === 1)
                            return 1;
                        return 2;
                    },
                },
                {
                    name: 'Unused fields',
                    quantity: 0,
                    calculateScore: (quantity) => {
                        return 0 - quantity;
                    },
                },
                {
                    name: 'Fenced Stable',
                    quantity: 0,
                    calculateScore: (quantity) => {
                        return quantity;
                    },
                },
                {
                    name: 'Clay Rooms',
                    quantity: 0,
                    calculateScore: (quantity) => {
                        return quantity;
                    },
                },
                {
                    name: 'Stone Rooms',
                    quantity: 0,
                    calculateScore: (quantity) => {
                        return quantity * 2;
                    },
                },
                {
                    name: 'Card value points',
                    quantity: 0,
                    calculateScore: (quantity) => {
                        return quantity;
                    },
                },
                {
                    name: 'Bonus points',
                    quantity: 0,
                    calculateScore: (quantity) => {
                        return quantity;
                    },
                },
                {
                    name: 'Begging cards',
                    quantity: 0,
                    calculateScore: (quantity) => {
                        return 0 - (quantity * 3);
                    },
                },
            ],
        };
    },
    computed: {
        totalScore() {
            return this.scoreItems.reduce((total, item) => total + item.calculateScore(item.quantity), 0);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.tfoot, __VLS_intrinsicElements.tfoot)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ colspan: ("2"), });
    (__VLS_ctx.totalScore);
    // @ts-ignore
    [totalScore,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['table'];
        __VLS_styleScopedClasses['table-bordered'];
        __VLS_styleScopedClasses['input-group'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-outline-secondary'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-outline-secondary'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
