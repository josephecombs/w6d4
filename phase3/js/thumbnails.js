$.Thumbnails = function (el) {
  this.$el = $(el);
  this.$images = $(this.$el.find("img"));
  // var $imgNav = $("<div class='img-nav'></div>");

  // $('.img-nav').append()
  this.currentIndex = 0;
  this.thumbnailIndex = 0;
  this.fillGutter();
  // this.setActiveImage();
  this.setActiveThumb();
  debugger;
  this.$el.find(".gutter > img").on("click", this.fillGutter.bind(this));
  this.$el.find(".gutter > img").on("click", this.setActiveImage.bind(this));
};

$.Thumbnails.prototype.fillGutter = function () {
  this.gutterImage = [];
  for (var i = 0; i < 5; i++) {  
    this.gutterImage.push(this.$images[i])
  }
  
  $('.gutter').append(this.gutterImage);
  
}

$.Thumbnails.prototype.setActiveImage = function () {
  $(this.$images[this.currentIndex]).addClass("active");
}

$.Thumbnails.prototype.setActiveThumb = function () {
  $(this.$images).removeClass("active");
  $(this.$images[this.currentIndex]).addClass("active");
}



$.fn.thumbnails = function () {
  return this.each(function () {
    new $.Thumbnails(this);
  });
};