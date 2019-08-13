<?php ob_start('compress_navvariation'); ?>
<nav class="nav-variation container" id="navVariation">
  <ul class="nav_list nav-variation_list">
    <li>
      <a href='<?php if ($bg=="dark") echo "../light/"; else echo "../dark/"; ?>'><?php if ($bg=="dark") echo "light"; ?><?php if ($bg=="light") echo "dark"; ?>
      </a></li>
      <li class="current"><a href="#!"><?= $bg; ?></a></li>
  </ul>
</nav>
<?php ob_end_flush(); function compress_navvariation($buffer) {
  $search = array("/>[[:space:]]+/", "/[[:space:]]+</");
  $replace = array(">","<");
  return preg_replace($search, $replace, $buffer);
}
?>
