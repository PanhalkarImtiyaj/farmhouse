/**
 * Utility function to inject CSS into the DOM via <style> tags
 * This ensures no external CSS files are created in the build
 */

const injectedStyles = new Set();

/**
 * Injects CSS into the document head
 * @param {string} css - The CSS string to inject
 * @param {string} id - Unique identifier for the style tag
 */
export function injectStyles(css, id) {
    // Avoid duplicate injection
    if (injectedStyles.has(id)) {
        return;
    }

    // Check if style tag already exists
    if (document.getElementById(id)) {
        injectedStyles.add(id);
        return;
    }

    // Create and inject style tag
    const style = document.createElement('style');
    style.id = id;
    style.textContent = css;
    document.head.appendChild(style);

    injectedStyles.add(id);
}

/**
 * Removes injected styles from the DOM
 * @param {string} id - The ID of the style tag to remove
 */
export function removeStyles(id) {
    const styleElement = document.getElementById(id);
    if (styleElement) {
        styleElement.remove();
        injectedStyles.delete(id);
    }
}

/**
 * Updates existing injected styles
 * @param {string} css - The new CSS string
 * @param {string} id - The ID of the style tag to update
 */
export function updateStyles(css, id) {
    const styleElement = document.getElementById(id);
    if (styleElement) {
        styleElement.textContent = css;
    } else {
        injectStyles(css, id);
    }
}

export default injectStyles;
