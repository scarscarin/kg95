let activeContent = 'none';
let contactRevealed = false;

function setActiveContent(type) {
    const mapFrame = document.getElementById('mapFrame');
    const textContent = document.getElementById('textContent');
    const kg95Text = document.getElementById('kg95Text');
    const whereBtn = document.getElementById('whereBtn');
    const whatBtn = document.getElementById('whatBtn');

    // RESET all visibility
    mapFrame.style.opacity = '0';
    mapFrame.style.pointerEvents = 'none';

    textContent.style.opacity = '0';
    textContent.style.pointerEvents = 'none';

    kg95Text.style.opacity = '1';

    whereBtn.style.backgroundColor = '';
    whereBtn.style.color = '';
    whatBtn.style.backgroundColor = '';
    whatBtn.style.color = '';

    // APPLY new state
    if (type === 'map') {
        mapFrame.style.opacity = '1';
        mapFrame.style.pointerEvents = 'auto';
        kg95Text.style.opacity = '0';

        whereBtn.style.backgroundColor = 'black';
        whereBtn.style.color = 'white';
    }

    if (type === 'text') {
        textContent.style.opacity = '1';
        textContent.style.pointerEvents = 'auto';
        kg95Text.style.opacity = '0';

        whatBtn.style.backgroundColor = 'black';
        whatBtn.style.color = 'white';
    }

    activeContent = type;
}

function toggleMap() {
    if (activeContent === 'map') setActiveContent('none');
    else setActiveContent('map');
}

function toggleStream() {  // now toggles TEXT instead of a stream
    if (activeContent === 'text') setActiveContent('none');
    else setActiveContent('text');
}

function showContact() {
    const contactBtn = document.getElementById('contactBtn');

    if (!contactRevealed) {
        contactBtn.innerHTML = `dear@kg95.nl
            <img class="copy-icon"
            src="https://cdn-icons-png.flaticon.com/512/4922/4922982.png">`;
        contactRevealed = true;
    } else {
        navigator.clipboard.writeText('dear@kg95.nl').then(() => {
            contactBtn.innerHTML = `dear@kg95.nl
                <svg class="copy-icon" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>`;
        });
    }
}
