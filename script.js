const WA="5500000000000"; // troque pelo número da clínica (DDI+DDD+número)
document.querySelectorAll(".wa").forEach(a=>{a.href="https://wa.me/"+WA+"?text="+encodeURIComponent("Olá! Gostaria de agendar uma avaliação na ImplanFace.");a.target="_blank";a.rel="noopener"});
