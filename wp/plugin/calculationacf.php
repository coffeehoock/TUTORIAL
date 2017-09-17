<?php
/*
Plugin Name: Calculation of repair
Plugin URI:
Description: Tool for calculating the area of ​​premises
Version: 0.0.1
Author: alex
Author
Copyright:
Text Domain: calculationacf
Domain Path: /lang
*/

define( 'PPS_PLUGIN_NAME1', 'Calculation of repair' );
define( 'PPS_VERSION', '0.0.1' );
define( 'PPS_PATH', dirname( __FILE__ ) );
define( 'PPS_FOLDER', basename( PPS_PATH ) );
define( 'PPS_URL', plugins_url() . '/' . PPS_FOLDER );

function calc_include_user()
{
    ob_start();

    ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <div class="conainer-calk">
        <!-- ==================================== -->
        <!-- OPTION USER -->
        <!-- ==================================== -->
        <div id="option-user">
            <form action="">
                <label for="kolihestvo-pomesheniy">Количество помещений требующих расчет / ремонта</label>
                <input id="kolihestvo-pomesheniy">

                <label for="nazvanie-pomesheniy">Введите название помещения</label>
                <input id="nazvanie-pomesheniy">
            </form>
        </div> <!-- OPTION USER -->


        <!-- ==================================== -->
        <!-- TYPE ROOM -->
        <!-- ==================================== -->
        <form id="type-user">
            <h1>выберите тип помещения</h1>
            <div id="type-user_buttons">
                <div class="botton-type" id="pramougolnoe">Прямоугольное</div>
                <div class="botton-type" id="pramougolnoe_s_uglom">Прямоугольное с углом</div>
                <div class="botton-type" id="pramougolnoe_s_vistup-colonnoy">Прямоугольное с выступающим элементом типа коллонны</div>
                <div class="botton-type" id="nestandartnoe">Нестандартное</div>
            </div>


            <form id="type-cont-1">
                <h2>Размер помещения</h2>
                <label for="shirina-pomeseniya">Ширина помещения</label>
                <input placeholder ="0" type="number" id="shirina-pomeseniya">
                <label for="dlinna-pomeseniya">Длина помещения</label>
                <input placeholder ="0" type="number" id="dlinna-pomeseniya">
                <label for="visota-pomeseniya">Высота помещения</label>
                <input placeholder ="0" type="number" id="visota-pomeseniya">
            </form>

            <form id="type-cont-2">
                <h2>Размер выступающего угла</h2>
                <label for="dlinna-ugla">Длина выступающего угла</label>
                <input placeholder ="0" type="number" id="dlinna-ugla">
                <label for="shirina-ugla">Ширина выступающего угла</label>
                <input placeholder ="0" type="number" id="shirina-ugla">
            </form>

            <form id="type-cont-3">
                <h2>Размер выступающей колонны</h2>
                <label for="gubina-kolonniy">Глубина колонны</label>
                <input placeholder ="0" type="number" id="gubina-kolonniy">
                <label for="sirina-kolonniy">Ширина колонны</label>
                <input placeholder ="0" type="number" id="sirina-kolonniy">
            </form>

            <form id="type-cont-4">
                <h2>Размер помещения</h2>
                <label for="kolihestvo-sten">Количество стен в помещении</label>
                <input placeholder ="0" type="number" id="kolihestvo-sten">
                <label for="dlinna-sten">Длина каждой стены по отделности</label>
                <input placeholder ="0" type="number" id="dlinna-sten">
                <label for="visota-pomesenia">Высота помещения</label>
                <input placeholder ="0" type="number" id="visota-pomesenia">
            </form>

        </form> <!-- TYPE ROOM -->

        <!-- ==================================== -->
        <!-- DATA INPUT -->
        <!-- ==================================== -->
        <form id="data-input">
            <h1>Размеры проемов</h1>

            <div id="okonniy-proem">
                <h2>Оконный проем</h2>
                <lable for="kolihestvo-proemov">Количество проемов</lable>
                <input placeholder ="0" type="number" id="kolihestvo-proemov">
                <lable for="visota-okna">Высота окна</lable>
                <input placeholder ="0" type="number" id="visota-okna">
                <lable for="sirina-okna">Ширина окна</lable>
                <input placeholder ="0" type="number" id="sirina-okna">
            </div>

            <div id="bolkonniv-blok">
                <h2>Балконный блок</h2>
                <lable for="visota-balkon-dveri">Высота балконной двери</lable>
                <input placeholder ="0" type="number" id="visota-balkon-dveri">
                <lable for="sirina-balkkon-dveri">Ширина балконной двери</lable>
                <input placeholder ="0" type="number" id="sirina-balkkon-dveri">
                <lable for="visota-balkon-okna">Высота окна</lable>
                <input placeholder ="0" type="number" id="visota-balkon-okna">
                <lable for="sirina-balkon-okna">Ширина окна</lable>
                <input placeholder ="0" type="number" id="sirina-balkon-okna">
            </div>

            <div id="dver-proem">
                <h2>Дверной проем</h2>
                <lable for="kolihestvo-dver-proemov">Количество проемов</lable>
                <input placeholder ="0" type="number" id="kolihestvo-dver-proemov">
                <lable for="visota-dveri">Высота двери</lable>
                <input placeholder ="0" type="number" id="visota-dveri">
                <lable for="shirina">Ширина двери</lable>
                <input placeholder ="0" type="number" id="shirina-dveri">
            </div>

        </form> <!-- DATA INPUT -->


        <!-- ==================================== -->
        <!-- DATA OUTPUT -->
        <!-- ==================================== -->
        <div id="data-output">
            <div class="data-output_inner">
                <div id="dlinna-otkosov">Длинна откосов</div>
                <div class="result"></div>
            </div>

            <div class="data-output_inner">
                <div id="dlinna-podokonnikov">Длинна подоконников</div>
                <div class="result"></div>
            </div>

            <div class="data-output_inner">
                <div id="ploshad-proemov">Площадь проемов</div>
                <div class="result"></div>
            </div>

            <div class="data-output_inner">
                <div id="perimetor-pomesenia">Периметр помещения</div>
                <div class="result"></div>
            </div>

            <div class="data-output_inner">
                <div id="ploshad-pola">Площадь пола</div>
                <div class="result"></div>
            </div>

            <div class="data-output_inner">
                <div id="ploshad-sten">Площадь стен</div>
                <div class="result"></div>
            </div>

        </div> <!-- DATA OUTPUT -->
    </div>
        <!-- ==================================== -->
        <!-- BUTTONS CALC -->
        <!-- ==================================== -->
    <div id="cont_buttons">
        <div id="calculate">расчитать</div>
        <div id="reset">сбросить</div>
    </div>
    <div id="popup">
        <h1>Для проведения рассчетов вы должны быть зарегистрированы на сайте!</h1>
        <hr>
        <p>Зарегистрироваться ?</p>
        <div class="clearfix popup-inner_container">
            <div class="popup-inner_button" onclick="noPopup()">Отмена</div>

            <div class="popup-inner_button" id="aj" onclick="window.open('logo', '_blank');noPopup();">Да</div>
        </div>
    </div>

    <?php
    return ob_get_clean();

}
/**
 * calc_include @shortcode
 */
