	
				var sizes = [
					[300, 250]
					];

					var PREBID_TIMEOUT = 1000;
					var FAILSAFE_TIMEOUT = 3000;

					var adUnits = [{
					code: '/19968336/header-bid-tag-1',
					mediaTypes: {
					banner: {
					sizes: sizes
					}
					},
					bids: [{
						bidder: 'appnexus',
						params: {
						placementId: 13144370
						}
					}]
					}];
					
					var googletag = googletag || {};
					googletag.cmd = googletag.cmd || [];
					googletag.cmd.push(function() {
					googletag.pubads().disableInitialLoad();
					});
					var pbjs = pbjs || {};
					pbjs.que = pbjs.que || [];

				

					pbjs.que.push(function() {
						pbjs.addAdUnits(adUnits);
						pbjs.requestBids({
						bidsBackHandler: initAdserver,
						timeout: PREBID_TIMEOUT
						});
						pbjs.enableAnalytics({
						provider: 'rivr',
						options: {
						clientID: 'testChallengeClientId',
						authToken: 'testChallengeauthToken',
						bannersIds: [],
						siteCategories: []
						}
						});
						// pbjs.trackPbjsEvent({ "eventType":'ajax' });
					});
	
	
					function initAdserver() {
						if (pbjs.initAdserverSet) return;
						pbjs.initAdserverSet = true;
	
						googletag.cmd.push(function() {
						pbjs.setTargetingForGPTAsync && pbjs.setTargetingForGPTAsync();
							googletag.pubads().refresh();
						});
						}
						// in case PBJS doesn't load
						setTimeout(function() {
							initAdserver();
						}, FAILSAFE_TIMEOUT);
	
						googletag.cmd.push(function() {
						googletag.defineSlot('/19968336/header-bid-tag-1', sizes, 'div-1')
						.addService(googletag.pubads());
						googletag.pubads().enableSingleRequest();
						googletag.enableServices();
						});
	
	