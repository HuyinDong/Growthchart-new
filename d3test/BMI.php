<?php


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