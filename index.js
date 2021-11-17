
const CheckPer = () => {

     var name = document.getElementById('name').value;
     var lname = document.getElementById('lname').value;

     if (name == "") {
          alert("Please Enter Your name");
     } else if (name.length <= 2) {
          alert("Min Lenghth is 3 ");
     } else if (!isNaN(name)) {
          alert('Enter Correct Name ')
     }

     else if (lname == "") {
          alert("Please Enter Your name");
     } else if (lname.length <= 2) {
          alert("Min Lenghth is 3 ");
     } else if (!isNaN(lname)) {
          alert('Enter Correct Name ')
     }
     else {
          var loveData = Math.random() * 100;
          loveData = Math.floor(loveData);
          document.getElementById("loveValue").value = loveData + "%";
          document.getElementById("loveValue1").value = loveData + "%";
     }


}




