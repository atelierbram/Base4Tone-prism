<?php
error_reporting(E_ALL);
ini_set('display_errors', true);
ini_set('html_errors', false);

include_once "../../schemes/vars/vars-hex-b4t_172.php";
$url_file = "https://github.com/atelierbram/Base4Tone-prism/blob/master/output/prism-b4t_classic-l-dark.css";

echo "/* colorscheme: $scheme by $author */\n";
echo "/* author: $author - $url_project */\n";
echo "/* $url_file */\n";
echo "\n";

include_once "../../templates/prism/prism-dark.css.php";
