const shareBtn = document.getElementById('share-button');
const shareMenu = document.getElementById('share-options');

shareBtn.addEventListener('click', (e) => {
    if(shareMenu.style.display === 'none' || shareMenu.style.display === '') {
        shareMenu.style.display = 'flex';
        const isExpanded = shareBtn.getAttribute('aria-expanded') === 'true';
        shareBtn.setAttribute('aria-expanded', !isExpanded);
    } else {
        shareMenu.style.display = 'none';
        shareBtn.setAttribute('aria-expanded', 'false');
    }
});