import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function Alert({ type, message }) {
    const [visible, setVisible] = useState(true);
    const [isDisplayed, setIsDisplayed] = useState(true);

    const colorMap = {
        "error": ["bg-red-300", "border-red-600", "text-red-800"],
        "warning": ["bg-yellow-300", "border-yellow-600", "text-yellow-800"],
        "success": ["bg-emerald-300", "border-emerald-600", "text-emerald-800"]
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            setTimeout(() => {
                setIsDisplayed(false);
            }, 300);
        }, 4000);

        return () => {
            clearTimeout(timer);
            setIsDisplayed(true);
        };
    }, []);

    if (!isDisplayed) return null;

    return (
        <div className={`${colorMap[type].join(" ")} border-2 py-2 px-4 fixed top-4 right-4 z-50 line-clamp items-center gap-4 transition-all duration-300 ${visible ? "flex opacity-1" : "flex opacity-0"}`}>
            <span>{message}</span>
            <button onClick={() => { setVisible(false); setIsDisplayed(false); }} title="Close">
                <i className="bi bi-x text-lg"></i>
            </button>
        </div>
    );
}

Alert.propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};