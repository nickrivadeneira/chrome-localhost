// Saves options to localStorage.
function save_options() {
  localStorage["port_value"] = document.getElementById("port_text").value;
}

function restore_options() {
  var port = localStorage["port_value"];
  if (port == null)
    port = "3000";
  document.getElementById("port_text").value = port;
}

function clickHandler(e) {
  setTimeout(save_options, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', clickHandler);
});

document.addEventListener('DOMContentLoaded', restore_options);