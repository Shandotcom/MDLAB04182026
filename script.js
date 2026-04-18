console.log("JS is working!");

const button = document.getElementById("footer-brand");
const email = "shan.gallego04@gmail.com";

button.addEventListener("click", () => {
    navigator.clipboard.writeText(email)
        .then(() => {
            button.classList.add("copied");

            setTimeout(() => {
                button.classList.remove("copied");
            }, 3000);
        }); 
}); 