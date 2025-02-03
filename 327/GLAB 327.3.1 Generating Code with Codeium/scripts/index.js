async function fetchCatImage() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        const catImageUrl = data[0].url;

        const imgElement = document.createElement('img');
        imgElement.src = catImageUrl;
        imgElement.alt = "A cute cat";
        document.body.appendChild(imgElement);
    } catch (error) {
        console.error('Error fetching cat image:', error);
    }
}

fetchCatImage();


const dateElement = document.createElement('p');
dateElement.textContent = new Date().toLocaleDateString();
document.body.appendChild(dateElement);


const timeElement = document.createElement('p');
timeElement.textContent = new Date().toLocaleTimeString();
document.body.appendChild(timeElement);


const dayElement = document.createElement('p');
dayElement.textContent = `Today is ${new Date().toLocaleDateString('en-US', { weekday: 'long' })}`;
document.body.appendChild(dayElement);
