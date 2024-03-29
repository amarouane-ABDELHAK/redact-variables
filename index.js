'use strict';
const {extname, basename} = require('path')
const {get} = require('lodash')
const fs = require('fs')


const get_file_extension = (filename) => {
  // Returns the file extension
    if (basename(filename).startsWith(".")) {
      return ".dotfile"
    }
    return extname(filename)
}

const redact_file = (file_path, seperator, extra_regex="") => {
  const regex = new RegExp(`(.*)${seperator}${extra_regex}(.*)`, 'g');
  fs.readFile(file_path, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(regex, `$1${seperator}[REDACTED]`);
  
    fs.writeFile(`${file_path}.example`, result, 'utf8', function (err) {
       if (err) return console.log(err);
    });
  });
}


const redact_bash_scripts = file_path => {
    redact_file(file_path, "=")
}

const redact_json_file = file_path => {
 redact_file(file_path, ":", ".*[\"|\']")
}

const not_supported = arg => {
  console.error(`${arg} file type is not supported yet`)
}

const mapping_files = {'.sh': redact_bash_scripts,
'.json': redact_json_file,
".dotfile": redact_bash_scripts
}


const redact =  file_path => {
  const extension = get_file_extension(file_path);
  get(mapping_files, extension, not_supported)(file_path);
}

module.exports = {redact, mapping_files, get_file_extension, redact_json_file, not_supported}

