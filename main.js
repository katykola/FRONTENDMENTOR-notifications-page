let notifications = document.querySelectorAll('.notification');
notifications = Array.from(notifications);
const notificationsRead = document.querySelector('.notifications-read');
const notificationsNumberElement = document.querySelector('.notifications-number');

notificationsRead.addEventListener('click', function(){

    notifications.forEach(notification => {
    if(notification.classList.contains('unread')){
        notification.classList.remove('unread')
    }
    })

    notificationsNumberElement.textContent = '0';
})
