<?php
namespace App;
/**
 *  classe Autoload 
 */
class Autoload{
    /**
     *  fonction  register est une fonction qui permet d'inclure des classe
     *
     * @return void
     */
   static function register(){
         spl_autoload_register([
             __CLASS__,'autoload'
         ]);
   }
   /**
    * fonction de closure 
    *
    * @param [type] $class
    * @return void
    */
   static function autoload($class){
       /**
        * recuperation du chemin du ficher
        */
       $path=basename(__DIR__);
       // on remplace le namespace actuel App\ par un vide
       $chemin=str_replace(__NAMESPACE__.'\\',' ', $class);
       // on remplacer les antislashe par de slashe 
       $chemin=trim(str_replace('\\','/', $chemin));
       // inclusion du ficheier
         require '../'.$path.'/'.$chemin.'.php';
   }
}