function(properties, context) {
    
const animation = properties.lottie_code || `<lottie-player data-hj-allow-iframe="" src="https://assets1.lottiefiles.com/packages/lf20_zzytykf2.json"  background="transparent"  speed="1"  style="width: 150px; height: 150px;"  loop  autoplay></lottie-player>`;    

    properties.lottie_code != null ? $('#pnc-loader .pnc-loader').html(properties.lottie_code) 
		: $('#pnc-loader .pnc-loader').html(animation);
    
	document.querySelector("#pnc-loader").style.display = "block";

}