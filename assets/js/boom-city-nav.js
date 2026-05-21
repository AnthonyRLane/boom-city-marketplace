(function () {
	var navItems = [
		{
			key: 'index.html',
			label: 'Home',
			href: 'index.html',
			icon: '<i class="ki-duotone ki-home-2 fs-2"><span class="path1"></span><span class="path2"></span></i>'
		},
		{
			key: 'marketplace.html',
			label: 'Marketplace',
			href: 'marketplace.html',
			icon: '<i class="ki-duotone ki-magnifier fs-2"><span class="path1"></span><span class="path2"></span></i>'
		},
		{
			key: 'map.html',
			label: 'Map',
			href: 'map.html',
			icon: '<i class="ki-duotone ki-geolocation fs-2"><span class="path1"></span><span class="path2"></span></i>'
		},
		{
			key: 'favorites.html',
			label: 'Favorites',
			href: 'favorites.html',
			icon: '<i class="ki-duotone ki-heart fs-2"><span class="path1"></span><span class="path2"></span></i>'
		}
	];

	function currentPage() {
		var page = window.location.pathname.split('/').pop() || 'index.html';
		return page === '' ? 'index.html' : page;
	}

	function renderNav() {
		if (document.querySelector('.stand-nav')) return;

		var page = currentPage();
		var nav = document.createElement('nav');
		nav.className = 'stand-nav';
		nav.setAttribute('role', 'navigation');
		nav.setAttribute('aria-label', 'Marketplace navigation');

		nav.innerHTML = navItems.map(function (item) {
			var active = item.key === page || (page === 'index.html' && item.key === 'index.html');
			return '' +
				'<a class="stand-nav-item' + (active ? ' active' : '') + '" href="' + item.href + '" aria-label="' + item.label + '">' +
					'<span class="stand-nav-icon">' + item.icon + '</span>' +
					'<span class="stand-nav-label">' + item.label + '</span>' +
				'</a>';
		}).join('');

		document.body.appendChild(nav);
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', renderNav);
	} else {
		renderNav();
	}
})();
