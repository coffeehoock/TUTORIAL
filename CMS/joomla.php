<?php
    if( !$detect->isMobile() && !$detect->isTablet() && ((int)$detect->version('IE') == '' || (int)$detect->version('IE') > 8 ) && !$detect->version('iOS')){ ?>
    <script src="<?php echo JURI::base().'/templates/'.$this->template.'/js/jquery.simplr.smoothscroll.min.js'; ?>"></script>


    <?php endif; ?>
    <script src="<?php echo JURI::base().'templates/'.$this->template.'/js/jquery.fancybox.pack.js'; ?>"></script>
    <script src="<?php echo JURI::base().'templates/'.$this->template.'/js/jquery.fancybox-buttons.js'; ?>"></script>
    <script src="<?php echo JURI::base().'templates/'.$this->template.'/js/jquery.fancybox-media.js'; ?>"></script>
    <script src="<?php echo JURI::base().'templates/'.$this->template.'/js/jquery.fancybox-thumbs.js'; ?>"></script>
    <script src="<?php echo JURI::base().'templates/'.$this->template.'/js/jquery.pep.js'; ?>"></script>
    <script src="<?php echo JURI::base().'templates/'.$this->template.'/js/jquery.vide.min.js'; ?>"></script>
    <script src="<?php echo JURI::base().'templates/'.$this->template.'/js/scripts.js'; ?>"></script>
    <script src="<?php echo JURI::base().'templates/'.$this->template.'/js/slick.min.js'; ?>"></script>
    <?php endif; ?>
