// Function to play the alarm sound
function playSound() {
    const alarmSound = new Audio('alarm.mp3');
    alarmSound.loop = true; // Loop the sound for continuous play
    alarmSound.play().catch(error => {
        console.error('Error playing sound:', error);
    });
}

// Function to stop the alarm sound
function stopSound() {
    const alarmSound = new Audio('alarm.mp3');
    alarmSound.pause();
    alarmSound.currentTime = 0; // Reset to the beginning
}

// Event listeners for buttons
document.getElementById('activate').addEventListener('click', function() {
    document.getElementById('status').textContent = 'Status: Active';
    document.body.style.backgroundColor = '#ffcccc';
    playSound();
});

document.getElementById('deactivate').addEventListener('click', function() {
    document.getElementById('status').textContent = 'Status: Inactive';
    document.body.style.backgroundColor = '#f4f4f9';
    stopSound();
});
