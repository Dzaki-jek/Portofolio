let nav = document.getElementById("navbar");
let notLoadAll = document.querySelectorAll(".notload")
let navs = document.getElementById("navs");
let display = false;
let loading = document.getElementById("loading")
let body = document.getElementById("body")
let e = document.getElementById("navbar-toggler");

window.onload = () => {
	setTimeout(function() {
		for (let i = 0; i < notLoadAll.length; i++) {
			if (typeof notLoadAll[i].attributes["notload-delay"] !== "object") {
				notLoadAll[i].classList.remove("notload")
			} else if (typeof notLoadAll[i].attributes["notload-delay"] == "object") {
				setTimeout(() => {
					notLoadAll[i].classList.remove("notload")
				}, 500)
			}
		}
		loading.classList.add("off")
		setTimeout(function() {
			loading.classList.add("transparent")
			setTimeout(function() {
				loading.style.display = "none"
			}, 1000);
		}, 100);
	}, 1000);
}


function toggleNavbar() {
	if (document.documentElement.clientWidth >= 922) return;

	if (display) {
		e.classList.remove("fa-times");
		e.classList.add("fa-bars");
		navs.classList.remove("on")
		body.classList.remove("navbaractive")
		display = false;
	} else if (!display) {
		e.classList.add("fa-times");
		e.classList.remove("fa-bars");
		navs.classList.add("on")
		body.classList.add("navbaractive")
		display = true;
	}
}

function toggleDmIG() {
	let icon = document.getElementById("showme");
	if (!icon) return;

	icon.classList.add("arrow");
	setTimeout(() => {
		icon.classList.remove("arrow")
	}, 500)
}

document.addEventListener('DOMContentLoaded', function() {
	// Ambil semua tombol filter dan proyek
	const filterButtons = document.querySelectorAll('.filter-btn');
	const projects = document.querySelectorAll('.project');

	// Tambahkan event listener untuk setiap tombol filter
	filterButtons.forEach(button => {
		button.addEventListener('click', () => {
			// Hapus kelas active dari semua tombol
			filterButtons.forEach(btn => btn.classList.remove('active'));
			
			// Tambahkan kelas active ke tombol yang diklik
			button.classList.add('active');
			
			// Ambil kategori yang dipilih
			const selectedCategory = button.getAttribute('data-category');
			
			// Filter proyek berdasarkan kategori
			projects.forEach(project => {
				const projectCategory = project.getAttribute('data-category');
				
				if (selectedCategory === 'all' || selectedCategory === projectCategory) {
					project.classList.remove('hide');
					project.style.opacity = '1';
				} else {
					project.classList.add('hide');
					project.style.opacity = '0';
				}
			});
		});
	});
});