add_shortcode('calc_include', 'calc_include_user');


/**
 * Enqueue @scripts and @styles.
 */
function calc_include_scripts() {

    wp_register_style( 'castom-style-calc', PPS_URL.'/castom-style-calc.css', array(), PPS_VERSION, 'screen' );
    wp_enqueue_style( 'castom-style-calc' );

    wp_register_script( 'calk-script', PPS_URL.'/calk-script.js', array(), PPS_VERSION, true );
    wp_enqueue_script( 'calk-script' );
}
add_action( 'wp_enqueue_scripts', 'calc_include_scripts' );



/**
 *  calc includes cripts ajax @param url: window.wp_data.ajax_url,
 */
function js_variables(){
    $variables = array (
        'ajax_url' => admin_url('admin-ajax.php'),
        'is_mobile' => wp_is_mobile()
        // Тут обычно какие-то другие переменные
    );
    echo('<script type="text/javascript">window.wp_data = '.json_encode($variables).';</script>');
}
    add_action('wp_head','js_variables');



/**
 *  calc_include ajax @function
 */
function my(){

$current_user = wp_get_current_user();
if ( 0 == $current_user->ID ) {
    die('not_reg');
}

$shirinaPomeseniya = $_REQUEST['shirinaPomeseniya'];
if ($_REQUEST['shirinaPomeseniya'] == NaN){
    $shirinaPomeseniya = 0;
}
$dlinnaPomeseniya = $_REQUEST['dlinnaPomeseniya'];
if ($_REQUEST['dlinnaPomeseniya'] == NaN){
    $dlinnaPomeseniya = 0;
}
$visotaPomeseniya = $_REQUEST['visotaPomeseniya'];
if ($_REQUEST['visotaPomeseniya'] == NaN){
    $visotaPomeseniya = 0;
}
$dlinnaUgla = $_REQUEST['dlinnaUgla'];
if ($_REQUEST['dlinnaUgla'] == NaN){
    $dlinnaUgla = 0;
}
$shirinaUgla = $_REQUEST['shirinaUgla'];
if ($_REQUEST['shirinaUgla'] == NaN){
    $shirinaUgla = 0;
}
$gubinaKolonniy = $_REQUEST['gubinaKolonniy'];
if ($_REQUEST['gubinaKolonniy'] == NaN){
    $gubinaKolonniy = 0;
}
$sirinaKolonniy = $_REQUEST['sirinaKolonniy'];
if ($_REQUEST['sirinaKolonniy'] == NaN){
    $sirinaKolonniy = 0;
}
$kolihestvoSten = $_REQUEST['kolihestvoSten'];
if ($_REQUEST['kolihestvoSten'] == NaN){
    $kolihestvoSten = 0;
}
$dlinnaSten = $_REQUEST['dlinnaSten'];
if ($_REQUEST['dlinnaSten'] == NaN){
    $dlinnaSten = 0;
}
$visotaPomesenia = $_REQUEST['visotaPomesenia'];
if ($_REQUEST['visotaPomesenia'] == NaN){
    $visotaPomesenia = 0;
}
$kolihestvoProemov = $_REQUEST['kolihestvoProemov'];
if ($_REQUEST['kolihestvoProemov'] == NaN){
    $kolihestvoProemov = 0;
}
$visotaOkna = $_REQUEST['visotaOkna'];
if ($_REQUEST['visotaOkna'] == NaN){
    $visotaOkna = 0;
}
$sirinaOkna = $_REQUEST['sirinaOkna'];
if ($_REQUEST['sirinaOkna'] == NaN){
    $sirinaOkna = 0;
}
$visotaBalkonDveri = $_REQUEST['visotaBalkonDveri'];
if ($_REQUEST['visotaBalkonDveri'] == NaN){
    $visotaBalkonDveri = 0;
}
$sirinaBalkkonDveri = $_REQUEST['sirinaBalkkonDveri'];
if ($_REQUEST['sirinaBalkkonDveri'] == NaN){
    $sirinaBalkkonDveri = 0;
}
$visotaBalkonOkna = $_REQUEST['visotaBalkonOkna'];
if ($_REQUEST['visotaBalkonOkna'] == NaN){
    $visotaBalkonOkna = 0;
}
$sirinaBalkonOkna = $_REQUEST['sirinaBalkonOkna'];
if ($_REQUEST['sirinaBalkonOkna'] == NaN){
    $sirinaBalkonOkna = 0;
}
$kolihestvoDverProemov = $_REQUEST['kolihestvoDverProemov'];
if ($_REQUEST['kolihestvoDverProemov'] == NaN){
    $kolihestvoDverProemov = 0;
}
$visotaDveri = $_REQUEST['visotaDveri'];
if ($_REQUEST['visotaDveri'] == NaN){
    $visotaDveri = 0;
}
$shirinaDveri = $_REQUEST['shirinaDveri'];
if ($_REQUEST['shirinaDveri'] == NaN){
    $shirinaDveri = 0;
}


    $results = array(

        'dlinna_otkosov'      =>  ($visotaOkna  * 2 ) + $sirinaOkna,
        'dlinna_podokonnikov' =>  $sirinaOkna + 100,
        'ploshad_proemov'     =>  ($visotaDveri * $shirinaDveri) + ($visotaOkna * $sirinaOkna),
        'perimetor_pomesenia' =>  ($dlinnaPomeseniya * 2) + ($shirinaPomeseniya * 2),
        'ploshad_pola'        =>  $dlinnaPomeseniya * $shirinaPomeseniya,
        'ploshad_sten'        =>  ((($dlinnaPomeseniya * 2) + ($shirinaPomeseniya * 2)) * $visotaPomeseniya) - (($visotaDveri * $shirinaDveri) + ($visotaOkna * $sirinaOkna))
    
    );
    // $results['ploshad_sten'] = $results['perimetor_pomesenia'] * $visotaPomeseniya - $results['ploshad_proemov'];
        echo json_encode($results);

    exit;
//        wp_die();
}

add_action('wp_ajax_my' , 'my');
add_action('wp_ajax_nopriv_my', 'my'); // no login user



