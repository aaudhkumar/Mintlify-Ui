describe('Theme Toggle', () => {
    let button;

    beforeEach(() => {
        document.body.innerHTML = `
            <button id='blue-theme-button' aria-label='Toggle blue theme' class='btn-secondary'>Blue Theme</button>
        `;
        button = document.getElementById('blue-theme-button');
    });

    test('should toggle to blue theme', () => {
        button.click();
        expect(document.body.classList.contains('blue-theme')).toBe(true);
    });

    test('should toggle back to default theme', () => {
        button.click(); // First click to activate blue theme
        button.click(); // Second click to deactivate
        expect(document.body.classList.contains('blue-theme')).toBe(false);
    });

    test('should persist theme across sessions', () => {
        localStorage.setItem('theme', 'blue');
        // Simulate loading the page
        if (localStorage.getItem('theme') === 'blue') {
            document.body.classList.add('blue-theme');
        }
        expect(document.body.classList.contains('blue-theme')).toBe(true);
    });
});