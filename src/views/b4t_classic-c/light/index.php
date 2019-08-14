<?php
$title = 'Colorschemes';
$type = 'page';
$theme = 'b4t_Classic-C';
$themeId = 'b4t_classic-c';
$id = 'b4t_37';
$description = 'B4T_Classic-C Colorscheme';
$relPath = "../..";
// $relPath = "";
$bg = 'light';
$swaptext1 = 'Color Schemes';
$swaptext2 = 'B4T_Classic-C';
include '../../inc/config.inc';
include '../../inc/head.inc';
include '../../inc/header/header-b4t_37.inc';
include '../../inc/nav-variation.inc';
?>
<div class="container-flex" id="main">
  <?php include '../../inc/nav-themes.inc'; ?>
  <div class="content" id="content">
  <?php
    include '../../inc/demo-tile-header.inc';
    include '../../inc/demo-tiles.inc';
    include '../../inc/code-samples.inc';
  ?>
  </div><!-- /.content #content -->
</div><!-- /.container-flex #main -->
<?php include '../../inc/footer.inc'; ?>
