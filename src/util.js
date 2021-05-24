export default (imageURL, imageWidth) => {
  console.log(imageURL);
  const updateImageURL = imageURL.match(/media\/screenshots/)
    ? imageURL.replace('media/screenshots', `media/resize/${imageWidth}/-/screenshots`)
    : imageURL.replace('/media/games/', `/media/resize/${imageWidth}/-/games/`);
  return updateImageURL;
};
