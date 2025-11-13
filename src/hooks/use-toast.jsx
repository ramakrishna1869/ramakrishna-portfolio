
import { useState, useEffect, createContext, useContext } from "react";

const ToastContext = createContext({
  toasts: [],
  toast: () => {},
  dismiss: () => {},
});

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const timers = toasts.map((toast) => {
      if (toast.duration !== Infinity) {
        return setTimeout(() => {
          dismiss(toast.id);
        }, toast.duration);
      }
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [toasts]);

  const toast = (props) => {
    const id = Math.random().toString(36).substring(2, 9);
    const toast = {
      id,
      title: props.title,
      description: props.description,
      action: props.action,
      variant: props.variant || "default",
      duration: props.duration || 5000,
    };

    setToasts((toasts) => [...toasts, toast]);
    return id;
  };

  const dismiss = (id) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const toast = (props) => {
  const { toast } = useToast();
  return toast(props);
};
