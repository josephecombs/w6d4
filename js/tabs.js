$.Tabs = function (el) { 
  this.$el = $(el);
  this.$contentTabs = $(this.$el.data("content-tabs"));
  this.activeTab = $(this.$contentTabs.contents(".active"));
  
  $("a").on('click', this.clickTab.bind(this));
  
  // this.$el.on('click', 'a', this.clickTab());
};

$.Tabs.prototype.clickTab = function (event) {
  
  this.$contentTabs.children().removeClass("active");
  $(this.$el.filter(".tabs")).children().children().removeClass("active");
  var id = $(event.currentTarget).attr("href");
  $(id).addClass("active");
  $(event.currentTarget).addClass("active");
};

$.fn.tabs = function () {
  return this.each(function () {
    new $.Tabs(this);
  });
};