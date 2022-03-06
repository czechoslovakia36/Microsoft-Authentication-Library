async function run() {
  console.log("running");
  const config = {
    auth: {
      clientId: "c2765c6d-a554-4da0-817b-3a1f45c9e333",
      authority: "https://login.microsoftonline.com/common",
      redirectUri: "http://localhost:8080",
    },
  };

  var client = new Msal.UserAgentApplication(config);
  var request = {
    scope: ["user.read"],
  };

  let loginResponse = await client.loginPopup(request);
  console.dir(loginResponse);
}
