document.addEventListener('DOMContentLoaded', function () {
    function checkForIframe(nbrAttempts = 0, maxAttempts = 10) {
        const flipBookContainer = document.querySelector('.flip-book-container');

        if (flipBookContainer && nbrAttempts < maxAttempts) {
            const iframe = flipBookContainer.querySelector('iframe');

            if (iframe) {
                const iframeContent = iframe.contentDocument || iframe.contentWindow.document;

                const demoMsgElement = iframeContent.querySelector('html body div.view > div.demo-msg');

                if (demoMsgElement) {
                    console.log('Element trouvé :', demoMsgElement);
                    demoMsgElement.style.display = 'none';
                } else {
                    console.log(`Element non trouvé, réessaie dans 100 ms... (tentative ${nbrAttempts + 1})`);
                    setTimeout(() => checkForIframe(nbrAttempts + 1), 100);
                }
            } else {
                console.error('L\'iframe n\'a pas été trouvé à l\'intérieur de l\'élément avec la classe "flip-book-container".');
                setTimeout(() => checkForIframe(nbrAttempts + 1), 100);
            }
        } else {
            console.error(`L'élément avec la classe "flip-book-container" n'a pas été trouvé après ${maxAttempts} tentatives.`);
        }
    }

    checkForIframe();
});
