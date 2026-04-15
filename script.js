function openModal(tipo) {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modal-body');
    modal.style.display = "flex";

    if (tipo === 'demo') {
        body.innerHTML = `
            <h2 style="font-family:'Bebas Neue', sans-serif; font-size:2.5rem; color:var(--purple-light)">MODO DEMO</h2>
            <p style="margin: 1rem 0; color:var(--text-muted)">Has recibido $10.000 tokens virtuales para probar la arquitectura.</p>
            <button class="btn-primary" onclick="closeModal()">ENTENDIDO</button>
        `;
    } else {
        body.innerHTML = `
            <h2 style="font-family:'Bebas Neue', sans-serif; font-size:2.5rem; color:var(--pink)">REGISTRO</h2>
            <p style="margin-bottom:1.5rem">Únete a la plataforma de apuestas más segura de Chile.</p>
            <input type="text" placeholder="RUT (ej: 12.345.678-9)">
            <button class="btn-primary full-width">CREAR CUENTA</button>
        `;
    }
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

// Cerrar si clickean fuera del modal
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) closeModal();
}

// Manejo de formulario de contacto
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensaje enviado. Nuestro equipo de soporte te contactará pronto.');
    this.reset();
});