/*const doors = document.querySelectorAll('.door');
const today = new Date().getDate();

doors.forEach((door, index) => {
    door.addEventListener('click', () => {
        if (index + 1 <= today) {
            door.classList.add('open');
            // Add your surprise content here, e.g.,
            alert(`Merry Christmas! You opened door ${index + 1}`);
            // You can also use JavaScript to dynamically load images or text.
        } else {
            alert("It's not Christmas yet!");
        }
    });
});*/

document.querySelectorAll('.door').forEach(door => {
    door.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        window.location.href = url;
    });
});