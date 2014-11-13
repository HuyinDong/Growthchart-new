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
    <label for="gender" class="col-sm-2 control-label">Gender</label>
    <div class="col-sm-2">
     <label class="radio-inline">
  <input type="radio" name="gender" id="gender" value="0"> Boy
</label>
<label class="radio-inline">
  <input type="radio" name="gender" id="gender" value="1"> Girl
</label>
    </div>
  </div>
  	<div class="form-group">
    <label for="ktype" class="col-sm-2 control-label">Ktype</label>
    <div class="col-sm-2">
     <label class="radio-inline">
  <input type="radio" name="ktype" id="ktype" value="1" onchange="toggleDisable(this)" /> Infant
</label>
<label class="radio-inline">
  <input type="radio" name="ktype" id="ktype" value="2" onchange="toggleDisable(this)"> Child
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
	<fieldset id="field">
    <label for="hc" class="col-sm-2 control-label">Hair Circle</label>
    <div class="col-sm-2">
      <input type="text" class="form-control disabled" name = "hc" id="hc" placeholder="Hair Circle" />
    </div>
	</fieldset>
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
    <label for="bmp" class="col-sm-2 control-label">BMI_Per:</label>
    <div class="col-sm-2">
      <p><span id="bmp"></span></p>
    </div>
  </div>
  <div class="form-group">
    <label for="hcp" class="col-sm-2 control-label">HC_Per:</label>
    <div class="col-sm-2">
      <p><span id="hcp"></span></p>
    </div>
  </div>
  <div class="form-group">
    <label for="wfap" class="col-sm-2 control-label">WFA_Per:</label>
    <div class="col-sm-2">
      <p><span id="wfap"></span></p>
    </div>
  </div>
  <div class="form-group">
    <label for="lfap" class="col-sm-2 control-label">LFA_Per:</label>
    <div class="col-sm-2">
      <p><span id="lfap"></span></p>
    </div>
  </div>
  </div>
	<script src="jquery-1.10.2.js"></script>
		<script>
		
		function toggleDisable(checkbox){
		var toggle = document.getElementById("field");
			checkbox.value==1 ? toggle.disabled = false : toggle.disabled = true;
		}
		window.onload = function() {
		toggleDisable(document.getElementById('ktype'));
}
		
		
		
		window.onload = function(){
			var xhr = new XMLHttpRequest();      
			xhr.open('GET'," http://date.jsontest.com",false);
			xhr.send(null);
			jsonDoc = xhr.responseText;
			var sp = JSON.parse(jsonDoc);
			document.getElementById("bmp").innerHTML= sp.time;
			document.getElementById("hcp").innerHTML=sp.milliseconds_since_epoch;
			document.getElementById("wfap").innerHTML=sp.date;
	}	
			
			</script>
	 </body>
</html>     