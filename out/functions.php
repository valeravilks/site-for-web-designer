<?php

add_action('wp_enqueue_scripts', 'themeNameScript');

function themeNameScript(){
  wp_enqueue_style('bootsrap', get_template_directory_uri().'/css/bootstrap.min.css');
  wp_enqueue_style('style', get_template_directory_uri().'/style.css');
}

//Function registration menu
add_action( 'after_setup_theme', 'theme_register_nav_menu' );

function theme_register_nav_menu() {
  //Registration two menu
  register_nav_menus(array(
    'main_menu' => 'First Menu'
  ));
}