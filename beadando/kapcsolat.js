document.addEventListener('DOMContentLoaded', function() {
    function adjustWidth(element) {
        const parent = document.querySelector('.kozep');
        const parentWidth = parent.offsetWidth;
    
        element.style.width = '100%';
    
        let maxWidth = parentWidth - 40;
    
        element.style.maxWidth = maxWidth + 'px';
        const initialWidth = element.dataset.initialWidth || element.offsetWidth;
        element.dataset.initialWidth = initialWidth;
        

        if (element.scrollWidth > initialWidth) {
            let newWidth = element.scrollWidth + 2;
            if (newWidth > maxWidth) {
                newWidth = maxWidth;
            }
            element.style.width = newWidth + 'px';
        }
    }

    const textareas = document.querySelectorAll('.bevitel');
    textareas.forEach(function(textarea) {
        textarea.addEventListener('input', function() {
            adjustWidth(textarea);
        });
        adjustWidth(textarea); 
    });
});