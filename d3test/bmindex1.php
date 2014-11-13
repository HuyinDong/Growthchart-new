<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>D3 Test</title>
        <script type="text/javascript" src="d3/d3.v3.js"></script>
		<style type="text/css">
		
			</style>
			
    </head>
    <body>
	<form action = "" method = "GET">
		<table>
			<tr>
				<td>Sex:</td><td><input type="text" size = "15" name = "sex" value = ""/></td>
			</tr>
			
			<tr>
				<td>Age:</td><td><input type="text" size = "15" name = "age"/></td>
		</tr>
		<tr>
			<td>Weight</td><td><input type="text" size = "15" name = "weight"/></td>
		</tr>
		<tr>
			<td>Stature</td><td><input type="text" size = "15" name = "stature"/></td>
		</tr>
		<tr>
			<td>Hair Circle</td><td><input type="text" size = "15" name = "hair"/></td>
		</tr>

			<td><input type = 'submit' value = 'Submit' name = 'sub'/></td>
			
		</tr>
			</table>
			</form>
		<table>
		<tr>
				<td>BMI_Per:</td><td><p><span id="bm"></span></p></td>
		</tr>
		<tr>
				<td>HC_Per:</td><td><p id = "hc"></p></td>
		</tr>
		<tr>
				<td>WFA_Per:</td><td><p id = "wfa"></p></td>
		</tr>
		<tr>
				<td>LFA_Per:</td><td><p id = "lfa"></p></td>
		</tr>
		</table>
		
		<script>
		<?php
			if($_GET['sub']){
			?>
			var xhr = new XMLHttpRequest();      
			xhr.open('GET',"BMI.php?sex=<?=$_GET['sex']?>&&age=<?=$_GET['age']?>&&weight=<?=$_GET['weight']?>
			&&stature=<?=$_GET['stature']?>&&hair=<?=$_GET['hair']?>",false);
			xhr.send(null);
			jsonDoc = xhr.responseText;
			var sp = jsonDoc.split(" ");
			document.getElementById("bm").innerHTML= sp[0];
			document.getElementById("hc").innerHTML= sp[1];
			document.getElementById("wfa").innerHTML= sp[2];
			document.getElementById("lfa").innerHTML= sp[3];
			<?php
			}
			?>
			</script>
	 </body>
</html>     