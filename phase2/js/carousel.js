$.Carousel = function (el) {
  this.$el = $(el);
  this.$images = $(this.$el.find("img"));
  this.activeIndex = 0;
  $(this.$images[0]).addClass("active");
  this.$el.find("a").on("click", this.slide.bind(this));
};

$.Carousel.prototype.slide = function (event) {
  var that = this;
  this.oldIdx = this.activeIndex;

  if (event.target.className === "slide-left") {
    this.classDirection = "left";
    this.oppClassDirection = "right";
    this.newIdx = this.activeIndex - 1;
  } else if (event.target.className === "slide-right") {
    this.classDirection = "right";
    this.oppClassDirection = "left";
    this.newIdx = this.activeIndex + 1;
  };
  
  if (this.newIdx > 4) {
    this.newIdx = 0;
  } else if (this.newIdx < 0) {
    this.newIdx = 4;
  }
  
  this.activeIndex = this.newIdx;
  
  //modify active tag, bestow direction class
  this.$newCat = $(this.$images[this.newIdx])
  this.$oldCat = $(this.$images[this.oldIdx])
  
  this.$oldCat.addClass(this.oppClassDirection);
  this.$newCat.addClass("active").addClass(this.classDirection);
  
  //here, both images have active and direction classes
  
  setTimeout(function() {
    this.$newCat.removeClass(this.oppClassDirection).removeClass(this.classDirection);
  }.bind(this), 0);
// //
//   var that = this;
//     this.$newCat.one("transitionend", function () {
//     this.$oldCat = this.$newCat;
//   });
//
  // these belong at the very end!!!
  this.$oldCat.on("transitionend", function (){
    that.$oldCat.removeClass("left right active")
  })
};

$.fn.carousel = function () {
  return this.each(function () {
    new $.Carousel(this);
  });
};