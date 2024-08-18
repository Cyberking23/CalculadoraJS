const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            try {
                // Evalúa la expresión
                const result = eval(display.value);

                // Verifica si el resultado es NaN
                if (isNaN(result)) {
                    display.value = "Error";
                } else {
                    display.value = result;
                }
            } catch (e) {
                // Manejo de errores de eval
                display.value = "Error";
            }
        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id === "de") {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.textContent;
        }
    });
});
