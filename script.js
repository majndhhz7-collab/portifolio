// year
document.getElementById("year").textContent = new Date().getFullYear();

// reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add("revealed"); io.unobserve(e.target); }
  });
},{threshold:.2});
revealEls.forEach(el=>io.observe(el));

// mobile menu (show links as overlay if needed - minimal)
const burger = document.querySelector(".burger");
burger?.addEventListener("click", ()=>{
  const nav = document.querySelector(".links");
  if(!nav) return;
  if(getComputedStyle(nav).display === "none"){
    nav.style.cssText = "display:flex; flex-direction:column; gap:14px; position:fixed; top:70px; right:20px; background:#101720; border:1px solid rgba(255,255,255,.08); padding:14px 18px; border-radius:12px; z-index:60;";
  }else{
    nav.style.display = "none";
  }
});
