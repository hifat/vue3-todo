import Swal, { SweetAlertIcon } from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

/**
 * Dialog alert
 */
export const swalFire = (icon: SweetAlertIcon, message: string) => {
   Swal.fire({
      icon,
      html: `<p>${message}</p>`,
   })
}

/**
 * Dialog alert confirm
 */
export const swalConfirm = (icon: SweetAlertIcon, message: string, callback = () => {}) => {
   Swal.fire({
      icon,
      html: `<p>${message}</p>`,
      cancelButtonColor: '#d33',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: 'ยกเลิก',
      confirmButtonText: 'ยืนยัน',
   }).then((result) => {
      if (result.isConfirmed) callback()
   })
}

const Toast = Swal.mixin({
   toast: true,
   position: 'bottom-end',
   showConfirmButton: false,
   timer: 2000,
   timerProgressBar: true,
   didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
   },
})

export const swalToast = (icon: SweetAlertIcon, title: string) => {
   Toast.fire({
      icon,
      title,
   })
}
