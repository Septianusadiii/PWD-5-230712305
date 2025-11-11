function fn_ValForm() {
  var sMsg = "";
  
  // Hint Regular Expression
  // Regex berikut dibuat berdasarkan interpretasi/perbaikan dari hint yang ada di PDF:
  // "[a-z0-9][a-z0-9\_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_.-]{0,}[a-z0-9]\.[a-z0-9]{2,4}"
  var emailRegex = new RegExp("^[a-z0-9][a-z0-9_.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_.-]{0,}[a-z0-9]\\.[a-z0-9]{2,4}$", "i");

  // Validasi Nama
  if (document.getElementById("name").value == "") { 
    sMsg += "\n* Anda belum mengisikan nama";
  }

  // Validasi Email (Dimodifikasi) [cite: 316]
  var emailValue = document.getElementById("email").value;
  if (emailValue == "") { 
    sMsg += "\n* Anda belum mengisikan email"; // Penyesuaian dari 
  } else if (!emailRegex.test(emailValue)) {
    sMsg += "\n* Format email tidak valid"; // Tambahan validasi
  }

  // Validasi Pesan
  if (document.getElementById("message").value == "") { 
    sMsg += "\n* Anda belum mengisikan pesan"; 
  }

  // Tampilkan Peringatan
  if (sMsg != "") { 
    alert("Peringatan: \n" + sMsg); 
    return false; 
  } else {
    return true; 
  }
}