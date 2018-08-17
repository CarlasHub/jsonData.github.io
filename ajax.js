const dots = document.querySelectorAll('.container-dots span');
const display = document.querySelector('#display');

const desc = document.querySelector('.descTab');
const features = document.querySelector('.featureTab');

const heading = document.querySelector('.heading');
const price = document.querySelector('.price'); 

const imageBox = document.querySelector('.slideshow-container img');


fetch('./phones.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        let iPhoneData = data[0];

        let rating = iPhoneData.rating;
        let summary = iPhoneData.deviceSummary;

        // resets 
        display.innerHTML = summary[0].displayDescription;
        heading.innerHTML = summary[0].displayName;
        price.innerHTML = '$' + summary[0].priceInfo.hardwarePrice.oneOffPrice.gross;
        imageBox.src = summary[0].merchandisingMedia[0].value;

        let images = [];
        summary.map((item, index) => {
            images.push(item.merchandisingMedia[0].value);
            return images;
        })

        function displayChange(n) {
            desc.addEventListener('click', () => {
              display.innerHTML = summary[n].displayDescription;
            });

            features.addEventListener('click', () => {
                display.innerHTML = `
                  <p>Colour: ${summary[n].colourName}</p>
                  <p>Memory: ${summary[n].memory}</p>
                `;
            });
        }

        function changer(n) {

          imageBox.src = images[n];
          heading.innerHTML = summary[n].displayName;
          price.innerHTML = '$' + summary[n].priceInfo.hardwarePrice.oneOffPrice.gross;
          display.innerHTML = summary[n].displayDescription;

          displayChange(n);

        }


        dots[0].onclick = () => changer(0);
        dots[1].onclick = () => changer(1);
        dots[2].onclick = () => changer(2);
        dots[3].onclick = () => changer(3);
        dots[4].onclick = () => changer(4);
        dots[5].onclick = () => changer(5);

    })
    .catch((error) => console.log(error))