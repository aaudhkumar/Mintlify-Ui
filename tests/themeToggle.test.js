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
        expect(document.body.style.backgroundColor).toBe('blue');
        expect(document.body.style.color).toBe('white');

        // Simulate button click again
        button.click();
        expect(document.body.style.backgroundColor).toBe('');
        expect(document.body.style.color).toBe('');
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
        expect(document.body.style.backgroundColor).toBe('blue');
        expect(document.body.style.color).toBe('white');
    });
});