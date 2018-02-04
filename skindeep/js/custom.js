// JavaScript Document

// Slider

$(function() {
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 10,
			step: 1,
			values: [ 1, 10 ],
			slide: function( event, ui ) {
				$( "#amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) +
			" - " + $( "#slider-range" ).slider( "values", 1 ) );
	});

function goToURL(form)
  {

    var myindex=form
    if(!myindex=="")
      {
        window.location.href=form;
	  }
      
   }

function tooltips(){
	$('.tooltip').bt(
	{trigger: 'click',
	 positions: 'top',
	 width:350,
 	 spikeLength: 0,
 	 spikeGirth: 0,
 	 cornerRadius: 0,
 	 fill: 'rgba(0, 0, 0, 0.9)',
 	 cssStyles: {color: '#FFF', fontWeight: 'bold', fontSize: '22px'}
	 });
};