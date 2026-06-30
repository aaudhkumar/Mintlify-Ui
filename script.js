document.getElementById('github-plugin-button').addEventListener('click', function() {
    // Check for internet connection
    if (!navigator.onLine) {
        alert('Error: No internet connection.');
        return;
    }

    // Open GitHub authentication dialog
    const clientId = 'YOUR_GITHUB_CLIENT_ID';
    const redirectUri = 'YOUR_REDIRECT_URI';
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;
    window.open(authUrl, '_blank');
});
