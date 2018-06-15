
document.addEventListener('DOMContentLoaded', function() {

	var menu = document.getElementsByClassName('menu')[0];
	var menu_button = document.querySelector('.resp_box').children[1];
	var contact_box = document.getElementsByClassName('contact_box')[0];

	if(window.matchMedia('(max-width:768px)').matches){
		menu_replace(false);
	}
	else if(window.matchMedia('(min-width:769px)').matches) {
		menu_replace(true);
	}
	
	menu_button.addEventListener('click', function() {
		let btn = this.children[0];
		let name = this.children[1];
		btn.classList.toggle('fa-bars');
		btn.classList.toggle('fa-window-close');

		if(btn.classList.contains('fa-bars')) {
			name.innerHTML = 'MENU';
			menu_indicate(menu, true);
			menu_indicate(contact_box, true);
			document.getElementById('menu_box').style.marginTop = '0px';
		}
		else {
			name.innerHTML = 'CLOSE';
			menu_indicate(menu, false);
			menu_indicate(contact_box, false);
			document.getElementById('menu_box').style.marginTop = '30px';
		}
	}, false);
	
	window.addEventListener('resize', function() {
		if(window.matchMedia('(max-width:768px)').matches){
			let btn = menu_button.children[0];
			let name = menu_button.children[1];
			menu_replace(false);
			btn.classList.remove('fa-window-close');
			btn.classList.add('fa-bars');
			name.innerHTML = 'MENU';
			menu.style.display = 'none';
			contact_box.style.display = 'none';
			document.getElementById('menu_box').style.marginTop = '0px';
		}
		else if(window.matchMedia('(min-width:769px)').matches) {
			menu_replace(true);
			menu.style.display = 'block';
			menu.style.opacity = 1;
			contact_box.style.display = 'block';
			contact_box.style.opacity = 1;
			document.getElementById('menu_box').style.marginTop = '30px';
		}
	}, false);
	
	function menu_indicate(target, flag) {
		var cnt;
		if(flag) cnt=1;
		else if(!flag) {
			cnt=0;
			target.style.display = 'block';
		}

		var _indicate = () => {
			if(flag && cnt >= 0) cnt -= 0.1;
			else if(!flag && cnt <= 1) cnt += 0.1;
			else {
				if (!flag) target.style.opacity = 1;
				else {
					target.style.opacity = 0;
					target.style.display = 'none';
				}
				return;
			}
			target.style.opacity = cnt;
			setTimeout(_indicate, 100);
		};
		_indicate();
	}

	function menu_replace(flag) {
		let pc_html = '<li><a href="#">トップ</a></li><li><a href="#">Areteについて</a></li><li><a href="#">サービス</a></li><li><a href="#">販売実績</a></li><li><a href="#">工事実績</a></li>';
		let tab_html = '<li><a href="#">トップページ</a></li><li><a href="#">Areteについて</a></li><li><a href="#">代表挨拶</a></li><li><a href="#">会社概要</a></li><li><a href="#">サービス紹介</a></li><li><a href="#">風力発電</a></li><li><a href="#">太陽光発電</a></li><li><a href="#">販売実績</a></li><li><a href="#">工事実績</a></li><li><a href="#">お知らせ</a></li><li><a href="#">お問い合わせ</a></li>';
		let menu = document.createElement('ul');
		if(flag) menu.innerHTML = pc_html;
		else menu.innerHTML = tab_html;
		document.getElementsByClassName('menu')[0].innerHTML = "";
		document.getElementsByClassName('menu')[0].appendChild(menu);
	}
});
