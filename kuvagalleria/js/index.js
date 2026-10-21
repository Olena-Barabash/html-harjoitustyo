const suodatinPainike = document.querySelector(".suodatin-painike");
const suodatinlista = document.querySelector(".suodattimet");

suodatinlista.addEventListener("click", event => {
    if (event.target.matches('input[name="suodatin"]')) {
        const label = event.target.closest("label");

        suodatinPainike.textContent = label.textContent.trim();

        if (suodatinlista.matches(":popover-open")) {
            suodatinlista.hidePopover();
        }
    }
});