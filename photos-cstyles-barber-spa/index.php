<!DOCTYPE html>
<html lang="en">
	<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	
	<meta name="description" content="Christopher Styles Barber Spa is created to provide the modern gentleman a sanctuary. An oasis where you can come relax, hang out and refine your appearance. Our full service barbershop not only offers expert cuts and fades, but also straight razor face shaves, color services and MAN-icures. When you step into this elegant refuge, you can expect more than just a cut, you can expect to feel and look the way a modern man or woman should.">
	<meta name="keywords" content="men barber, women hair, luxury barber, spas for men, kids barber shop, barber shops los angeles, barber spa, salon spa, barbershop, barbershop haircuts, mens haircuts, classic barbershop, face shaves, barbershop Valley Village, barbershop Sherman Oaks, Barbershop Studio City">
	<meta name="author" content="Christopher Styles Barber Spa">
	<meta charset="utf-8" />
	<title>PHOTOS - Barber Shop Spa - Cuts, Shaves, Hair Color, &amp; MAN-icures - Christopher Styles Barber Spa</title>

			<!-- Bootstrap -->
    <link href="../_css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!--[if IE 8 ]>    <html class="ie8"> <![endif]-->
	<link type="text/css" href="../_css/main.css" rel="stylesheet" />
	<link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
	</head>
	<body>
		<div id="wrapper" class="container">
		
			<header><?php require("../_includes/header.php"); ?>
			</header><!-- #header -->
				 <?php require("../_includes/sub-nav.php"); ?>
			<div class="contentWrap">
				<section class="photoPage">
								
						<div id="gallery">
							<h1 id="photosHeader">Photos</h1>
					<script type="text/javascript">
						$(function() {
							$("a.group").fancybox({
								'nextEffect'	:	'fade',
								'prevEffect'	:	'fade',
								'overlayOpacity' :  0.8,
								'overlayColor' : '#000000',
								'arrows' : false,
							});			
						});
					</script>	
					<?php
						// Supply a user id and an access token
						$userid = "29559735";
						$accessToken = "29559735.ab103e5.c6688cb27eba4b4f89de59481ed924ea";
				
						// Gets our data
						function fetchData($url){
						     $ch = curl_init();
						     curl_setopt($ch, CURLOPT_URL, $url);
						     curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
						     curl_setopt($ch, CURLOPT_TIMEOUT, 20);
						     $result = curl_exec($ch);
						     curl_close($ch); 
						     return $result;
						}
				
						// Pulls and parses data.
						$result = fetchData("https://api.instagram.com/v1/users/{$userid}/media/recent/?access_token={$accessToken}");
						$result = json_decode($result);
					?>
				
				
					<?php foreach ($result->data as $post): ?>
						<!-- Renders images. @Options (thumbnail,low_resoulution, high_resolution) -->
						<a class="group" rel="group1" href="<?= $post->images->standard_resolution->url ?>"><img src="<?= $post->images->thumbnail->url ?>"></a>
					<?php endforeach ?>
					</div>
				
				</section>
			</div><!-- #contentWrap -->
		<div class="push"></div>
			</div><!-- #wrapper -->
		
			<footer><?php require("../_includes/footer.php"); ?></footer>
	


<!-- Script -->

<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-37164123-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
	
	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<script  type="text/javascript" src="../_js/script.js"></script>
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="../_js/bootstrap.min.js"></script>
	</body>
</html>
