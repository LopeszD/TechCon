document.addEventListener('DOMContentLoaded', function() {
    var eventImage = document.querySelector('.event-image');
    var eventInfo = document.querySelector('.event-info');

    eventImage.addEventListener('mouseover', function() {
        eventInfo.style.right = '0';
        eventInfo.style.opacity = '1'; // torna as informações visíveis
        eventImage.style.marginRight = '20px'; // cria espaço para as informações
    });

    eventImage.addEventListener('mouseout', function() {
        eventInfo.style.right = '-600px';
        eventInfo.style.opacity = '0'; // torna as informações invisíveis novamente
        eventImage.style.marginRight = '0'; // remove o espaço extra
    });
});
