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
});