/*
Description:

Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one letter long.

Examples:

*Example 1*
SubstringTest("Something","Fun"); //Returns false

*Example 2*
SubstringTest("Something","Home"); //Returns true
In the above example, example 2 returns true because both of the inputs contain the substring "me". (soMEthing and hoME)
In example 1, the method will return false because something and fun contain no common substrings. (We do not count the 'n' as a substring in this Kata because it is only 1 character long)

Rules:

Lowercase and uppercase letters are the same. So 'A' == 'a'.
We only count substrings that are > 1 in length.

Input:

Two strings with both lower and upper cases.

Output:

A boolean value determining if there is a common substing between the two inputs.
*/

function SubstringTest(str1, str2){
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  for(var i = 0;i < str2.length-1; i++)
    if(str1.indexOf(str2.slice(i, i+2))>-1)
      return true;
  return false;
}

// function substringtest(s1, s2) {
//   var s1lower = s1.toLowerCase().split('');
//   var s2lower = s2.toLowerCase().split('');
//   var compare = [];
//
//   for(var i = 0; i < s2.length; i++) {
//     if(s1.indexOf(s2[i]) !== -1){
//       compare.push(s1[i]);
//     }
//   }
//
//   return compare.length > 0 && compare.join('') === s2;
// }
