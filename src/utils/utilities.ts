const imageUrlPattern = /^https?:\/\/.*\.(jpg|jpeg|png|gif|bmp|webp|svg)/i;
const generalUrlPattern = /^https?:\/\/.+/i;
const imagePathPattern = /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i;

const isImageUrl = (string: any) => imageUrlPattern.test(string);

const isGeneralUrl = (string: any) => generalUrlPattern.test(string) && !isImageUrl(string);

const isImagePath = (string: any) => imagePathPattern.test(string);

const classifyString = (string: any) => {
  if (isImageUrl(string)) {
    return "imageURL";
  } else if (isImagePath(string)) {
    return "imagePath";
  } else if (isGeneralUrl(string)) {
    return "generalURL";
  } else {
    return "NA";
  }
};

export {
  isImageUrl,
  isGeneralUrl,
  isImagePath,
  classifyString,
};