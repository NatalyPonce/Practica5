import { useAppStore } from "../store/useAppStore";

const Notifications = () => {
    const { notifications } = useAppStore();

    return (
        <div className="fixed top-5 right-5 z-50">
            {notifications.map(({ id, type, message }) => (
                <div key={id} className={`p-3 mb-2 text-white rounded ${type === "success" ? "bg-green-500" : "bg-red-500"}`}>
                    {message}
                </div>
            ))}
        </div>
    );
};

export default Notifications;
