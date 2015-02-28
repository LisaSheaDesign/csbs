<?php
?>
<html>
	<head>
		<title>Page Title</title>
		<link type="text/css" href="css/main.css" rel="stylesheet" />
		
		<script type="text/javascript" src="js/main.js"></script>
	</head>
	<body onload="currentPage()">
		<div id="menu"><?php require("includes/menu.php"); ?></div>
		<div id="logo"><img src="images/logo.png"></div>
		<div id="article"><?php echo "$content_area"; ?></div>
		<div id="footer"><?php require("includes/footer.php"); ?><? print(Date("l F d, Y")); ?></div>
	</body>
</html>
