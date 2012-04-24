<?php

/**
 * Step 1: Require the Slim PHP 5 Framework
 *
 * If using the default file layout, the `Slim/` directory
 * will already be on your include path. If you move the `Slim/`
 * directory elsewhere, ensure that it is added to your include path
 * or update this file path as needed.
 */
require 'Slim/Slim.php';

$app = new Slim();

$app->get('/', function () {
	echo 'test';
});

function jsonpWrap($jsonp) {
  $app = Slim::getInstance();

  if (($jsonCallback = $app->request()->get('callback')) !== null) {
    $jsonp = sprintf("%s(%s);", $jsonCallback, $jsonp);
    $app->response()->header('Content-type', 'application/javascript');
  } elseif (($jsonCallback = $app->request()->get('jsoncallback')) !== null) {
    $jsonp = sprintf("%s(%s);", $jsonCallback, $jsonp);
    $app->response()->header('Content-type', 'application/javascript');
  }

  return $jsonp;
}

$app->get('/films', function () use ($app) {
	$sql = "SELECT * FROM `film` LIMIT 10";
	try {
		$db = getConnection();
		$stmt = $db->query($sql);
		$films = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		$app->response()->body(jsonpWrap('{"films": ' . json_encode($films) . '}'));
	} catch(PDOException $e) {
		$app->response()->body(jsonpWrap('{"error": {"text":'. $e->getMessage() .'}}'));
	}
});

$app->get('/film/:id', function ($id) use ($app) {
	$sql = "SELECT * FROM film WHERE film_id=:id";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$stmt->bindParam("id", $id);
		$stmt->execute();
		$film = $stmt->fetchObject();
		$db = null;
		$app->response()->body(jsonpWrap(json_encode($film)));
	} catch(PDOException $e) {
		$app->response()->body(jsonpWrap('{"error": {"text":'. $e->getMessage() .'}}'));
	}
});

$app->get('/film/search/:title', function ($title) use ($app) {
	$sql = "SELECT * FROM film WHERE title like CONCAT('%',:title,'%')";
	try {
		$title_decoded = urldecode($title);
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$stmt->bindParam("title", $title_decoded);
		$stmt->execute();
		$films = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		$app->response()->body(jsonpWrap('{"films": ' . json_encode($films) . '}'));
	} catch(PDOException $e) {
		$app->response()->body(jsonpWrap('{"error": {"text":'. $e->getMessage() .'}}'));
	}
});

function getConnection() {
	$dbhost="127.0.0.1";
	$dbuser="root";
	$dbpass="";
	$dbname="sakila";
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $dbh;
}

$app->run();