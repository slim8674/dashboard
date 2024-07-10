document.addEventListener("DOMContentLoaded", function() {
    function updateStatuses() {
        fetch('/status')
            .then(response => response.json())
            .then(statuses => {
                statuses.forEach(app => {
                    const statusElement = document.getElementById(app.id);
                    if (app.status === 'online') {
                        statusElement.classList.remove('offline');
                        statusElement.classList.add('online');
                    } else {
                        statusElement.classList.remove('online');
                        statusElement.classList.add('offline');
                    }
                });
            })
            .catch(error => {
                console.error('Error fetching status:', error);
            });
    }

    // Initial status update
    updateStatuses();

    // Update statuses every 5 seconds
    setInterval(updateStatuses, 1000);
});
