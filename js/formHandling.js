function formHandle() {
    console.log('ahhhhhhhhhhhhhhh');

    const email = document.forms['myForm']['femail'].value
    const pass = document.forms['myForm']['fpass'].value

    alert(email + " " + pass)
}