const hex = document.querySelector('#hex');
const copy = document.querySelector('.copyToClipboard');
const RgbValue = document.querySelectorAll('.values input');


window.addEventListener('DOMContentLoaded', () => {
    console.log("Sayfa tamamen yüklendi!");

    function RgbToHex(rgb) {
        let get = Number(rgb).toString(16);
        return get;
    }

    function updateHex() {
        let r = RgbToHex(RgbValue[0].value);
        let g = RgbToHex(RgbValue[1].value);
        let b = RgbToHex(RgbValue[2].value);
        if(r.length == 1) {
            if(g.length == 1) {
                if(b.length == 1) {
                    hex.innerHTML = '#' + '0' + r.toUpperCase() + '0' + g.toUpperCase() + '0' + b.toUpperCase();
                }
                else {
                    hex.innerHTML = '#' + r.toUpperCase() + g.toUpperCase() + b.toUpperCase();
                }
            }
            else {
                hex.innerHTML = '#' + r.toUpperCase() + g.toUpperCase() + b.toUpperCase();
            }
        }
        else {
            hex.innerHTML = '#' + r.toUpperCase() + g.toUpperCase() + b.toUpperCase();
        }
    }
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            let allInputsValid = true;
            RgbValue.forEach((input) => {
                let InputValue = Number(input.value)
                if(InputValue < 0 || InputValue > 255 || InputValue == "" || input.value == " ") {
                    allInputsValid = false;
                }
            })
            if(allInputsValid) {
                updateHex()
            }

        }
    })
})

hex.addEventListener('click', function copyToClipboard() {
    let range = document.createRange();
    range.selectNode(hex);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
})
hex.addEventListener("mouseover", (e) => {
    copy.classList.add('active');
    copy.innerHTML = "Copy!"
})
hex.addEventListener("mouseout", () => {
    removeActive()
})

function removeActive() {
    copy.classList.remove('active');
    copy.innerHTML = ""
}
