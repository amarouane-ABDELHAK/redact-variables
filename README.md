[![Build Status](https://travis-ci.com/amarouane-ABDLHAK/redact-variables.svg?branch=master)](https://travis-ci.com/amarouane-ABDLHAK/redact-variables) [![MIT License](https://img.shields.io/aur/license/pac.svg)](https://github.com/amarouane-ABDLHAK/redact-variables/blob/master/LICENSE) ![NPM VErsion](https://img.shields.io/npm/v/redact-variables.svg) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/5ec805e72c214630a65d037cedc6a8e6)](https://www.codacy.com/app/amarouane-ABDLHAK/redact-variables?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=amarouane-ABDLHAK/redact-variables&amp;utm_campaign=Badge_Grade) [![Coverage Status](https://coveralls.io/repos/github/amarouane-ABDLHAK/redact-variables/badge.svg?branch=master)](https://coveralls.io/github/amarouane-ABDLHAK/redact-variables?branch=master)

# Redact variables

## Motivation
Use this product if you want an easy tool to provide a redacted example of the file holding your environement variables.

## How to use
`$npm i redact-variables`
<br>
add `"redact": "redact <path_to_environement_variable_file>"` to your package.json
<br>
`Check <path_to_environement_variable_file>.example`


## Supported files
<li>
Bash
</li>
<li>
JSON
</li>
dotenv
</li>
### Prerequesites

This library is primarily written for node.js. The library makes use of `fs.writeFile` function and hence needs node.js 8.0.0 or higher. If this is a problem for you please open an issue and we may consider using a different function to write into a file so an older node version can be supported.


### Install
With [node.js](http://nodejs.org/) and [npm](https://www.npmjs.com/):

	npm install redact-variables -g

You can now use `redact` from the command line.


### Examples

#### Bash script

If you want to redact all declared variables in a bash script foobar.sh you need to run <br>
`$redact foobar.sh` <br>
This command line will create in the same directory a file foobar.sh.example containing redacted variables.
<br>
foobar.sh contains 
```
export FOO=bar
```
foobar.sh.example contains
```
export FOO=[REDACTED]
```

#### JSON file

If you want to redact all declared variables in a JSON file foobar.json you need to run <br>
`$redact foobar.json` <br>
This command line will create in the same directory a file foobar.json.example containing redacted variables.
<br>
foobar.json contains 
```
{
  "foo" : "bar",
  "other_foo" : {
    "more_foo" : "bar"
  }
}
```
foobar.json.example contains
```
{
  "foo" : [REDACTED],
  "other_foo" : {
    "more_foo" : [REDACTED]
  }
}
```

#### dotenv file

If you want to redact all declared variables in a dotenv file .env you need to run <br>
`$redact .env` <br>
This command line will create in the same directory a file .env.example containing redacted variables.
<br>
.env contains 
```
foo=bar
```
.env.example contains
```
foo=[REDACTED]
```
#### Contribution 
To contribute to this project fork <br>
[Project-URL](https://github.com/amarouane-ABDLHAK/redact-variables)