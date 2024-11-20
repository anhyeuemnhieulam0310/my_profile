function toggleContent(id) {
    const element = document.getElementById(id);
    if (element.style.display === 'block') {
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.display = 'none';
            element.style.height = '0';
        }, 300); 
    } else {
        element.style.display = 'block';
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.height = 'auto';
        }, 10);
    }
}


