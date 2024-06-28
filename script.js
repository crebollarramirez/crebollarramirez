function downloadFile() {
    // Replace 'path/to/your/file.pdf' with the actual path to your file
    const fileUrl = './extras/crebollarramirez-resume.pdff';
    const fileName = 'crebollarramirez-resume.pdf';

    fetch(fileUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        // Set the filename to be downloaded
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Error downloading file:', error));
  }