const kontak = document.getElementById('kontak');
const kontakDropdown = document.getElementById('kontakDropdown');

kontak.addEventListener('click', function() {
    const kontakI = document.querySelector('#kontak i');
    if (kontakI.style.transform === 'rotate(0deg)') {
        kontakI.style.transform = 'rotate(180deg)';
        kontakDropdown.classList.remove('hidden');
    } else {
        kontakI.style.transform = 'rotate(0deg)';
        kontakDropdown.classList.add('hidden');
    }
});