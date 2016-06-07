function submission_validation() {
   if (document.form1.input_fullname1.value == "" || document.form1.input_email1.value == "") 
   {
      document.getElementById("footer-error-message").textContent = "Please fill out both \"Full name\" and \"Email address\" sections before submit, thank you.";
      if (document.form1.input_fullname1.value == "")
         document.form1.input_fullname1.focus();
      else
         document.form1.input_email1.focus();
      return false;
   }
   else if (document.form1.input_fullname1.value !="" && document.form1.input_email1.value !="")
   {
      window.alert("Your massage to Shawn has been sent, thank you.");
      return true;
   }
}
