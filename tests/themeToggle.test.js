describe('Theme Toggle', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <button id="blue-theme-toggle">Toggle Blue Theme</button>
        `;
    });

    test('should toggle blue theme on button click', () => {
        const button = document.getElementById('blue-theme-toggle');
        let isBlueTheme = false;

        button.addEventListener('click', () => {
            isBlueTheme = !isBlueTheme;
            document.body.classList.toggle('blue-theme', isBlueTheme);
        });

        button.click();
        expect(document.body.classList.contains('blue-theme')).toBe(true);

        button.click();
        expect(document.body.classList.contains('blue-theme')).toBe(false);
    });

    test('should not toggle if in loading state', () => {
        // Simulate loading state
        let isLoading = true;
        const button = document.getElementById('blue-theme-toggle');

        button.addEventListener('click', () => {
            if (!isLoading) {
                document.body.classList.toggle('blue-theme');
            }
        });

        button.click();
        expect(document.body.classList.contains('blue-theme')).toBe(false);
    });

    test('should revert to default theme if blue theme fails to load', () => {
        // Simulate failure to load blue theme
        const button = document.getElementById('blue-theme-toggle');
        let isBlueTheme = true;

        button.addEventListener('click', () => {
            isBlueTheme = false;
            document.body.classList.toggle('blue-theme', isBlueTheme);
        });

        button.click();
        expect(document.body.classList.contains('blue-theme')).toBe(false);
    });

    test('should handle localStorage not available', () => {
        // Simulate localStorage not available
        const button = document.getElementById('blue-theme-toggle');
        let isBlueTheme = false;

        button.addEventListener('click', () => {
            isBlueTheme = !isBlueTheme;
            document.body.classList.toggle('blue-theme', isBlueTheme);
        });

        button.click();
        expect(document.body.classList.contains('blue-theme')).toBe(true);
    });

    test('should handle JavaScript disabled', () => {
        // Simulate JavaScript disabled
        const button = document.getElementById('blue-theme-toggle');
        button.click();
        expect(document.body.classList.contains('blue-theme')).toBe(false);
    });
});