document.getElementById("btn").addEventListener("click", () => {
    setTimeout(() => {
        document.getElementById("nama").value = "";
        document.getElementById("email").value = "";
        document.getElementById("msg").value = "";
    },5);
})

function toggleMenu() {
document.getElementById("menu").classList.toggle("show")
}