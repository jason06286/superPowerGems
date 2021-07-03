import { inject } from 'vue';

export default function useVueSweetAlert2() {
  return inject('$swal');
}
