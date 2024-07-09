document.addEventListener("DOMContentLoaded", function() {
    fetch('/status')
        .then(response => response.json())
        .then(statuses => {
            statuses.forEach(app => {
                const statusElement = document.getElementById(app.id);
                if (app.status === 'online') {
                    statusElement.classList.add('online');
                } else {
                    statusElement.classList.add('offline');
                }
            });
        })
        .catch(error => {
            console.error('Error fetching status:', error);
        });
});
