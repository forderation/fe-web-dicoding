import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

function toast (noAutoClose = false) {
  const baseConfig = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: 'toast-bottom-center',
    preventDuplicates: false,
    onclick: null,
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut'
  };
  if (noAutoClose) {
    toastr.options = {
      ...baseConfig,
      showDuration: '-1',
      hideDuration: '-1',
      timeOut: '-1',
      extendedTimeOut: '-1'
    };
  } else {
    toastr.options = {
      ...baseConfig,
      showDuration: '300',
      hideDuration: '1000',
      timeOut: '5000',
      extendedTimeOut: '1000'
    };
  }
  return toastr;
}

export default toast;
