const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

yesBtn.addEventListener('click', function() {
    alert('Thanks for accepting! He loves u too ❤️');
});

noBtn.addEventListener('mouseover', function() {
    const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});
