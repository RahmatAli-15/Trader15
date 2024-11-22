import { toast } from 'react-toastify';

export const handleSuccess = (msg) => {
    toast.success(msg, {
        position: 'top-right'
    })
}

export const handleError = (msg) => {
    toast.error(msg, {
        position: 'top-right'
    })
}

// Updated for Vite environment variables
export const APIUrl = import.meta.env.VITE_API_URL || 'https://trader15.onrender.com';
