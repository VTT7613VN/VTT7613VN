/* global YT */

export default (function() {
	function init(id, el, callback, state) {

		// Set function global so the YouTube API can connect with it.
		window.onYouTubeIframeAPIReady = () => {
			let player = new YT.Player(el, { // eslint-disable-line no-unused-vars
				videoId: id,
				width: '100%',
				height: '100%',
				playerVars: {
					'autoplay': 0,
					'controls': 0,
					'rel' : 0,
					'fs' : 0,
					'playsinline': 1,
				},
				events: {
					'onReady': function(event) {
						callback(event, player);
					},
					'onStateChange': function(event) {
						state(event, player);
					},
				},
			});
		}

		$(window).load(() => {
			isLoaded();
		});
	}

	function isLoaded() {
		if (!window['YT']) {
			var YT = {
				loading: 0,
				loaded: 0,
			};
		}
		if (!window['YTConfig']) {
			var YTConfig = {
				'host': 'http://www.youtube.com',
			};
		}
		if (!YT.loading) {
			YT.loading = 1;
			(function() {
				var l = [];
				YT.ready = function(f) {
					if (YT.loaded) {
						f();
					} else {
						l.push(f);
					}
				};
				window.onYTReady = function() {
					YT.loaded = 1;
					for (var i = 0; i < l.length; i++) {
						try {
							l[i]();
						} catch (e) {
							//
						}
					}
				};
				YT.setConfig = function(c) {
					for (var k in c) {
						if (c.hasOwnProperty(k)) {
							YTConfig[k] = c[k];
						}
					}
				};
				var a = document.createElement('script');
				a.type = 'text/javascript';
				a.id = 'www-widgetapi-script';
				a.src = 'https://s.ytimg.com/yts/jsbin/www-widgetapi-vfl2284kc/www-widgetapi.js';
				a.async = true;
				a.defer = true;
				var c = document.currentScript;
				if (c) {
					var n = c.nonce || c.getAttribute('nonce');
					if (n) {
						a.setAttribute('nonce', n);
					}
				}
				var b = document.getElementsByTagName('script')[0];
				b.parentNode.insertBefore(a, b);
			})();
		}
	}

	return {
		init,
	};
})();
