import 'vue-toastification/dist/index.css'
export function toastInfo(toast, message) {
    toast.info(message, {
        position: 'top-center',
        timeout: 2000,
        rtl: true,
    })
}
  
export function toastSuccess(toast, message) {
    toast.success(message, {
        position: 'top-center',
        timeout: 2000,
        rtl: true,
    })
}
  
export function toastError(toast, message) {
    toast.error(message, {
        position: 'top-center',
        timeout: 2000,
        rtl: true,
    })
}
  