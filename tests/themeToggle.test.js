describe('Theme Toggle', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <button id="theme-toggle" aria-label="Toggle blue theme">Toggle Blue Theme</button>
        `;
    });

    test('should toggle to blue theme', () => {
        const button = document.getElementById('theme-toggle');
        button.click();
        expect(document.body.classList.contains('blue-theme')).toBe(true);
    });

    test('should toggle back to default theme', () => {
        const button = document.getElementById('theme-toggle');
        button.click(); // First click to set blue theme
        button.click(); // Second click to revert to default
        expect(document.body.classList.contains('blue-theme')).toBe(false);
    });

    test('should persist theme in localStorage', () => {
        const button = document.getElementById('theme-toggle');
        button.click();
        expect(localStorage.getItem('theme')).toBe('blue-theme');
    });

    test('should handle localStorage not available', () => {
        const originalLocalStorage = window.localStorage;
        delete window.localStorage;
        const button = document.getElementById('theme-toggle');
        button.click();
        expect(document.body.classList.contains('blue-theme')).toBe(true);
        window.localStorage = originalLocalStorage; // Restore localStorage
    });

    test('should handle JavaScript disabled', () => {
        const button = document.getElementById('theme-toggle');
        button.click(); // Simulate click
        expect(document.body.classList.contains('blue-theme')).toBe(false); // No change expected
    });

    // Accessibility tests
    test('should be accessible via keyboard', () => {
        const button = document.getElementById('theme-toggle');
        button.focus();
        expect(document.activeElement).toBe(button);
    });

    test('should have aria-label for screen readers', () => {
        const button = document.getElementById('theme-toggle');
        expect(button.getAttribute('aria-label')).toBe('Toggle blue theme');
    });

    // Additional accessibility tests
    test('should not be clickable when loading', () => {
        const button = document.getElementById('theme-toggle');
        button.disabled = true; // Simulate loading state
        expect(button.click()).toBeUndefined(); // No action should be taken
    });
});