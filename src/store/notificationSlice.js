export const createNotificationSlice = (set) =>({
    notifications: [],

    addNotification: (type, message) => {
        const id = Date.now();
        set((state) => ({
            notifications: [...state.notifications, {id, type,message}]
        }));

        //Eliminar notificacion despues de 3 segundos
        setTimeout(()=>{
            set((state) => ({
                notifications: state.notifications.filter(notification=> notification.id !== id)
            }));
        }, 3000);
    }
})