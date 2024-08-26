import { themeState } from '../theme';
export default (await import('vue')).defineComponent({
    data() {
        return {
            combatType: 'spaceCombat', // or 'invasion'
            myFleet: [
                { name: 'PDS', count: 0, hits: 0, type: 'both' },
                { name: 'Fighters', count: 0, hits: 0, type: 'spaceCombat' },
                { name: 'Cruiser', count: 0, hits: 0, type: 'spaceCombat' },
                { name: 'Dreadnaught', count: 0, hits: 0, type: 'both' },
                { name: 'Carrier', count: 0, hits: 0, type: 'spaceCombat' },
                { name: 'War sun', count: 0, hits: 0, type: 'both' },
                { name: 'Flagship', count: 0, hits: 0, type: 'both' },
                { name: 'Destroyer', count: 0, hits: 0, type: 'spaceCombat' },
                { name: 'Infantry', count: 0, hits: 0, type: 'invasion' },
                { name: 'Mech', count: 0, hits: 0, type: 'both' },
                { name: 'Other', count: 0, hits: 0, type: 'both' }
            ],
            enemyFleet: [
                { name: 'PDS', count: 0, hits: 0, type: 'both' },
                { name: 'Fighters', count: 0, hits: 0, type: 'spaceCombat' },
                { name: 'Cruiser', count: 0, hits: 0, type: 'spaceCombat' },
                { name: 'Dreadnaught', count: 0, hits: 0, type: 'both' },
                { name: 'Carrier', count: 0, hits: 0, type: 'spaceCombat' },
                { name: 'War sun', count: 0, hits: 0, type: 'both' },
                { name: 'Flagship', count: 0, hits: 0, type: 'both' },
                { name: 'Destroyer', count: 0, hits: 0, type: 'spaceCombat' },
                { name: 'Infantry', count: 0, hits: 0, type: 'invasion' },
                { name: 'Mech', count: 0, hits: 0, type: 'both' },
                { name: 'Other', count: 0, hits: 0, type: 'both' }
            ]
        };
    },
    computed: {
        isSpaceCombat() {
            return this.combatType === 'spaceCombat';
        },
        isInvasion() {
            return this.combatType === 'invasion';
        }
    },
    setup() {
        return { themeState };
    },
    methods: {
        setCombatType(type) {
            this.combatType = type;
        },
        filteredFleet(fleet) {
            return fleet.filter(unit => unit.type === 'both' || unit.type === this.combatType);
        },
        increaseUnit(fleet, index, type) {
            this[fleet][index][type]++;
        },
        decreaseUnit(fleet, index, type) {
            if (this[fleet][index][type] > 0) {
                this[fleet][index][type]--;
            }
        },
        totalHits(fleet) {
            return this[fleet].reduce((total, unit) => total + unit.hits, 0);
        },
        nextRound() {
            this.myFleet.forEach(unit => (unit.hits = 0));
            this.enemyFleet.forEach(unit => (unit.hits = 0));
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row mb-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12 text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.setCombatType('spaceCombat');
                // @ts-ignore
                [setCombatType,];
            } }, ...{ class: ("btn mr-2") }, type: ("button"), ...{ class: (([__VLS_ctx.isSpaceCombat ? 'btn-success' : 'btn-light'])) }, });
    __VLS_styleScopedClasses = ([isSpaceCombat ? 'btn-success' : 'btn-light']);
    (__VLS_ctx.$t('spaceCombat'));
    // @ts-ignore
    [isSpaceCombat, $t,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.setCombatType('invasion');
                // @ts-ignore
                [setCombatType,];
            } }, ...{ class: ("btn") }, type: ("button"), ...{ class: (([__VLS_ctx.isInvasion ? 'btn-success' : 'btn-light'])) }, });
    __VLS_styleScopedClasses = ([isInvasion ? 'btn-success' : 'btn-light']);
    (__VLS_ctx.$t('invasion'));
    // @ts-ignore
    [$t, isInvasion,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12 col-md-6 mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
    (__VLS_ctx.$t('myFleet'));
    // @ts-ignore
    [$t,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-body") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({ ...{ class: ("table table-bordered") }, ...{ class: (({ 'table-dark': __VLS_ctx.themeState.isDarkMode })) }, });
    __VLS_styleScopedClasses = ({ 'table-dark': themeState.isDarkMode });
    __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    (__VLS_ctx.$t('unitType'));
    // @ts-ignore
    [$t, themeState,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    (__VLS_ctx.$t('numberOfUnits'));
    // @ts-ignore
    [$t,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    (__VLS_ctx.$t('hitsInflicted'));
    // @ts-ignore
    [$t,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
    for (const [unit, index] of __VLS_getVForSourceType((__VLS_ctx.filteredFleet(__VLS_ctx.myFleet)))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (unit.name);
        // @ts-ignore
        [filteredFleet, myFleet,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.decreaseUnit('myFleet', index, 'count');
                    // @ts-ignore
                    [decreaseUnit,];
                } }, ...{ class: ("btn btn-outline-secondary btn-sm") }, type: ("button"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("number"), ...{ class: ("form-control form-control-sm text-center") }, readonly: (true), });
        (unit.count);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.increaseUnit('myFleet', index, 'count');
                    // @ts-ignore
                    [increaseUnit,];
                } }, ...{ class: ("btn btn-outline-secondary btn-sm") }, type: ("button"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.decreaseUnit('myFleet', index, 'hits');
                    // @ts-ignore
                    [decreaseUnit,];
                } }, ...{ class: ("btn btn-outline-secondary btn-sm") }, type: ("button"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("number"), ...{ class: ("form-control form-control-sm text-center") }, readonly: (true), });
        (unit.hits);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.increaseUnit('myFleet', index, 'hits');
                    // @ts-ignore
                    [increaseUnit,];
                } }, ...{ class: ("btn btn-outline-secondary btn-sm") }, type: ("button"), });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-footer") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.$t('totalHits'));
    (__VLS_ctx.totalHits('myFleet'));
    // @ts-ignore
    [$t, totalHits,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12 col-md-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
    (__VLS_ctx.$t('enemyFleet'));
    // @ts-ignore
    [$t,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-body") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({ ...{ class: ("table table-bordered") }, ...{ class: (({ 'table-dark': __VLS_ctx.themeState.isDarkMode })) }, });
    __VLS_styleScopedClasses = ({ 'table-dark': themeState.isDarkMode });
    __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    (__VLS_ctx.$t('unitType'));
    // @ts-ignore
    [$t, themeState,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    (__VLS_ctx.$t('numberOfUnits'));
    // @ts-ignore
    [$t,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    (__VLS_ctx.$t('hitsInflicted'));
    // @ts-ignore
    [$t,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
    for (const [unit, index] of __VLS_getVForSourceType((__VLS_ctx.filteredFleet(__VLS_ctx.enemyFleet)))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (unit.name);
        // @ts-ignore
        [filteredFleet, enemyFleet,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.decreaseUnit('enemyFleet', index, 'count');
                    // @ts-ignore
                    [decreaseUnit,];
                } }, ...{ class: ("btn btn-sm btn-outline-secondary") }, type: ("button"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("number"), ...{ class: ("form-control form-control-sm text-center") }, readonly: (true), });
        (unit.count);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.increaseUnit('enemyFleet', index, 'count');
                    // @ts-ignore
                    [increaseUnit,];
                } }, ...{ class: ("btn btn-outline-secondary btn-sm") }, type: ("button"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.decreaseUnit('enemyFleet', index, 'hits');
                    // @ts-ignore
                    [decreaseUnit,];
                } }, ...{ class: ("btn btn-outline-secondary btn-sm") }, type: ("button"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("number"), ...{ class: ("form-control text-center form-control-sm") }, readonly: (true), });
        (unit.hits);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.increaseUnit('enemyFleet', index, 'hits');
                    // @ts-ignore
                    [increaseUnit,];
                } }, ...{ class: ("btn btn-outline-secondary btn-sm") }, type: ("button"), });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-footer") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.$t('totalHits'));
    (__VLS_ctx.totalHits('enemyFleet'));
    // @ts-ignore
    [$t, totalHits,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row mt-3 mb-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12 text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.nextRound) }, ...{ class: ("btn btn-primary") }, });
    (__VLS_ctx.$t('nextRound'));
    // @ts-ignore
    [$t, nextRound,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['mb-3'];
        __VLS_styleScopedClasses['col-12'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['col-12'];
        __VLS_styleScopedClasses['col-md-6'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['card-header'];
        __VLS_styleScopedClasses['card-body'];
        __VLS_styleScopedClasses['table'];
        __VLS_styleScopedClasses['table-bordered'];
        __VLS_styleScopedClasses['input-group'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-outline-secondary'];
        __VLS_styleScopedClasses['btn-sm'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['form-control-sm'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-outline-secondary'];
        __VLS_styleScopedClasses['btn-sm'];
        __VLS_styleScopedClasses['input-group'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-outline-secondary'];
        __VLS_styleScopedClasses['btn-sm'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['form-control-sm'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-outline-secondary'];
        __VLS_styleScopedClasses['btn-sm'];
        __VLS_styleScopedClasses['card-footer'];
        __VLS_styleScopedClasses['col-12'];
        __VLS_styleScopedClasses['col-md-6'];
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['card-header'];
        __VLS_styleScopedClasses['card-body'];
        __VLS_styleScopedClasses['table'];
        __VLS_styleScopedClasses['table-bordered'];
        __VLS_styleScopedClasses['input-group'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-sm'];
        __VLS_styleScopedClasses['btn-outline-secondary'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['form-control-sm'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-outline-secondary'];
        __VLS_styleScopedClasses['btn-sm'];
        __VLS_styleScopedClasses['input-group'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-outline-secondary'];
        __VLS_styleScopedClasses['btn-sm'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['form-control-sm'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-outline-secondary'];
        __VLS_styleScopedClasses['btn-sm'];
        __VLS_styleScopedClasses['card-footer'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['mt-3'];
        __VLS_styleScopedClasses['mb-3'];
        __VLS_styleScopedClasses['col-12'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-primary'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
