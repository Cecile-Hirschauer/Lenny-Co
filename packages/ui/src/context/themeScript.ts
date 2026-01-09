/**
 * Script à injecter dans <head> pour éviter le flash de thème incorrect
 * Ce fichier n'a PAS de directive 'use client' pour être utilisable côté serveur
 */

const STORAGE_KEY_DEFAULT = 'lenny-theme-preference';

export function getThemeInitScript(storageKey = STORAGE_KEY_DEFAULT): string {
  return `
    (function() {
      try {
        var preference = localStorage.getItem('${storageKey}');
        var theme = preference;
        if (!theme || theme === 'system') {
          theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.classList.add(theme);
      } catch (e) {}
    })();
  `.trim();
}
