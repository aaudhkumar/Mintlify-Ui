describe('Blue Theme Toggle', () => {
    let button;

    beforeEach(() => {
        document.body.innerHTML = `
            <button id='blue-theme-button' aria-label='Toggle blue theme' class='btn-secondary'>Blue Theme</button>
        `;
        button = document.getElementById('blue-theme-button');
    });

    test('should toggle blue theme on button click', () => {
        // Simulate button click
        button.click();
        expect(document.body.classList.contains('blue-theme')).toBe(true);

        // Simulate button click again
        button.click();
        expect(document.body.classList.contains('blue-theme')).toBe(false);
    });

    test('should persist theme across sessions', () => {
        // Simulate setting the theme in localStorage
        localStorage.setItem('isBlueTheme', 'true');
        // Reload the page
        document.body.innerHTML = `
            <button id='blue-theme-button' aria-label='Toggle blue theme' class='btn-secondary'>Blue Theme</button>
        `;
        button = document.getElementById('blue-theme-button');
        // Check if the theme is applied
        expect(document.body.classList.contains('blue-theme')).toBe(true);
    });

    test('should handle edge case when localStorage is not available', () => {
        const originalLocalStorage = window.localStorage;
        delete window.localStorage;
        button.click();
        expect(document.body.classList.contains('blue-theme')).toBe(false);
        window.localStorage = originalLocalStorage;
    });

    test('should handle edge case when JavaScript is disabled', () => {
        const originalAddEventListener = button.addEventListener;
        button.addEventListener = () => {};
        button.click();
        expect(document.body.classList.contains('blue-theme')).toBe(false);
        button.addEventListener = originalAddEventListener;
    });

    test('should not toggle when loading', () => {
        document.body.classList.add('loading');
        button.click();
        expect(document.body.classList.contains('blue-theme')).toBe(false);
    });

    // Accessibility tests
    test('should be accessible via keyboard navigation', () => {
        const event = new KeyboardEvent('keydown', { key: 'Enter' });
        button.dispatchEvent(event);
        expect(document.body.classList.contains('blue-theme')).toBe(true);
    });

    test('should have ARIA attributes', () => {
        expect(button.getAttribute('aria-label')).toBe('Toggle blue theme');
    });

    // New accessibility test for keyboard navigation
    test('should be operable via keyboard navigation', () => {
        const event = new KeyboardEvent('keydown', { key: 'Enter' });
        button.dispatchEvent(event);
        expect(document.body.classList.contains('blue-theme')).toBe(true);
    });
});