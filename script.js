let activeContent = 'none';
let contactRevealed = false;

function toggleStream() {
    const youtubeFrame = document.getElementById('youtubeFrame');
    const mapFrame = document.getElementById('mapFrame');
    const whatBtn = document.getElementById('whatBtn');
    const whereBtn = document.getElementById('whereBtn');

    if (activeContent === 'stream') {
        activeContent = 'none';
        youtubeFrame.style.opacity = '0';
        youtubeFrame.style.pointerEvents = 'none';
        whatBtn.style.backgroundColor = '';
        whatBtn.style.color = '';
    } else {
        activeContent = 'stream';
        youtubeFrame.style.opacity = '1';
        youtubeFrame.style.pointerEvents = 'auto';
        mapFrame.style.opacity = '0';
        mapFrame.style.pointerEvents = 'none';
        whatBtn.style.backgroundColor = 'black';
        whatBtn.style.color = 'white';
        whereBtn.style.backgroundColor = '';
        whereBtn.style.color = '';
    }
}

function toggleMap() {
    const mapFrame = document.getElementById('mapFrame');
    const youtubeFrame = document.getElementById('youtubeFrame');
    const whereBtn = document.getElementById('whereBtn');
    const whatBtn = document.getElementById('whatBtn');

    if (activeContent === 'map') {
        activeContent = 'none';
        mapFrame.style.opacity = '0';
        mapFrame.style.pointerEvents = 'none';
        whereBtn.style.backgroundColor = '';
        whereBtn.style.color = '';
    } else {
        activeContent = 'map';
        mapFrame.style.opacity = '1';
        mapFrame.style.pointerEvents = 'auto';
        youtubeFrame.style.opacity = '0';
        youtubeFrame.style.pointerEvents = 'none';
        whereBtn.style.backgroundColor = 'black';
        whereBtn.style.color = 'white';
        whatBtn.style.backgroundColor = '';
        whatBtn.style.color = '';
    }
}

function showContact() {
    const contactBtn = document.getElementById('contactBtn');

    if (!contactRevealed) {
        contactBtn.innerHTML = `dear@kg95.nl <img class="copy-icon" src="https://cdn-icons-png.flaticon.com/512/4922/4922982.png" alt="copy">`;
        contactRevealed = true;
    } else {
        navigator.clipboard.writeText('dear@kg95.nl').then(() => {
            contactBtn.innerHTML = `dear@kg95.nl <svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,6 9,17 4,12"></polyline></svg>`;
        }).catch(() => {
            contactBtn.innerHTML = `dear@kg95.nl <svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,6 9,17 4,12"></polyline></svg>`;
        });
    }
}