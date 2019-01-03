const Drive = use('Drive');

class ImageController {
  upload({ request, params: { id } }) {
    const { _files: images } = request.file('images', {
      types: ['image'],
      size: '2mb'
    });

    if (images.length > 10) {
      return {
        message: 'Limit of files was exceeded',
        data: { length: images.length }
      };
    }

    return Promise.all(
      images.map(async (file, index) => {
        await Drive.put(`${id}/${index}`, file.stream);
      })
    )
      .then(() => ({
        message: 'Files were uploaded',
        data: { productId: id }
      }))
      .catch(() => ({
        message: 'Uploading failed',
        data: { productId: id }
      }));
  }
}

module.exports = ImageController;
