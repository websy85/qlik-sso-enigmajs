# qlik-sso-enigmajs
An example of using Node.JS to configure a simple SSO example for custom authentication with Qlik Sense and Enigma.JS

The example uses the Node.js and Express to run a simple web server. For more information on the 'Express' module please refer to the Express documentation - http://expressjs.com/

### Pre-requisites:
- Node.js
- Qlik Sense Server

### Configuration:
- Qlik Sense Server
  1. Open the QMC (Qlik Management Console) and navigate to the Virtual 'Proxies' area.
  2. Create or Edit Virtual Proxy. Use the specified prefix value in step 5 below.
  3. Optionally, populate the 'Authentication module redirect URI' with - http://node_server:3000/login
    - Port 3000 is configured in the index.js file of the Node.js site and can be changed if desired.
  4. Navigate to the `Certificates` area of the QMC.
  5. Export the certificate, giving it the name of the Node.js machine. By default this is saved in C:\ProgramData\Qlik\Sense\Repository\Exported Certificates.
  7. Copy the certificate to the root of the Node.js project.
    - NOTE: Refer to the Qlik online help for more information on exporting certificates.
    - [Exporting Certificates](http://help.qlik.com/en-US/sense/November2017/Subsystems/ManagementConsole/Content/export-certificates.htm)
  8. Navigate to the `Content` area of the QMC.
  9. Import the `authstub.html` file (found in the root of this project) into the default content library.

- Node.js
  1. Download or clone the git repository onto your machine.
  2. Open a command/terminal window.
  3. Browse to the directory of the qlik-sso-enigmajs.
  4. Install the necessary dependencies by executing the `npm install` command in this directory.
  5. Using a text editor, open the config.js file and update the following to reflect your environment -
    - SENSE_SERVER - This should be the host name or IP of your Qlik Sense Server
    - SENSE_PORT - The port being used to run Qlik Sense (typically 443).
    - SENSE_PROXY - The prefix of the virtual proxy to use.
    - USER_DIRECTORY - The User Directory to use when creating a ticker for the users logging in.

- Client
  1. Using a text editor, open the `/public/script.js` file and change the `url` property on the `config` object to match your environment.
  2. Change the 2 references to the app id which can be found in the `url` string and in the `qlik.openDoc()` call.

- authstub.html
This file is responsible for getting the necessary cookies added to the browser to ensure that Qlik content can be accessed. This is the simplest way to authenticate when accessing content across domains. When the file is called, a `returnUrl` parameter can be appended to the end of the url to control where the browser should be directed, once the cookie is in place.

To run the solution, execute the `npm start` command in the command prompt window.
For additional information, open a web browser and go to `http://localhost:3000`

To test the login you can go to `http://localhost:3000/login`. If the login was successfully, you should be redirected to the dashboard page. A connection the Qlik Engine API will then be established (using Enigma.js), as the specified user.

Alternatively, if you completed step 3 in the Qlik Sense Server configuration above, you can go directly to `http://localhost:3000/dashboard`.
