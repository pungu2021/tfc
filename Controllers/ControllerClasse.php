<?php
use App\Autoload;
use App\database\Article;
/**
 * inclusion de fichier Autoloader 
 */
require dirname(__DIR__).DIRECTORY_SEPARATOR.'Models'.DIRECTORY_SEPARATOR.'Autoloader.php';
/**
 * appelation d'une fonction static register pour l'autoloader
 */
Autoload::register();
$objet=new Article();
