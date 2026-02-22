// smooth scroll (keep)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if(target){
            target.scrollIntoView({ behavior:"smooth" });
        }
    });
});

const modal = document.getElementById("contactModal");
const btn = document.getElementById("contactBtn");
const closeBtn = document.querySelector(".close");

btn.onclick = function(e){
    e.preventDefault();
    modal.style.display = "flex";
    document.body.classList.add("modal-open");
}

closeBtn.onclick = function(){
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
}

window.onclick = function(e){
    if(e.target === modal){
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }
}

// clear form after submit
const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function(){
    setTimeout(() => {
        form.reset();
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        alert("Appointment request sent successfully!");
    }, 800);
});