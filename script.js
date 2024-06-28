function downloadFile() {
    const link = document.createElement('a');
    link.href = './extras/crebollarramirez-resume.pdf';
    link.download = 'crebollarramirez-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}