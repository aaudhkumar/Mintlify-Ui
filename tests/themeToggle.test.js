describe('Theme Toggle', () => {
    beforeEach(() => {
        // Set up the DOM and localStorage before each test
        document.body.innerHTML = `
            <button id="blue-theme-toggle" aria-label="Toggle blue theme" aria-disabled="false">Toggle Theme</button>
        `;
        localStorage.clear();
    });

    test('should toggle to blue theme', () => {
        const button = document.getElementById('blue-theme-toggle');
        button.click();
        expect(document.body.classList.contains('blue-theme')).toBe(true);
    });

    test('should toggle back to default theme', () => {
        const button = document.getElementById('blue-theme-toggle');
        button.click(); // First click to set blue theme
        button.click(); // Second click to revert to default
        expect(document.body.classList.contains('blue-theme')).toBe(false);
    });

    test('should not toggle if loading', () => {
        const button = document.getElementById('blue-theme-toggle');
        let isLoading = true; // Simulate loading state
        button.click();
        expect(document.body.classList.contains('blue-theme')).toBe(false);
    });

    test('should revert to default theme on error', () => {
        const button = document.getElementById('blue-theme-toggle');
        button.click(); // Set blue theme
        window.dispatchEvent(new Error('Test Error')); // Simulate error
        expect(document.body.classList.contains('blue-theme')).toBe(false);
    });

    test('should handle localStorage not available', () => {
        Object.defineProperty(window, 'localStorage', { value: null }); // Simulate localStorage not available
        const button = document.getElementById('blue-theme-toggle');
        button.click();
        expect(document.body.classList.contains('blue-theme')).toBe(true);
    });

    test('should not toggle if loading state is true', () => {
        const button = document.getElementById('blue-theme-toggle');
        let isLoading = true; // Simulate loading state
        button.click();
        expect(document.body.classList.contains('blue-theme')).toBe(false);
    });

    test('should be accessible via keyboard', () => {
        const button = document.getElementById('blue-theme-toggle');
        button.focus();
        expect(document.activeElement).toBe(button);
    });

    test('should be accessible for screen readers', () => {
        const button = document.getElementById('blue-theme-toggle');
        expect(button.getAttribute('aria-label')).toBe('Toggle blue theme');
    });
});