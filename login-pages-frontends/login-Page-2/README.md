Most important of all one must add following script in public/index.html In Head:
-> <script src="https://accounts.google.com/gsi/client" async defer></script>
this script allows Auth api to work.

-> now You can use google.accounts.id.\_\_\_
functions which will generate jwt-tokens issued by google as verification
-> Now we have to convert our token in understandable labuage and we use jwt-decoder for thus...
-> npm install jwt-decoder
-> thus the google Auth verification is completed and wwe can get user info in console.
