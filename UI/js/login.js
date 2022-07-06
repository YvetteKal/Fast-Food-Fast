function login(e) {
    //console.log(1234567854);
    e.preventDefault(); 
  
    var adminLoginCheck = document.getElementById("admin-login");
  
    if (adminLoginCheck && adminLoginCheck.checked) {
        
       window.location.href = "https://yvettekal.github.io/Fast-Food-Fast/UI/admin-order-page.html"
      return
    }
  
     window.location.href = "https://yvettekal.github.io/Fast-Food-Fast/UI/user-orders.html"
    return
  }