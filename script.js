let activeContent = 'none';   // START WITH KG95

function setActiveContent(type) {
    const mapFrame = document.getElementById('mapFrame');
    const textContent = document.getElementById('textContent');
    const kg95Text = document.getElementById('kg95Text');
    const whereBtn = document.getElementById('whereBtn');
    const whatBtn = document.getElementById('whatBtn');

    // Reset all visuals
    mapFrame.style.opacity = '0';
    mapFrame.style.pointerEvents = 'none';

    textContent.style.opacity = '0';
    textContent.style.pointerEvents = 'none';

    kg95Text.style.opacity = '1'; // default visible

    whereBtn.style.backgroundColor = '';
    whereBtn.style.color = '';
    whatBtn.style.backgroundColor = '';
    whatBtn.style.color = '';

    // Apply selected state
    if (type === 'text') {
        kg95Text.style.opacity = '0';
        textContent.style.opacity = '1';
        textContent.style.pointerEvents = 'auto';
        whatBtn.style.backgroundColor = 'black';
        whatBtn.style.color = 'white';
    }

    if (type === 'map') {
        kg95Text.style.opacity = '0';
        mapFrame.style.opacity = '1';
        mapFrame.style.pointerEvents = 'auto';
        whereBtn.style.backgroundColor = 'black';
        whereBtn.style.color = 'white';
    }

    activeContent = type;
}

function toggleStream() {
    if (activeContent === 'text') {
        setActiveContent('none'); // go back to KG95
    } else {
        setActiveContent('text');
    }
}

function toggleMap() {
    if (activeContent === 'map') {
        setActiveContent('none'); // go back to KG95
    } else {
        setActiveContent('map');
    }
}

function showContact() {
    const contactBtn = document.getElementById('contactBtn');
    contactBtn.innerText = "dear@kg95.nl";
}
