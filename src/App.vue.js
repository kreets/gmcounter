import { useRoute, useRouter } from 'vue-router';
import { themeState, toggleTheme } from './theme';
import SettingsPanel from './components/SettingsPanel.vue';
export default (await import('vue')).defineComponent({
    components: {
        SettingsPanel
    },
    data() {
        return {
            isSettingsOpen: false,
        };
    },
    methods: {
        openSettings() {
            this.isSettingsOpen = true;
        },
        closeSettings() {
            this.isSettingsOpen = false;
        },
        applyDarkMode(isDark) {
            themeState.isDarkMode = isDark;
            document.body.classList.toggle('dark-mode', isDark);
            localStorage.setItem('darkMode', isDark);
        }
    },
    created() {
        const savedTheme = localStorage.getItem('darkMode');
        if (savedTheme) {
            this.isDarkMode = savedTheme === 'true';
            document.body.classList.toggle('dark-mode', this.isDarkMode);
        }
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const gameName = route.params?.name || 'Score Counter';
        const games = ['Munchkin', 'TicketToRide', 'Agricola', 'Twilight'];
        const selectGame = (game) => {
            router.push({ name: 'GameCounter', params: { name: game } });
        };
        return {
            gameName,
            games,
            selectGame,
            themeState,
            toggleTheme
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("app"), ...{ class: ("container-fluid") }, ...{ class: (({ 'dark-mode': __VLS_ctx.isDarkMode })) }, });
    __VLS_styleScopedClasses = ({ 'dark-mode': isDarkMode });
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("d-flex justify-content-between align-items-center py-3 mb-4 border-bottom") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("h3") }, });
    (__VLS_ctx.gameName);
    // @ts-ignore
    [isDarkMode, gameName,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("button"), ...{ class: ("btn btn-primary") }, "data-bs-toggle": ("modal"), "data-bs-target": ("#gameModal"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.openSettings) }, type: ("button"), ...{ class: ("btn btn-link") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ xmlns: ("http://www.w3.org/2000/svg"), width: ("24"), height: ("24"), fill: ("currentColor"), viewBox: ("0 0 16 16"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M9.405 1.05a1.12 1.12 0 0 0-2.81 0l-.094.433a1.12 1.12 0 0 1-1.26.878l-.451-.071a1.12 1.12 0 0 0-1.217 1.217l.071.451c.078.497-.185 1.018-.878 1.26l-.433.094a1.12 1.12 0 0 0 0 2.81l.433.094c.693.242.956.763.878 1.26l-.071.451a1.12 1.12 0 0 0 1.217 1.217l.451-.071a1.12 1.12 0 0 1 1.26.878l.094.433a1.12 1.12 0 0 0 2.81 0l.094-.433c.242-.693.763-.956 1.26-.878l.451.071a1.12 1.12 0 0 0 1.217-1.217l-.071-.451a1.12 1.12 0 0 1 .878-1.26l.433-.094a1.12 1.12 0 0 0 0-2.81l-.433-.094a1.12 1.12 0 0 1-.878-1.26l.071-.451a1.12 1.12 0 0 0-1.217-1.217l-.451.071a1.12 1.12 0 0 1-1.26-.878l-.094-.433zM8 5.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5z"), });
    // @ts-ignore
    [openSettings,];
    // @ts-ignore
    const __VLS_0 = {}
        .SettingsPanel;
    ({}.SettingsPanel);
    __VLS_components.SettingsPanel;
    // @ts-ignore
    [SettingsPanel,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClose': {} }, ...{ 'onUpdateTheme': {} }, isOpen: ((__VLS_ctx.isSettingsOpen)), currentDarkMode: ((__VLS_ctx.themeState.isDarkMode)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClose': {} }, ...{ 'onUpdateTheme': {} }, isOpen: ((__VLS_ctx.isSettingsOpen)), currentDarkMode: ((__VLS_ctx.themeState.isDarkMode)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClose': {} }, ...{ 'onUpdateTheme': {} }, isOpen: ((__VLS_ctx.isSettingsOpen)), currentDarkMode: ((__VLS_ctx.themeState.isDarkMode)), }));
    let __VLS_6;
    const __VLS_7 = {
        onClose: (__VLS_ctx.closeSettings)
    };
    const __VLS_8 = {
        onUpdateTheme: (__VLS_ctx.applyDarkMode)
    };
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    let __VLS_3;
    let __VLS_4;
    // @ts-ignore
    [isSettingsOpen, themeState, closeSettings, applyDarkMode,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
    // @ts-ignore
    const __VLS_9 = {}
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
    const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
    ({}({}));
    const __VLS_14 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_9, __VLS_11));
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
        __VLS_styleScopedClasses['btn'];
        __VLS_styleScopedClasses['btn-link'];
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
    const __VLS_componentsOption = {
        SettingsPanel
    };
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
