
<?php
class Connection extends PDO {
   
    private $engine;
    private $host;
    private $database;
    private $user;
    private $pass;
   
    public function __construct(){
        $this->engine = 'mysql';
        $this->host = 'localhost';
        $this->database = 'test';
        $this->user = 'root';
        $this->pass = '';
        $dns = $this->engine.':dbname='.$this->database.";host=".$this->host;
        return parent::__construct( $dns, $this->user, $this->pass );
    }
}


?>
