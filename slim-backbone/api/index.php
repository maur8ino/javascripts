<?php

require_once 'Slim/Slim.php';
require_once 'ActiveRecord/ActiveRecord.php';

require_once 'templates/json.php';

// ActiveRecord\Config::initialize(function($cfg)
// {
// 	$cfg->set_model_directory('models/sakila');
// 	$cfg->set_connections(array(
// 		'development' => 'mysql://sakila:sakila123!@localhost/sakila'));
// });

ActiveRecord\Config::initialize(function($cfg)
{
	$cfg->set_model_directory('models/m_fantacalcio');
	$cfg->set_connections(array(
		'development' => 'mysql://m_fantacalcio:m_fantacalcio123!@localhost/m_fantacalcio'));
});

	$match = Match::find(1);
	foreach ($match->votes as $single_vote) {
		print_r($single_vote->player->team);
	};
	die();

$app = new Slim(array('view' => 'JsonView'));

$app->get('/', function () {
});

// $app->get('/films', function () use ($app) {
// 	$data['title'] = 'films';
// 	$data['object'] = Film::all(array('limit' => 10));
// 	$data['include_item_count'] = true;
// 	$app->render('json.php', $data); 
// }); 

// $app->get('/film/search/:title', function ($title) use ($app) {
// 	$title_decoded = urldecode($title);
// 	$data['title'] = 'films';
// 	$data['object'] = Film::all(array('conditions' => array("title LIKE CONCAT('%',?,'%')", $title_decoded)));
// 	$data['include_item_count'] = true;
// 	$app->render('json.php', $data); 
// }); 

// $app->get('/film/:id', function ($id) use ($app) {
// 	$data['object'] = Film::find($id);
// 	$app->render('json.php', $data); 
// });

$app->get('/players', function () use ($app) {
	$data['title'] = 'players';
	$data['object'] = Player::all(array('limit' => 10));
	$app->render('json.php', $data); 
});

$app->get('/teams', function () use ($app) {
/*	$data['title'] = 'teams';
	$data['object'] = Team::all(array('limit' => 10));
	$app->render('json.php', $data); */
});

$app->run();