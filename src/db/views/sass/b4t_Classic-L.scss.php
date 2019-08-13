<?php
error_reporting(E_ALL);
ini_set('display_errors', true);
ini_set('html_errors', false);

include_once "../../schemes/vars/vars-hsl-b4t_classic-l.php";
$url_file = "https://github.com/atelierbram/Base4Tone-prism/blob/master/src/assets/sass/b4t_classic-l.scss";

echo "// colorscheme: $scheme by $author\n";
echo "// author: $author - $url_project\n";
echo "// $url_file\n";
echo "\n";

include_once "../../templates/sass/vars-b4t-themes.scss.php";
