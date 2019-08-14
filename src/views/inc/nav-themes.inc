<?php ob_start('compress_nav'); ?>
<nav class="nav-themes" id="navThemes">
  <ul class="nav_list nav-themes_list">
    <li class='<?php if ($themeId=="Index") echo "current"; ?>'><a href="<?= $rootUrl; ?>b4t_classic-a/<?= $bg ?>/">Home</a></li>
    <li class='<?php if ($themeId=="b4t_classic-a") echo "current"; ?>'><a href="<?= $rootUrl; ?>b4t_classic-a/<?= $bg ?>/">B4T_Classic-A</a></li>
    <li class='<?php if ($themeId=="b4t_classic-b") echo "current"; ?>'><a href="<?= $rootUrl; ?>b4t_classic-b/<?= $bg ?>/">B4T_Classic-B</a></li>
    <li class='<?php if ($themeId=="b4t_classic-c") echo "current"; ?>'><a href="<?= $rootUrl; ?>b4t_classic-c/<?= $bg ?>/">B4T_Classic-C</a></li>
    <li class='<?php if ($themeId=="b4t_classic-d") echo "current"; ?>'><a href="<?= $rootUrl; ?>b4t_classic-d/<?= $bg ?>/">B4T_Classic-D</a></li>
    <li class='<?php if ($themeId=="b4t_classic-e") echo "current"; ?>'><a href="<?= $rootUrl; ?>b4t_classic-e/<?= $bg ?>/">B4T_Classic-E</a></li>
    <li class='<?php if ($themeId=="b4t_classic-f") echo "current"; ?>'><a href="<?= $rootUrl; ?>b4t_classic-f/<?= $bg ?>/">B4T_Classic-F</a></li>
    <li class='<?php if ($themeId=="b4t_classic-i") echo "current"; ?>'><a href="<?= $rootUrl; ?>b4t_classic-i/<?= $bg ?>/">B4T_Classic-I</a></li>
    <li class='<?php if ($themeId=="b4t_classic-l") echo "current"; ?>'><a href="<?= $rootUrl; ?>b4t_classic-l/<?= $bg ?>/">B4T_Classic-L</a></li>
    <li class='<?php if ($themeId=="b4t_classic-o") echo "current"; ?>'><a href="<?= $rootUrl; ?>b4t_classic-o/<?= $bg ?>/">B4T_Classic-O</a></li>
    <li class='<?php if ($themeId=="b4t_classic-p") echo "current"; ?>'><a href="<?= $rootUrl; ?>b4t_classic-p/<?= $bg ?>/">B4T_Classic-P</a></li>
    <li class='<?php if ($themeId=="b4t_classic-q") echo "current"; ?>'><a href="<?= $rootUrl; ?>b4t_classic-q/<?= $bg ?>/">B4T_Classic-Q</a></li>
    <li class='<?php if ($themeId=="b4t_classic-r") echo "current"; ?>'><a href="<?= $rootUrl; ?>b4t_classic-r/<?= $bg ?>/">B4T_Classic-R</a></li>
    <li class='<?php if ($themeId=="b4t_classic-s") echo "current"; ?>'><a href="<?= $rootUrl; ?>b4t_classic-s/<?= $bg ?>/">B4T_Classic-S</a></li>
    <li class='<?php if ($themeId=="b4t_classic-t") echo "current"; ?>'><a href="<?= $rootUrl; ?>b4t_classic-t/<?= $bg ?>/">B4T_Classic-T</a></li>
    <li class='<?php if ($themeId=="b4t_classic-u") echo "current"; ?>'><a href="<?= $rootUrl; ?>b4t_classic-u/<?= $bg ?>/">B4T_Classic-U</a></li>
    <li class='<?php if ($themeId=="b4t_classic-w") echo "current"; ?>'><a href="<?= $rootUrl; ?>b4t_classic-w/<?= $bg ?>/">B4T_Classic-W</a></li>
    <li class='<?php if ($themeId=="b4t_modern-c") echo "current"; ?>'><a href="<?= $rootUrl; ?>b4t_modern-c/<?= $bg ?>/">B4T_Modern-C</a></li>
    <li class='<?php if ($themeId=="b4t_modern-n") echo "current"; ?>'><a href="<?= $rootUrl; ?>b4t_modern-n/<?= $bg ?>/">B4T_Modern-N</a></li>
    <li class='<?php if ($themeId=="b4t_modern-w") echo "current"; ?>'><a href="<?= $rootUrl; ?>b4t_modern-w/<?= $bg ?>/">B4T_Modern-W</a></li>
  </ul>
</nav>
<?php ob_end_flush(); function compress_nav($buffer) {
  $search = array("/>[[:space:]]+/", "/[[:space:]]+</");
  $replace = array(">","<");
  return preg_replace($search, $replace, $buffer);
}
?>
