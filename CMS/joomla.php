    if( !$detect->isMobile() && !$detect->isTablet() && ((int)$detect->version('IE') == '' || (int)$detect->version('IE') > 8 ) && !$detect->version('iOS')){ ?>
    <script src="<?php echo JURI::base().'/templates/'.$this->template.'/js/jquery.simplr.smoothscroll.min.js'; ?>"></script>
