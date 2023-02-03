let drag = false;
function draggable(el = document.getElementById('draggable')) {
    // console.log(el);

    // sbrnya saya sedikit kurang paham ini pak
    el.addEventListener('mousedown', () => {
        drag = true;
    });

    el.addEventListener('mouseup', () => {
        drag = false;
    });
    
    // paham
    window.addEventListener('mousemove', (e) => {
        // cek status drag
        if(!drag) return;
        
        el.style.left = e.x + "px"
        el.style.top = e.y + "px"
    })
}

// agar function nya berjalan
draggable();