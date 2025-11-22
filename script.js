let activeContent = 'none';
let contactRevealed = false;

function setActiveContent(type) {
    const youtubeFrame = document.getElementById('youtubeFrame');
    const mapFrame = document.getElementById('mapFrame');
    const kg95Text = document.getElementById('kg95Text');
    const whatBtn = document.getElementById('whatBtn');
    const whereBtn = document.getElementById('whereBtn');

    // Reset everything
    if (youtubeFrame) {
        youtubeFrame.style.opacity = '0';
        youtubeFrame.style.pointerEvents = 'none';
    }
    if (mapFrame) {
        mapFrame.style.opacity = '0';
        mapFrame.style.pointerEvents = 'none';
    }
    if (kg95Text) {
        kg95Text.style.opacity = '1';
    }

    whatBtn.style.backgroundColor = '';
    whatBtn.style.color = '';
    whereBtn.style.backgroundColor = '';
    whereBtn.style.color = '';

    // Apply new state
    if (type === 'stream' && youtubeFrame) {
        youtubeFrame.style.opacity = '1';
        youtubeFrame.style.pointerEvents = 'auto';
        if (kg95Text) kg95Text.style.opacity = '0';

        whatBtn.style.backgroundColor = 'black';
        whatBtn.style.color = 'white';
    } else if (type === 'map' && mapFrame) {
        mapFrame.style.opacity = '1';
        mapFrame.style.pointerEvents = 'auto';
        if (kg95Text) kg95Text.style.opacity = '0';

        whereBtn.style.backgroundColor = 'black';
        whereBtn.style.color = 'white';
    } else {
        // 'none' – big KG95 only
        if (kg95Text) kg95Text.style.opacity = '1';
    }

    activeContent = type;
}

function toggleStream() {
    if (activeContent === 'stream') {
        setActiveContent('none');
    } else {
        setActiveContent('stream');
    }
}

function toggleMap() {
    if (activeContent === 'map') {
        setActiveContent('none');
    } else {
        setActiveContent('map');
    }
}

function showContact() {
    const contactBtn = document.getElementById('contactBtn');

    if (!contactRevealed) {
        contactBtn.innerHTML = `
            dear@kg95.nl
            <img class="copy-icon"
                 src="https://cdn-icons-png.flaticon.com/512/4922/4922982.png"
                 alt="copy">
        `;
        contactRevealed = true;
    } else {
        // second and later clicks copy
        navigator.clipboard.writeText('dear@kg95.nl').then(() => {
            contactBtn.innerHTML = `
                dear@kg95.nl
                <svg class="copy-icon" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            `;
        }).catch(() => {
            // fallback: still show checkmark even if copy fails
            contactBtn.innerHTML = `
                dear@kg95.nl
                <svg class="copy-icon" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            `;
        });
    }
}
