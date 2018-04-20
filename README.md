# Aurelia Skeleton Navigation for .NET Core 2.0
### using Razor views and dynamic routes

**Instructions:**

1. Install [NodeJS](https://nodejs.org/en/download/)
2. Install JSPM globally: `npm install -g jspm`
3. Clone/download this project
4. Initialize JSPM: `jspm init`
    - Do this from the root directory of the project. The steps should look something like this:
    ```
    $ jspm init

    warn Running jspm globally, it is advisable to locally install jspm via npm install jspm --save-dev.

    Package.json file does not exist, create it? [yes]:
    Would you like jspm to prefix the jspm package.json properties under jspm? [yes]:
    Enter server baseURL (public folder path) [./]:./wwwroot
    Enter jspm packages folder [wwwroot\jspm_packages]:
    Enter config file path [wwwroot\config.js]:
    Configuration file wwwroot\config.js doesn't exist, create it? [yes]:
    Enter client baseURL (public folder URL) [/]:
    Do you wish to use a transpiler? [yes]:
    Which ES6 transpiler would you like to use, Babel, TypeScript or Traceur? [babel]:
    ok   Verified package.json at package.json
         Verified config file at wwwroot\config.js
         Looking up loader files...
           system-csp-production.js
           system.js
           system.src.js
           system-csp-production.src.js
           system-csp-production.js.map
           system.js.map
           system-polyfills.js.map
           system-polyfills.src.js
           system-polyfills.js

         Using loader versions:
           systemjs@0.19.46
         Looking up npm:babel-core
         Looking up npm:babel-runtime
         Looking up npm:core-js
         Updating registry cache...
    ok   Installed babel as npm:babel-core@^5.8.24 (5.8.38)
         Looking up github:systemjs/plugin-json
         Looking up github:jspm/nodelibs-fs
         Looking up github:jspm/nodelibs-process
         Looking up github:jspm/nodelibs-path
    ok   Installed github:systemjs/plugin-json@^0.1.0 (0.1.2)
    ok   Installed github:jspm/nodelibs-fs@^0.1.0 (0.1.2)
         Looking up npm:process
    ok   Installed github:jspm/nodelibs-process@^0.1.0 (0.1.2)
         Looking up npm:path-browserify
    ok   Installed github:jspm/nodelibs-path@^0.1.0 (0.1.0)
    ok   Installed npm:process@^0.11.0 (0.11.10)
    ok   Installed npm:path-browserify@0.0.0 (0.0.0)
         Looking up github:jspm/nodelibs-assert
         Looking up github:jspm/nodelibs-vm
         Looking up npm:assert
    ok   Installed github:jspm/nodelibs-assert@^0.1.0 (0.1.0)
         Looking up npm:util
    ok   Installed npm:assert@^1.3.0 (1.4.1)
         Looking up npm:vm-browserify
         Looking up npm:inherits
    ok   Installed github:jspm/nodelibs-vm@^0.1.0 (0.1.0)
    ok   Installed npm:util@0.10.3 (0.10.3)
         Looking up npm:indexof
    ok   Installed npm:inherits@2.0.1 (2.0.1)
    ok   Installed npm:vm-browserify@0.0.4 (0.0.4)
    ok   Installed npm:indexof@0.0.1 (0.0.1)
         Looking up github:jspm/nodelibs-buffer
         Looking up github:jspm/nodelibs-util
         Looking up npm:buffer
    ok   Installed github:jspm/nodelibs-buffer@^0.1.0 (0.1.1)
         Looking up npm:base64-js
         Looking up npm:ieee754
    ok   Installed npm:buffer@^5.0.6 (5.1.0)
         Downloading npm:base64-js@1.3.0
    ok   Installed npm:ieee754@^1.1.4 (1.1.11)
    ok   Installed github:jspm/nodelibs-util@^0.1.0 (0.1.0)
    ok   Installed npm:base64-js@^1.0.2 (1.3.0)
    ok   Installed core-js as npm:core-js@^1.1.4 (1.2.7)
    ok   Installed babel-runtime as npm:babel-runtime@^5.8.24 (5.8.38)
    ok   Loader files downloaded successfully
    ```
    - Pay special attention to set the **baseURL** to **./wwwroot**
5. Install Visual Studio Extension: [Package Installer](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.PackageInstaller) (Optional, but highly recommended)
6. That should be about it. Simply build and run the project.
