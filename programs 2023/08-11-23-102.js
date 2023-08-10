/*********************
 * You have to extract a portion of the file name as follows:

Assume it will start with date represented as long number
Followed by an underscore
You'll have then a filename with an extension
it will always have an extra extension at the end
Inputs:
1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

1231231223123131_myFile.tar.gz2
Outputs
FILE_NAME.EXTENSION

This_is_an_otherExample.mpg

myFile.tar
Acceptable characters for random tests:

abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789

The recommended way to solve it is using RegEx and specifically groups.
 * 
 */

//S1
class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    const startIndex = dirtyFileName.indexOf("_") + 1;
    const endIndex = dirtyFileName.lastIndexOf(".");
    const fileName = dirtyFileName.substring(startIndex, endIndex);
    return fileName;
  }
}

//S2
class FileNameExtractor {
  static extractFileName(dFN) {
    return dFN.slice(dFN.indexOf("_") + 1, dFN.lastIndexOf("."));
  }
}
