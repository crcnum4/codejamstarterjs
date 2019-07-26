## codejam reader js

This is a code reader template that accepts the following input format:
T
S K

T being an integer for how many lines there are below it.
S being a string
K being an integer
(s and k are seperated by a space)

to modify the part under T modify the lines after 30.
if multiple lines are being imported per test case you will need to add additional readCases and the variables will need to be moved out of the function and made more global in scope.

in order to run use the following command:
```
node codejamStarter.js < input.txt > output.txt
```

note that all console.logs will be put into the output.txt instead of the console.