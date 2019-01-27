export default {
  youtubeLink: function() {
    let containerId = $(this).attr('id');
    routie('/video-link/' + containerId);
  }
};
