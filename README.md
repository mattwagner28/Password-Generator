# Password-Generator
Password generator with prompts that allow the user to choose the character length, and types of characters used.

#URL 
https://mattwagner28.github.io/Password-Generator/

# User Features
- User is able to generate a password with the character length of their choice, as long as it's no less than 8 characters and no more than 128 characters 
- User is able to confirm whether or not they want their password to include numbers, lowercase letters, uppercase letters, or and/or special characters.
- A password with randomly generated characters to the user's specifications will then appear in the box. 

# Notable Coding Features
- In an early version, I noticed that the random generation would sometimes not generate a selected type of characters. For example, if the user wanted the password to have all four types of characters, there would be a chance the randomization may not actually provide a special character or number. The solution, was to create an array made up of one of each selected character type per the user's choice, and join that to the randomly generated array (later, string). The 'for loop' length is the user character length minus the number of character types the user selected.

# Issues
- I wasn't quite sure how to reset the script if the user wants to generate another password after the first time they use it. If they use it again, it will use their first set of choices, even if they specify otherwise the second time through. 
