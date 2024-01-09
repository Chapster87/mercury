import '../scss/styleguide.scss';

function initCodeSwitch() {
    let codeSwitches = document.querySelectorAll('.code-switch');

    for (var i = 0; i < codeSwitches.length; i++) {
        codeSwitches[i].addEventListener('change', (event) => {
            if (event.currentTarget.checked) {
                event.currentTarget.closest('.guide-block').classList.add('code-active');
            } else {
                event.currentTarget.closest('.guide-block').classList.remove('code-active');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded',function(){
    initCodeSwitch();
});
