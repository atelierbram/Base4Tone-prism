<?php
$title = 'Colorschemes';
$type = 'page';
$theme = 'b4t_Classic-Q';
$themeId = 'b4t_classic-q';
$id = 'b4t_247';
$description = 'B4T_Classic-Q';
$relPath = "../..";
// $relPath = "";
$bg = 'dark';
$swaptext1 = 'Color Schemes';
$swaptext2 = 'B4T_Classic-Q';
include '../../inc/config.inc';
include '../../inc/head.inc';
// include '../../inc/header.inc';
include '../../inc/header/header-b4t_classic-q.inc';
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
