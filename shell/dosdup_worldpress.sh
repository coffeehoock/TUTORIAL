sudo find . -type f -exec chmod 644 {} +
sudo find . -type d -exec chmod 755 {} +

if(is_admin()) {
    add_filter('filesystem_method', create_function('$a', 'return "direct";' ));
    define( 'FS_CHMOD_DIR', 0751 );
}
