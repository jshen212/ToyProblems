/*
Match	abcdefg	To be completed
Match	abcde	To be completed
Match	abc
*/

// Method 1
string.match(/.*/); // returns array [abcdefg, abcde, abc]

// Method 2
string.match(/\w+/) // returns array [abcdefg, abcde, abc]


/*
Match	abc123xyz	To be completed
Match	define "123"	To be completed
Match	var g = 123;
*/
