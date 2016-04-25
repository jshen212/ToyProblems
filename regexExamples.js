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

string.match(/.*123.*/);


/*
Match	cat.	To be completed
Match	896.	To be completed
Match	?=+.	To be completed
Skip	abc1
*/

string.match(/.*\./);


/*
Match	can	To be completed
Match	man	To be completed
Match	fan	To be completed
Skip	dan	To be completed
Skip	ran	To be completed
Skip	pan
*/

string.match(/[cmf]an/);


/*
Match	hog	To be completed
Match	dog	To be completed
Skip	bog
*/

string.match(/[^b]og/);

/*
Match	Ana	To be completed
Match	Bob	To be completed
Match	Cpc	To be completed
Skip	aax	To be completed
Skip	bby	To be completed
Skip	ccz
*/

string.match(/[ABC].*/);
