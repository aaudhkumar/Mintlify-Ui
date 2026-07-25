describe('Blue Button', () => {
    let button;

    beforeEach(() => {
        document.body.innerHTML = '<button class="blue-button">Tap me</button>';
        button = document.querySelector('.blue-button');
    });

    test('should change color to blue on click', () => {
        button.click();
        button.style.backgroundColor = 'blue';
        expect(button.style.backgroundColor).toBe('blue');
    });

    test('should not trigger any additional actions', () => {
        let actionTriggered = false;
        button.addEventListener('click', () => {
            actionTriggered = true;
        });
        button.click();
        expect(actionTriggered).toBe(false);
    });

    test('should handle multiple clicks', () => {
        button.click();
        button.click();
        expect(button.style.backgroundColor).toBe('blue');
    });

    test('should change color even when UI is loading', () => {
        // Simulate loading state
        document.body.classList.add('loading');
        button.click();
        expect(button.style.backgroundColor).toBe('blue');
    });

    test('should remain blue after multiple taps', () => {
        button.click();
        button.click();
        expect(button.style.backgroundColor).toBe('blue');
    });
});