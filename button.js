const shareBtn = document.getElementById('share-button');
const shareMenu = document.getElementById('share-options');

shareBtn.addEventListener('click', (e) => {
    if(shareMenu.style.display === 'none' || shareMenu.style.display === '') {
        shareMenu.style.display = 'flex';
    } else {
        shareMenu.style.display = 'none';
    }
});