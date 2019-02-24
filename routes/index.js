const express = require('express');
const router = express.Router();
const scraper = require('../public/helpers/scraper');
const asyncHandler = require('express-async-handler');
const rp = require('request-promise');
const $ = require('cheerio');

const linksHash = {
	0: 'apexLink',
	1: 'twitterLink',
	2: 'twitchLink'
};

router.get('/a/:category', function(req, res, next) {
	scraper.get(req.params.category).then(data => res.send({ data }));
});

router.get('/:category', function(req, res, next) {
	let url = `https://apex.tracker.gg/apex/leaderboards/origin/${
		req.params.category
	}`;
	let collection = [];
	rp(url)
		.then(function(html) {
			for (let j = 1; j < 100; j++) {
				$('.trn-table__row', html)
					.eq(j)
					.each((i, row) => {
						let rank = $('.trn-lb-entry__rank', row).text();
						let name = $('.trn-lb-entry__name', row).text();
						let countryFlag = '';
						let countryName = '';
						if ($('img', row).length != 0) {
							countryFlag = $('img', row)[0].attribs.src;
							countryName = $('img', row)[0].attribs.title;
						}

						let links = [];
						if (!!$('a', row)) {
							$('a', row).each((i, playerAnchors) => {
								if (i == 0) {
									links.push({
										[linksHash[i]]: `https://apex.tracker.gg${
											playerAnchors.attribs.href
										}`
									});
								} else {
									links.push({ [linksHash[i]]: playerAnchors.attribs.href });
								}
							});
						}

						let stat = $('.trn-lb-entry__stat', row)
							.eq(0)
							.text();
						let data = {
							rank,
							name,
							countryFlag,
							countryName,
							links,
							stat
						};

						collection.push(data);
					});
			}

			return res.send({ collection });
		})
		.catch(function(err) {
			return res.send({ err: err.message });
		});
});

module.exports = router;
