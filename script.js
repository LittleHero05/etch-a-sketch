const container = document.querySelector('.container');


function getValue() {
        const range = document.querySelector('#size');
        var size = range.value;

        console.log(size);
}

for(i = 0; i < 256; i++) {
        const sqrs = document.createElement("div");
        sqrs.setAttribute('style','height: 30px; width: 30px; background: grey;');
        sqrs.addEventListener("mouseover", () => {
                sqrs.style.background = 'blue';
        })
        container.appendChild(sqrs);
}
