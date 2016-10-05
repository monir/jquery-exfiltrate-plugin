// jquery exfiltrate plugin
// copyright (c) 2016 Monir Mamoun
// offered under standard MIT license. But if your app contains a credit section, give me credit.
(function($){
	$.fn.exfiltrate = function(selector) {
  	return this.filter(selector).add(this.find(selector));
  }
})(jQuery);

