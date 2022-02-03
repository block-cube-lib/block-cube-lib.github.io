'use strict';

function onAcceptButtonClicked() {
  localStorage.setItem('ga_cookie_accept', 'true');
  location.reload();
}

function onDenyButtonClicked() {
  localStorage.setItem('ga_cookie_accept', 'false');
  location.reload();
}

function onResetButtonClicked() {
  localStorage.removeItem('ga_cookie_accept');
  location.reload();
}

function showAcceptMenu() {
  const acceptMenu = document.createElement('div');
  acceptMenu.setAttribute('id', 'ga_cookie_accept_menu');
  acceptMenu.innerHTML = ga_accept_message.replace('\n', "<br>") + `<br><a href="${privacy_policy_url}">プライバシーポリシー</a>`;
  const acceptButtons = document.createElement('div');
  acceptButtons.setAttribute('id', 'ga_cookie_accept_buttons');
  acceptButtons.innerHTML = '<button onClick="onAcceptButtonClicked()">同意する</button>  <button onClick="onDenyButtonClicked()">同意しない</button>';
  acceptMenu.appendChild(acceptButtons);
  document.body.appendChild(acceptMenu);
}

window.addEventListener('DOMContentLoaded', function () {
  const disableKey = 'ga-disable-' + ga_tracking_id;

  const gaCookieAccept = localStorage.getItem('ga_cookie_accept');
  switch (gaCookieAccept) {
    case 'true':
      window[disableKey] = false;
      addResetButton();
      break;
    case 'false':
      window[disableKey] = true;
      addResetButton();
      break;
    default:
      showAcceptMenu();
      break;
  }
})

function addResetButton() {
  const p = document.getElementById("ga_cookie_accept_reset_button_parent");
  p.innerHTML = '<button onClick="onResetButtonClicked()">Cookie使用の同意状態をリセットする</button>';
}
