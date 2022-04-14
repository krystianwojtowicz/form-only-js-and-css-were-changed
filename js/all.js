window.onload = function () {

    // const labels = document.querySelectorAll('label');
    // console.log(labels)

    // function adding (label) {
    //     label.innerText = '';
    //     const img = document.createElement('img');
    //     if (label)
    //     img.src = "images/yoda.png";
    //     label.appendChild(img);
    // }
    // labels.forEach(adding);


    const labelyoda = document.querySelectorAll('label')[0];
    labelyoda.innerText = '';
    const imgyoda = document.createElement('img');
    imgyoda.src = "images/yoda.png";
    labelyoda.appendChild(imgyoda);
    const pyoda = document.createElement('p');
    labelyoda.appendChild(pyoda);
    pyoda.innerText = labelyoda.dataset.sentence;

    const labeltrooper = document.querySelectorAll('label')[1];
    labeltrooper.innerText = '';
    const imgtrooper = document.createElement('img');
    imgtrooper.src = "images/trooper.png";
    labeltrooper.appendChild(imgtrooper);
    const ptrooper = document.createElement('p');
    labeltrooper.appendChild(ptrooper);
    ptrooper.innerText = labeltrooper.dataset.sentence;

    const label = document.querySelectorAll('label')[2];
    label.innerText = '';
    const img = document.createElement('img');
    img.src = "images/vader.png";
    label.appendChild(img);
    const p = document.createElement('p');
    label.appendChild(p);
    p.innerText = label.dataset.sentence;

    let inputs = document.querySelectorAll('input[type="checkbox"]');
    console.log(inputs);
    const sound = new Audio('imperial_march.mp3');
    let checking = 0;
    document.querySelector('button').addEventListener('click', myFunction)

    function myFunction(e) {
        // const checked = document.querySelectorAll('input:checked') !== null;
        // console.log(checked);
        inputs.forEach(input => {
            if (input.checked) {
                if (input.value == 'dark_side') {
                    sound.play();
                    e.preventDefault();
                } else {
                    alert('zbiór zawiera nie tylko postacie z ciemnej strony mocy');
                }
            } else {
                checking++;
                if (checking == 3) {
                    alert('zbiór jest pusty');
                    // e.preventDefault();
                }
                   
            }
        });

    }


    //   }
    // document.querySelector('p[data-sentence="Force is strong in you"]').innerText = document.querySelector('input[data-sentence="Force is strong in you"]').dataset.sentence;
    // document.querySelector(`p[data-sentence="Just chillin'"]`).innerText = document.querySelector(`p[data-sentence="Just chillin'"]`).dataset.sentence;
    // document.querySelector('p[data-sentence="There is no escape from the Dark Side."]').innerText = document.querySelector('p[data-sentence="There is no escape from the Dark Side."]').dataset.sentence;
};