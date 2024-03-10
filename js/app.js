const copyBtn = document.querySelector('.copyBtn');
copyBtn.addEventListener('click', copyToClipboard.bind(null, copyBtn));

function copyToClipboard() {
    const textToCopy = document.querySelector('.contract_add');
    navigator.clipboard.writeText(textToCopy.innerText)
        .then(() => {
            textToCopy.classList.remove('text-gray-400');
            textToCopy.classList.add('text-pinkgrad');
            copyBtn.classList.remove('text-darkpink');
            copyBtn.classList.add('text-greenn');
            setTimeout(() => {
                textToCopy.classList.remove('text-pinkgrad');
                textToCopy.classList.add('text-gray-400');
                copyBtn.classList.remove('text-greenn');
                copyBtn.classList.add('text-darkpink');
            }, 2000)
        })
        .catch((error) => {
            window.alert('Unable to copy text to clipboard');
        });
};

let muted = true;

const audioBtn = document.querySelector('.audioBtn');
audioBtn.addEventListener('click', () => {
    const video = document.querySelector('video');
    video.muted = !muted;
    audioBtn.src = muted ? '/images/audio.svg' : '/images/audiomute.svg';
    muted = !muted;
})

const arrowRight = document.querySelector('.arrowRight');
const arrowLeft = document.querySelector('.arrowLeft');
const roadCont = document.querySelector('.roadCont');
const roadClass = document.querySelector('.roadClass');

arrowLeft.addEventListener('click', () => {
    roadCont.scroll({
        left: roadCont.scrollLeft - roadClass.scrollWidth * 3,
        behavior: 'smooth'
    })
})

arrowRight.addEventListener('click', () => {
    roadCont.scroll({
        left: roadCont.scrollLeft + roadClass.scrollWidth * 3,
        behavior: 'smooth'
    })
})