if(localStorage.getItem('badge') == 'Admin' || localStorage.getItem('badge') == 'Developer') {
    window.location.replace('admin.html')
  }
  else {
    window.location.replace('404.html')
  } 
