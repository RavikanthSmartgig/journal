Ref for Icons:
https://oblador.github.io/react-native-vector-icons/


STEPS TO GENERATE APK

Step 1: Go to expo.dev and Search apk
        ----> https://docs.expo.dev/build-reference/apk/

Step 2: Install eas globally in your terminal
        ----> npm install -g eas-cli

Step 3: Create eas account (sign Up)
        ----> https://expo.dev/signup

Step 4: Create one file in your Project near app.json or root with the name "eas.json"  and paste the code

step 5: Run this command in your vscode terminal
        ----> eas build -p android --profile preview
        It will ask to sign in with your username and password. After entering the credentials (step - 3)re-enter this command
        ----> eas build -p android --profile preview
       
Step 6: After completing the build It appears as Build Success, at bottom it generates one link as "https/.apk" copy the link and open that link in your mobile and  download the app.       