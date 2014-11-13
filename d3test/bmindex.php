<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>D3 Test</title>
		 <link href="./bootstrap-3.1.1/dist/css/bootstrap.min.css" rel="stylesheet">
        <script type="text/javascript" src="d3/d3.v3.js"></script>
	
		<style type="text/css">
		
			</style>
			
    </head>
    <body>
	<form class="form-horizontal" action = "" method = "GET">
		<div class="form-group">
    <label for="sex" class="col-sm-2 control-label">Sex</label>
    <div class="col-sm-2">
     <label class="radio-inline">
  <input type="radio" name="sex" id="sex" value="0"> Boy
</label>
<label class="radio-inline">
  <input type="radio" name="sex" id="sex" value="1"> Girl
</label>
    </div>
  </div>
  	<div class="form-group">
    <label for="ktype" class="col-sm-2 control-label">Ktype</label>
    <div class="col-sm-2">
     <label class="radio-inline">
  <input type="radio" name="ktype" id="ktype" value="0"> Infant
</label>
<label class="radio-inline">
  <input type="radio" name="ktype" id="ktype" value="1"> Child
</label>
    </div>
  </div>
		<div class="form-group">
    <label for="age" class="col-sm-2 control-label">Age</label>
    <div class="col-sm-2">
      <input type="text" class="form-control" name = "age" id="age" placeholder="Age" value=""/>
    </div>
  </div>
  	<div class="form-group">
    <label for="weight" class="col-sm-2 control-label">Weight</label>
    <div class="col-sm-2">
      <input type="text" class="form-control" name = "weight" id="weight" placeholder="Weight" />
    </div>
  </div>
	<div class="form-group">
    <label for="stature" class="col-sm-2 control-label">Stature</label>
    <div class="col-sm-2">
      <input type="text" class="form-control" name = "stature" id="stature" placeholder="Stature" />
    </div>
  </div>
	<div class="form-group">
    <label for="hair" class="col-sm-2 control-label">Hair Circle</label>
    <div class="col-sm-2">
      <input type="text" class="form-control" name = "hair" id="hair" placeholder="Hair Circle" />
    </div>
  </div>
  
  <div class="form-group">
  <label for="sub" class="col-sm-2 control-label">Submit</label>
    <div class="col-sm-2">
      <input type = 'submit' value = 'Submit' name = 'sub' id = "sub" class="btn btn-primary"/>
    </div>
  </div>
			</form>
			<div class="form-horizontal">
			<div class="form-group">
    <label for="hair" class="col-sm-2 control-label">BMI_Per:</label>
    <div class="col-sm-2">
      <p><span id="bm"></span></p>
    </div>
  </div>
  <div class="form-group">
    <label for="hc" class="col-sm-2 control-label">HC_Per:</label>
    <div class="col-sm-2">
      <p><span id="hc"></span></p>
    </div>
  </div>
  <div class="form-group">
    <label for="wfa" class="col-sm-2 control-label">WFA_Per:</label>
    <div class="col-sm-2">
      <p><span id="wfa"></span></p>
    </div>
  </div>
  <div class="form-group">
    <label for="lfa" class="col-sm-2 control-label">LFA_Per:</label>
    <div class="col-sm-2">
      <p><span id="lfa"></span></p>
    </div>
  </div>
  </div>
	
		<script>
		<?php
			if($_GET['sub']){
			
			?>
			var xhr = new XMLHttpRequest();      
			xhr.open('GET',"BMI.php?sex=<?=$_GET['sex']?>&&ktype=<?=$_GET['ktype']?>&&age=<?=$_GET['age']?>&&weight=<?=$_GET['weight']?>&&stature=<?=$_GET['stature']?>&&hair=<?=$_GET['hair']?>",false);
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