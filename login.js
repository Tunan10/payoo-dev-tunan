document.getElementById('login-btn').addEventListener('click', function () {
  //1-get the mobile number input
  const numberInput = document.getElementById('input-number');
  const contactNumber = numberInput.value;
  console.log(contactNumber);
  //2-get the pin
  const inputPin = document.getElementById('input-pin');
  const pinNumber = inputPin.value;
  console.log(pinNumber);
  //3- match pin & mobile
  if (contactNumber == '01772597912' && pinNumber == '2510') {
    alert('login Success');
    window.location.assign('/home.html');
    // window.location.replace('../home.html');
  } else {
    alert('Login Fail');
    return;
  }
});
