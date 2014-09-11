$.Tabs = function (el) { 
  this.$el = $(el);
  this.$contentTabs = $(this.$el.data("content-tabs"));
  this.activeTab = $(this.$contentTabs.contents(".active"));
  this.$el.find("a").on('click', this.clickTab.bind(this));
};

$.Tabs.prototype.clickTab = function (event) {
  var $activeLink = $(event.currentTarget);
  this.$el.find('.active').removeClass("active");
  $activeLink.addClass("active"); 
    
  var newActiveTab = this.$contentTabs.find($activeLink.attr("href"))
  newActiveTab.addClass('transitioning');
  this.activeTab.removeClass('active');
 
  setTimeout(function() {
    newActiveTab.removeClass('transitioning').addClass('active');
  }.bind(this), 0);
 
  var that = this;
    newActiveTab.one("transitionend", function () {
    that.activeTab = newActiveTab;
  }); 
};

$.fn.tabs = function () {
  return this.each(function () {
    new $.Tabs(this);
  });
};