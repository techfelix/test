document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const output = document.getElementById('output');
    const testBtn = document.getElementById('testBtn');

    if (testBtn) {
        testBtn.addEventListener('click', () => {
            alert('Button was clicked!');
        });
    }
});