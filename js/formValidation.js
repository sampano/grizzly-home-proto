// 1) Update Images Up To Date + High Quality

console.log('hi');

(() => {
  $('.lastModified').html(
    'Last Updated: ' + document.lastModified.split(' ')[0]
  );
})();

const urlPost = 'https://grizzly-elite-api.herokuapp.com/api/v1/submitRoutes/';

// Update session ID
import {
  updateSessionID,
  apiCall,
  closeSession,
} from './../../globalScripts.js';

updateSessionID();
window.addEventListener('beforeunload', closeSession);
///////////////

document
  .getElementById('grizzlySubscription')
  .addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent form submission
    const studentEmail = document.getElementById('studentEmail');

    if (studentEmail.checkValidity()) {
      const emailValue = studentEmail.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(emailValue)) {
        studentEmail.setCustomValidity('Please enter a valid email.');
        studentEmail.reportValidity();
      } else {
        studentEmail.setCustomValidity('');

        // FETCH
        const resIp = await fetch('https://api.ipify.org?format=json');
        const resJsonIp = await resIp.json();
        const ip = resJsonIp.ip;

        const data = {
          email: emailValue,
          site: 'frontPage',
          ip,
        };

        const emailUserJSON = {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const res = await apiCall(urlPost, emailUserJSON);
        if (res) {
          window.location.href =
            'https://grizzlyelite.com/one-on-one-training-session/?main';
        }
      }
    } else {
      studentEmail.setCustomValidity('Please enter a valid email.');
      studentEmail.reportValidity();
    }
  });

document
  .getElementById('grizzlyQuestionForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault();
    const studentName = document.getElementById('studentName');
    const studentEmailQuestion = document.getElementById(
      'studentEmailQuestion'
    );
    const studentMessage = document.getElementById('studentMessage');

    if (
      studentName.checkValidity() &&
      studentEmailQuestion.checkValidity() &&
      studentMessage.checkValidity()
    ) {
      const emailValue = studentEmailQuestion.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(emailValue)) {
        studentEmailQuestion.setCustomValidity('Please enter a valid email.');
        studentEmailQuestion.reportValidity();
      } else {
        studentEmailQuestion.setCustomValidity('');

        const resIp = await fetch('https://api.ipify.org?format=json');
        const resJsonIp = await resIp.json();
        const ip = resJsonIp.ip;

        const data = {
          firstName: studentName.value.trim(),
          email: emailValue,
          message: studentMessage.value.trim(),
          site: 'receivedMessage',
          ip,
        };

        const emailUserJSON = {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const res = await apiCall(urlPost, emailUserJSON);
        if (res) {
          window.location.href =
            'https://grizzlyelite.com/one-on-one-training-session/?main';
        }
      }
    }
  });
