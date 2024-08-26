import { reactive } from 'vue';

export const themeState = reactive({
    isDarkMode: localStorage.getItem('darkMode') === 'true' || false
});

export function toggleTheme() {
    themeState.isDarkMode = !themeState.isDarkMode;
    document.body.classList.toggle('dark-mode', themeState.isDarkMode);
    localStorage.setItem('darkMode', themeState.isDarkMode);
}