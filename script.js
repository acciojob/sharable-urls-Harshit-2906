// your code here
document.getElementById('button').addEventListener('click', function() {
            // Get values from input fields
            var name = document.getElementById('name').value;
            var year = document.getElementById('year').value;

            // Construct the new URL
            var baseUrl = 'https://localhost:8080/';
            var queryString = '?name=' + encodeURIComponent(name) + '&year=' + encodeURIComponent(year);
            var newUrl = baseUrl + queryString;

            // Update the h3 element with the new URL
            document.getElementById('url').textContent = newUrl;
        });
