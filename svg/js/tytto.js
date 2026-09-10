document.getElementById("vaihda-vari").addEventListener("click", function () {
    const mekko = document.getElementById("mekko");

    if (mekko.getAttribute("fill") === "yellow") {
        mekko.setAttribute("fill", "green");
        mekko.setAttribute("stroke", "darkgreen");
    } else {
        mekko.setAttribute("fill", "yellow");
        mekko.setAttribute("stroke", "orange");
    }
});
