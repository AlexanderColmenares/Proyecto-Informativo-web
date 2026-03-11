/**
 * Ajusta la altura del iframe dinámicamente según su contenido.
 * @param {HTMLIFrameElement} iframe - El elemento iframe a redimensionar.
 */
function ajustarIframe(iframe) {
    if (iframe) {
        // Restablecemos la altura para evitar que crezca infinitamente en re-ajustes
        iframe.style.height = "0px";
        const alturaContenido = iframe.contentWindow.document.documentElement.scrollHeight;
        iframe.style.height = alturaContenido + "px";
    }
}
