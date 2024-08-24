function downloadFile() {
    const link = document.createElement('a');
    link.href = './extras/crebollar-resume.pdf';
    link.download = 'crebollar-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}