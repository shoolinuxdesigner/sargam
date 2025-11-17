"use client";

import { useEffect } from "react";

export default function ClientProtection({ children }) {
    useEffect(() => {
        // Disable right-click
        const handleContextMenu = (e) => {
            e.preventDefault();
            return false;
        };

        // Disable keyboard shortcuts
        const handleKeyDown = (e) => {
            // Ctrl+U (View source), Ctrl+S (Save), Ctrl+A (Select all)
            if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'a')) {
                e.preventDefault();
                return false;
            }

            // F12 (Developer Tools)
            if (e.key === 'F12') {
                e.preventDefault();
                return false;
            }

            // Ctrl+Shift+I (Developer Tools)
            if (e.ctrlKey && e.shiftKey && e.key === 'I') {
                e.preventDefault();
                return false;
            }
        };

        // Add event listeners
        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);

        // Cleanup event listeners on unmount
        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return <>{children}</>;
}