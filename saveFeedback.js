

function clearFields(){
    console.log("Swaggeroonie");
    document.getElementById("thanks").innerHTML = "<h3>Thanks for your feedback! It has been submitted to a printer that prints it into the trash.</h3><img src=\"/Images/dancingMinion.gif\" alt=\"Under construction animated\"></p>";

    document.getElementById("submitButton").disabled = true;
}
//  function WriteToFile(passForm) {

//     set fso = CreateObject("Scripting.FileSystemObject");  
//     set s = fso.CreateTextFile("C:\guestBookComments.txt", True);
//     s.writeline(document.passForm.input1.value);
//     s.writeline(document.passForm.input2.value);
//     s.writeline(document.passForm.input3.value);
//     s.Close();
//  }