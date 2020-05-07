$(function(){
	// First standart tab
	$('#html').show();

	// Start button
	$('#start').on("click", function(){
		$('.welcome').hide();
	});

	// link html
	$('.html').on('click', function(e){
		e.preventDefault();
		$('.css, .js').removeClass('active');
		$('.html').addClass('active');
		$('#html').show();
		$('#css, #js').hide();
	});

	// link css
	$('.css').on('click', function(e){
		e.preventDefault();
		$('.html, .js').removeClass('active');
		$('.css').addClass('active');
		$('#css').show();
		$('#html, #js').hide();
	});

	// link js
	$('.js').on('click', function(e){
		e.preventDefault();
		$('.html, .css').removeClass('active');
		$('.js').addClass('active');
		$('#js').show();
		$('#html, #css').hide();
	});

	// Make the TAB key work on the textarea
	$('#html, #css, #js').keydown(function(e){
		if (e.keyCode === 9){
			e.preventDefault();
			// get the point of the cursor and split it in twoo halfs
			let point= this.selectionStart;
			let txt = this.value;
    		let start = txt.slice(0, point);
    		let end = txt.slice(point);
    		txt = start+"    "+end;
			this.value = txt;
		}
	});
	// hide the tabs for a fullscreen view
	$('#hide').on('click', function(){
		$(".txt").hide();
		$(".show").show();
	});
	$('.show').on('click', function(){
		$(".txt").show();
		$(".show").hide();
	});

	// function html
	$('#html').keyup(function(){
		$(".site").html($('#html').val());
	});

	// function css
	$('#css').keyup(function(){
		let css = $('#css').val();
		let css2 = css.replace("body", ".site");
		$("style").html(css2);
	});

	// function js
	$('#js').keyup(function(){

		$('.action').html('<script type="text/javascript">'+$('#js').val()+'</script>');

	});
});
