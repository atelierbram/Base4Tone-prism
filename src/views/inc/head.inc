<?php ob_start('compress_head'); ?>
<!doctype html>
<html lang="en" class="no-js core no-flexbox bg-<?= $bg ?>">
  <head>
    <meta charset="utf-8">
    <title>Colorscheme - <?= $title; ?></title>
    <meta name="description" content="<?= $description; ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php if ($themeId == "planetsIndex"): ?>
    <style><?php include "inc/critical.css.inc"; ?>.nav-variation{display:none}</style>
    <?php else: ?>
    <style><?php include "../../inc/critical.css.inc"; ?></style>
    <?php endif ?>
    <link rel="preload" href="<?= $assetUrl; ?>assets/css/demo-<?= $theme; ?>.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="<?= $assetUrl; ?>assets/css/demo-<?= $theme; ?>.min.css"></noscript>

    <link rel="preload" href="<?= $assetUrl; ?>assets/css/prism_<?= $theme; ?>-<?= $bg ?>.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="<?= $assetUrl; ?>assets/css/prism_<?= $theme; ?>-<?= $bg ?>.min.css"></noscript>
    <?php if ($themeId == "planetsIndex"): ?>
    <script><?php include "inc/head-detect.js.inc"; ?></script>
    <?php else: ?>
    <script><?php include "../../inc/head-detect.js.inc"; ?></script>
    <?php endif ?>
  </head>
  <body class="theme-<?= $themeId; ?>">
<?php ob_end_flush(); function compress_head($buffer) {
  $search = array("/>[[:space:]]+/", "/[[:space:]]+</");
  $replace = array(">","<");
  return preg_replace($search, $replace, $buffer);
}
?>
