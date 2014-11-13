<?php

   $sex =  $_GET['sex'];
    $ktype =  $_GET['ktype'];
   $age = $_GET['age'];
   $weight = $_GET['weight'];
   $stature = $_GET['stature'];
   $hc = $_GET['hair'];
   $str = file_get_contents('bmi.json');
   $json = json_decode($str, true); 
   echo $json['bmi_per'];
   echo " ";
   echo $json['hc_per'];
   echo " ";
   echo $json['wfa_per'];
   echo " ";
   echo $json['lfa_per'];
  
 

?>