var port = localStorage["port_value"];
if (port == null)
  port = "3000";
window.location = "http://localhost:" + port