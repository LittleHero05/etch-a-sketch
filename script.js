const container = document.querySelector('.container');

for(i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.setAttribute('style','height: 20px; width: 20px; background-color: blue; background: white;');
        container.appendChild(div);
}