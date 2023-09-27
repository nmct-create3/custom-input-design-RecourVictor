const handlePasswordSwitcher = function () {
    console.log("handlePasswordSwitcher executed");
    const input = document.querySelector(".js-password-input");
    const toggle = document.querySelector(".js-password-toggle-checkbox");
    toggle.addEventListener("change", function(){
        if (toggle.checked){
            input.type = "text";
        } else {
            input.type = "password";
        }
    })
}

const init = function () {
    console.log('Script loaded!');

    // init password switcher
    handlePasswordSwitcher();

    // Other init functions here
}

init();