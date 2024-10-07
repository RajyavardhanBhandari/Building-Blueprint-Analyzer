document.getElementById('uploadBtn').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('filePreview').innerHTML = `<img src="${e.target.result}" alt="Preview" width="300">`;
            document.getElementById('progressContainer').style.display = 'block';

            // Simulate processing
            let progress = 0;
            const interval = setInterval(() => {
                if (progress >= 100) {
                    clearInterval(interval);
                    document.getElementById('results').style.display = 'block';
                    document.getElementById('progressContainer').style.display = 'none';
                    // Display results
                    document.getElementById('resultDisplay').innerHTML = 'Analysis complete! Detected floors: 3'; // Example result
                } else {
                    progress += 20; // Increment progress
                    document.getElementById('progressBar').value = progress;
                }
            }, 500); // Simulate processing every half second
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please select a file to upload.');
    }
});
