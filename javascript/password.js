let state = false;

toggle = () => {
    let input = document.getElementById("password")
    const eye = document.getElementById('eye')

    if (state) {
        input.setAttribute("type", "password");
        eye.style.color = "var(--verde)";
        state = false;
    }

    else {
        input.setAttribute("type", "text");
        eye.style.color = "var(--cinza)";
        state = true;
    }
}

let stateR = false;

toggleRepeate = () => {

    let input = document.getElementById("passwordR")
    const eye = document.getElementById('eyeR')

    if (state) {
        input.setAttribute("type", "password");
        eye.style.color = "var(--verde)";
        state = false;
    }

    else {
        input.setAttribute("type", "text");
        eye.style.color = "var(--cinza)";
        state = true;
    }
}