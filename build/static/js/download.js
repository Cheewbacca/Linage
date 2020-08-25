// script for change worlds in Download PopUp

function downloadChangeContent(e, target1, target2, content1, content2){
    e.preventDefault();
    target1.classList.remove('active-download-world');
    target2.classList.add('active-download-world');
    content1.style.display = 'block';
    content2.style.display = 'none';
}

try{
    const downloadW1 = document.getElementById('downloadW1');
    const downloadW2 = document.getElementById('downloadW2');

    const requirements = [...document.getElementsByClassName('download-main')];

    downloadW2.classList.remove('active-download-world');
    downloadW1.classList.add('active-download-world');
    requirements[0].style.display = 'block';
    requirements[1].style.display = 'none';

    downloadW1.addEventListener('click', function(e) {
        downloadChangeContent(e, downloadW2, this, requirements[0], requirements[1]);
    });

    downloadW2.addEventListener('click', function(e) {
        downloadChangeContent(e, downloadW1, this, requirements[1], requirements[0]);
    });
}catch(e){
    console.log(e);
}

// end of Download PopUp scripts