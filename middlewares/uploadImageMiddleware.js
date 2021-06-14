const util = require('util');
const multer = require("multer");
const maxSize = 5 * 1024 * 1024;
const moment = require('moment');

const {DEFAULT_FILE_UPLOAD_FOLDER} = require('../constants');
// const {separateNameAndFileType} = require("./uploadFile")

const separateNameAndFileType = (filename) => {
    let lastFullStopPosition = filename.lastIndexOf(".");
    if(lastFullStopPosition > 0){
      let fileType = filename.substring(lastFullStopPosition + 1);
      let fileName = filename.substring(0, lastFullStopPosition);
      console.log(fileName);
      // process.exit();
      return [fileName, fileType];
    }
   
   return null
}

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // console.log('showing the file ', file);
      cb(null, __basedir + DEFAULT_FILE_UPLOAD_FOLDER);
    },
    filename: (req, file, cb) => {
      console.log('showing the original name ', file.originalname);
       let fileNameAndType =  separateNameAndFileType(file.originalname);
       if(fileNameAndType === null){
        return false;
       }
      file.originalname = fileNameAndType[0]+ '-' + moment().format() + '.' + fileNameAndType[1];
      cb(null, file.originalname);
    },
  });

  let uploadFile = multer({
    storage: storage,
    limits: { fileSize: maxSize },
  }).any();
  
  let uploadImageMiddleware = util.promisify(uploadFile);



  module.exports = uploadImageMiddleware;