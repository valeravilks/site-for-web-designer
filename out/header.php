<?php wp_head(); ?>
<body>
    <div class="header">
        <div class="container header__container">
            <div class="header__logo logo">
                <a href="<?php echo get_site_url(); ?>">
                    <img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="" class="logo_img">
                </a>
            </div>
            <div class="header__menu">
                <?php
                wp_nav_menu(array(
                'menu' => 'first_menu' // name menu for output
                ));
                ?>
            </div>
        </div>
    </div>