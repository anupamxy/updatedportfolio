 
 function goback()
 {
     window.history.back();
 }
 function openGmailCompose() {
    let to = 'anupam2k321@gmail.com'; // Email recipient (leave empty for no recipient)
    let subject = 'Your Subject here'; // Email subject
    let body = 'Your email body here'; // Email body

    let url = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&ui=2&tf=1&pli=1`;
    
    window.location.href = url;
}
// function goback()
// {
//     window.history.back();
// }