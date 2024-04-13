const container = document.querySelector('.container');

function gridfromrange() {
        const range = document.querySelector('#size');
        var size = range.value;
        container.innerHTML = '';
        h = 480 / size;
        color = getColor();
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        for(i = 0; i < size*size; i++) {
                const sqrs = document.createElement("div");
                sqrs.setAttribute('style',`height: ${h}px; width: ${h}px; background: grey;`);
                sqrs.addEventListener("mouseover", () => {
                                sqrs.style.background = color;
                        })
                
                container.appendChild(sqrs);
        }
}

function getColor() { 
        const colorInput = document.querySelector('#color');
        const color = colorInput.value;
        return color;
}

