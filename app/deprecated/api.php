<?php
include('global.php');

$method = $_SERVER['REQUEST_METHOD'];

	$jsonData = file_get_contents("php://input");

	
switch($method) {
 	 case 'POST':
      $database->insert($json['table'],$json['data']);
	echo "post";
      break;
  case 'PUT':
       $row = $database->update($_GET['table'],$_GET['data'],$_GET['where']);
	print_r(json_decode($jsonData,true));

 	//print_r(json_encode($row));
      break;
 
  case 'DELETE':
      $database->delete($json['table'],$json['where']);
	echo "delete";
      break;
 
  case 'GET':
     $row =  $database->select($_GET['table'],$_GET['column'],$_GET['where']);
     print_r(json_encode($row));
     break;
 
  default:
      header('HTTP/1.1 405 Method Not Allowed');
      header('Allow: GET, PUT, DELETE');
      break;
  }


?>
