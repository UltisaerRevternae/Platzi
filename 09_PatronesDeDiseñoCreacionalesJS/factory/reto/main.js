class Notification {
  sendMessage(message) {
    throw new Error('This method not implemented')
  }
}
class NotificationEMAIL extends Notification {
  sendMessage(message){
    return `Notifications via email : ${message}`
  }
}
class NotificacionSMS extends Notification {
  sendMessage(message){
    return `Notifications sms : ${message}`
  }
}
class NotificationPUSH extends Notification {
  sendMessage(message){
    return `Notifications push : ${message}`
  }
}
function factoryNotifications(type) {
  const notifications = {
    sms: NotificacionSMS,
    push: NotificationPUSH,
    email: NotificationEMAIL
  }
  const NotificationType = notifications[type]
  if (!NotificationType) {
    throw new Error(`Notification type '${type}' is not recognized`);
  }
  return new NotificationType()
}

let notificationUser = factoryNotifications('sms')
console.log(notificationUser.sendMessage('First Notification'))
notificationUser = factoryNotifications('email')
console.log(notificationUser.sendMessage('New message via email'))