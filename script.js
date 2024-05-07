function toggleImageAndColor() {
    var imageElement = document.getElementById('emojiImage');
    var bodyElement = document.body;
    
    if (imageElement.src.includes('smile.gif')) {
        imageElement.src = './sad.gif';
    } else {
        imageElement.src = './smile.gif';
    }
    
    if (bodyElement.classList.contains('bg-green')) {
        bodyElement.classList.remove('bg-green');
        bodyElement.classList.add('bg-light-red');
    } else {
        bodyElement.classList.remove('bg-light-red');
        bodyElement.classList.add('bg-green');
    }
}
