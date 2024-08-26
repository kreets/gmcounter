export default (await import('vue')).defineComponent({
    props: ['isOpen', 'munchkinStrength', 'closeModal'],
    data() {
        return {
            munchkinBonus: 0,
            helper: null,
            monsters: [
                { originalStrength: 10, bonus: 0 }
            ]
        };
    },
    computed: {
        combinedMonsterStrength() {
            return this.monsters.reduce((total, monster) => total + monster.originalStrength + monster.bonus, 0);
        },
        combinedMunchkinStrength() {
            const munchkinTotal = this.munchkinStrength + this.munchkinBonus;
            const helperTotal = this.helper ? this.helper.originalStrength + this.helper.bonus : 0;
            return munchkinTotal + helperTotal;
        },
        winnerMessage() {
            const munchkinTotal = this.combinedMunchkinStrength;
            const monsterTotal = this.combinedMonsterStrength;
            if (monsterTotal > munchkinTotal) {
                return this.$t('munchkinLose');
            }
            else if (munchkinTotal > monsterTotal) {
                return this.$t('munchkinWin');
            }
            else {
                return this.$t("fightTie");
            }
        }
    },
    methods: {
        increaseMunchkinBonus() {
            this.munchkinBonus++;
        },
        decreaseMunchkinBonus() {
            if (this.munchkinStrength + this.munchkinBonus > 0)
                this.munchkinBonus--;
        },
        resetMunchkinBonus() {
            this.munchkinBonus = 0;
        },
        addMonster() {
            this.monsters.push({ originalStrength: 1, bonus: 0 });
        },
        addHelper() {
            this.helper = { originalStrength: 1, bonus: 0 };
        },
        removeHelper() {
            this.helper = null;
        },
        removeMonster(index) {
            this.monsters.splice(index, 1);
        },
        increaseMonsterBonus(index) {
            this.monsters[index].bonus++;
        },
        increaseHelperBonus() {
            if (this.helper)
                this.helper.bonus++;
        },
        decreaseHelperBonus() {
            if (this.helper && this.helper.originalStrength + this.helper.bonus > 0) {
                this.helper.bonus--;
            }
        },
        decreaseMonsterBonus(index) {
            if (this.monsters[index].originalStrength + this.monsters[index].bonus > 0) {
                this.monsters[index].bonus--;
            }
        },
        close() {
            this.$emit('closeModal');
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
        (__VLS_ctx.$t('munchkinFight'));
        // @ts-ignore
        [isOpen, $t,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-body") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-6") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card text-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
        (__VLS_ctx.$t('currentStrength', { 'strength': Math.max(__VLS_ctx.munchkinStrength + __VLS_ctx.munchkinBonus, 0) }));
        // @ts-ignore
        [$t, munchkinStrength, munchkinBonus,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-body") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.$t('originalStrength', { 'strength': __VLS_ctx.munchkinStrength }));
        // @ts-ignore
        [$t, munchkinStrength,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-footer") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group mb-3") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group-prepend") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.isOpen)))
                        return;
                    __VLS_ctx.decreaseMunchkinBonus(__VLS_ctx.index);
                    // @ts-ignore
                    [decreaseMunchkinBonus, index,];
                } }, ...{ class: ("btn btn-danger btn-sm") }, type: ("button"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("text"), ...{ class: ("form-control text-center form-control-sm") }, value: ((__VLS_ctx.$t('fightModifier', { modifier: (__VLS_ctx.munchkinBonus > 0 ? '+' : '') + __VLS_ctx.munchkinBonus }))), readonly: (true), });
        // @ts-ignore
        [$t, munchkinBonus, munchkinBonus,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group-append") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.isOpen)))
                        return;
                    __VLS_ctx.increaseMunchkinBonus(__VLS_ctx.index);
                    // @ts-ignore
                    [index, increaseMunchkinBonus,];
                } }, ...{ class: ("btn btn-success btn-sm") }, type: ("button"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-content-between mt-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.resetMunchkinBonus) }, ...{ class: ("btn btn-warning mr-3 btn-sm") }, });
        (__VLS_ctx.$t('munchkinReset'));
        // @ts-ignore
        [$t, resetMunchkinBonus,];
        if (!__VLS_ctx.helper) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.addHelper) }, ...{ class: ("btn btn-success ml-4 btn-sm") }, });
            (__VLS_ctx.$t('addHelper'));
            // @ts-ignore
            [$t, helper, addHelper,];
        }
        if (__VLS_ctx.helper) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card text-center mt-2") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
            (__VLS_ctx.$t('munchkinHelper'));
            // @ts-ignore
            [$t, helper,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-body") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
            (__VLS_ctx.$t('originalStrength'));
            // @ts-ignore
            [$t,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("number"), ...{ class: ("form-control") }, min: ("1"), });
            (__VLS_ctx.helper.originalStrength);
            // @ts-ignore
            [helper,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (__VLS_ctx.$t('currentStrength', { 'strength': Math.max(__VLS_ctx.helper.originalStrength + __VLS_ctx.helper.bonus, 0) }));
            // @ts-ignore
            [$t, helper, helper,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-footer") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group mb-3") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group-prepend") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.decreaseHelperBonus) }, ...{ class: ("btn btn-danger btn-sm") }, type: ("button"), });
            // @ts-ignore
            [decreaseHelperBonus,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("text"), ...{ class: ("form-control text-center form-control-sm") }, value: ((__VLS_ctx.$t('fightModifier', { modifier: __VLS_ctx.helper.bonus }))), readonly: (true), });
            // @ts-ignore
            [$t, helper,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group-append") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.increaseHelperBonus) }, ...{ class: ("btn btn-success btn-sm") }, type: ("button"), });
            // @ts-ignore
            [increaseHelperBonus,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.removeHelper) }, ...{ class: ("btn btn-danger btn-sm ml-3 mt-2") }, });
            (__VLS_ctx.$t('removeHelper'));
            // @ts-ignore
            [$t, removeHelper,];
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-6") }, });
        for (const [monster, index] of __VLS_getVForSourceType((__VLS_ctx.monsters))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("card text-center mb-2") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((monster.originalStrength)), ...{ class: ("form-control") }, });
            for (const [n] of __VLS_getVForSourceType((20))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((n)), value: ((n)), });
                (__VLS_ctx.$t('monsterSelect', { level: n, index: index + 1 }));
                // @ts-ignore
                [$t, monsters,];
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-body") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (Math.max(monster.originalStrength + monster.bonus, 0));
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-footer") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group mb-3") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group-prepend") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.isOpen)))
                            return;
                        __VLS_ctx.decreaseMonsterBonus(index);
                        // @ts-ignore
                        [decreaseMonsterBonus,];
                    } }, ...{ class: ("btn btn-danger btn-sm") }, type: ("button"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("text"), ...{ class: ("form-control text-center form-control-sm") }, value: ((__VLS_ctx.$t('fightModifier', { modifier: (monster.bonus > 0 ? '+' : '') + monster.bonus }))), readonly: (true), });
            // @ts-ignore
            [$t,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group-append") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.isOpen)))
                            return;
                        __VLS_ctx.increaseMonsterBonus(index);
                        // @ts-ignore
                        [increaseMonsterBonus,];
                    } }, ...{ class: ("btn btn-success btn-sm") }, type: ("button"), });
            if (index > 0) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                            if (!((__VLS_ctx.isOpen)))
                                return;
                            if (!((index > 0)))
                                return;
                            __VLS_ctx.removeMonster(index);
                            // @ts-ignore
                            [removeMonster,];
                        } }, ...{ class: ("btn btn-danger mt-2 btn-sm") }, });
                (__VLS_ctx.$t('removeMonster'));
                // @ts-ignore
                [$t,];
            }
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.addMonster) }, ...{ class: ("btn btn-success btn-sm mt-3") }, });
        (__VLS_ctx.$t('addMonster'));
        // @ts-ignore
        [$t, addMonster,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-footer d-flex justify-content-between") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.winnerMessage);
        (__VLS_ctx.combinedMunchkinStrength);
        (__VLS_ctx.combinedMonsterStrength);
        // @ts-ignore
        [winnerMessage, combinedMunchkinStrength, combinedMonsterStrength,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.close) }, type: ("button"), ...{ class: ("btn btn-secondary") }, });
        (__VLS_ctx.$t("hideModal"));
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
        __VLS_styleScopedClasses['col-6'];
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['card-header'];
        __VLS_styleScopedClasses['card-body'];
        __VLS_styleScopedClasses['card-footer'];
        __VLS_styleScopedClasses['input-group'];
        __VLS_styleScopedClasses['mb-3'];
        __VLS_styleScopedClasses['input-group-prepend'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-danger'];
        __VLS_styleScopedClasses['btn-sm'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['form-control-sm'];
        __VLS_styleScopedClasses['input-group-append'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-success'];
        __VLS_styleScopedClasses['btn-sm'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['justify-content-between'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-warning'];
        __VLS_styleScopedClasses['mr-3'];
        __VLS_styleScopedClasses['btn-sm'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-success'];
        __VLS_styleScopedClasses['ml-4'];
        __VLS_styleScopedClasses['btn-sm'];
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['card-header'];
        __VLS_styleScopedClasses['card-body'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['card-footer'];
        __VLS_styleScopedClasses['input-group'];
        __VLS_styleScopedClasses['mb-3'];
        __VLS_styleScopedClasses['input-group-prepend'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-danger'];
        __VLS_styleScopedClasses['btn-sm'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['form-control-sm'];
        __VLS_styleScopedClasses['input-group-append'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-success'];
        __VLS_styleScopedClasses['btn-sm'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-danger'];
        __VLS_styleScopedClasses['btn-sm'];
        __VLS_styleScopedClasses['ml-3'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['col-6'];
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['card-header'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['card-body'];
        __VLS_styleScopedClasses['card-footer'];
        __VLS_styleScopedClasses['input-group'];
        __VLS_styleScopedClasses['mb-3'];
        __VLS_styleScopedClasses['input-group-prepend'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-danger'];
        __VLS_styleScopedClasses['btn-sm'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['form-control-sm'];
        __VLS_styleScopedClasses['input-group-append'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-success'];
        __VLS_styleScopedClasses['btn-sm'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-danger'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['btn-sm'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-success'];
        __VLS_styleScopedClasses['btn-sm'];
        __VLS_styleScopedClasses['mt-3'];
        __VLS_styleScopedClasses['modal-footer'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['justify-content-between'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-secondary'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
