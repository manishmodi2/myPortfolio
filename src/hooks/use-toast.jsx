import * as React from "react";

const TOAST_LIMIT = 1; 
const TOAST_REMOVE_DELAY = 1000000; 

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count;
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
};

const DURATION_OFFSETS = {
  swipeEnd: {
    min: 0.05,
    max: 0.1,
  },
  reset: {
    min: 0.1,
    max: 0.2,
  },
  content: {
    min: 0.8,
    max: 0.9,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case actionTypes.DISMISS_TOAST:
      const { toastId } = action;

      if (toastId) {
        return {
          ...state,
          toasts: state.toasts.map((t) =>
            t.id === toastId ? { ...t, open: false } : t
          ),
        };
      }
      return {
        ...state,
        toasts: state.toasts.map((t) => ({ ...t, open: false })),
      };

    case actionTypes.REMOVE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
    default:
      throw new Error();
  }
}

const ToastContext = React.createContext(null);

export function ToastProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, { toasts: [] });
  const [paused, setPaused] = React.useState(false);
  const timeouts = React.useRef(new Map());
  const removeToast = React.useCallback(
    (toastId) => dispatch({ type: actionTypes.REMOVE_TOAST, toastId }),
    [dispatch]
  );

  React.useEffect(() => {
    state.toasts.forEach((toast) => {
      if (toast.duration && toast.open) {
        if (timeouts.current.has(toast.id)) {
          clearTimeout(timeouts.current.get(toast.id));
        }
        timeouts.current.set(
          toast.id,
          setTimeout(() => removeToast(toast.id), toast.duration)
        );
      }
    });

    return () => {
      timeouts.current.forEach((timeout) => clearTimeout(timeout));
    };
  }, [state.toasts, removeToast]);

  const addToast = React.useCallback(
    (props) => {
      const id = genId();
      const toast = {
        ...props,
        id,
        open: true,
        duration: props.duration || TOAST_REMOVE_DELAY,
      };
      dispatch({ type: actionTypes.ADD_TOAST, toast });
      return {
        id: toast.id,
        dismiss: () => dispatch({ type: actionTypes.DISMISS_TOAST, toastId: toast.id }),
        update: (props) =>
          dispatch({ type: actionTypes.UPDATE_TOAST, toast: { ...toast, ...props } }),
      };
    },
    [dispatch]
  );

  const dismissToast = React.useCallback(
    (toastId) => dispatch({ type: actionTypes.DISMISS_TOAST, toastId }),
    [dispatch]
  );

  const value = React.useMemo(
    () => ({
      toasts: state.toasts,
      addToast,
      dismissToast,
    }),
    [state.toasts, addToast, dismissToast]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}