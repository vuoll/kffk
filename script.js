pip install requests
document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    noBtn.addEventListener('mouseover', function() {
        const containerWidth = document.querySelector('.container').offsetWidth;
        const buttonWidth = noBtn.offsetWidth;
        const buttonHeight = noBtn.offsetHeight;

        const maxX = containerWidth - buttonWidth;
        const maxY = document.querySelector('.container').offsetHeight - buttonHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.position = 'absolute';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    });

    yesBtn.addEventListener('click', function() {
        yesBtn.textContent = ':3';
        yesBtn.style.fontSize = "20px";
        yesBtn.style.padding = "20px 40px";
        yesBtn.style.backgroundColor = "6A5ACD";
        document.querySelector("img").src="https://media1.tenor.com/m/qXGHwTXQM-sAAAAC/cat-cats.gif";
    });
});
