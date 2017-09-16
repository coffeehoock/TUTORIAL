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

function calc_include_user(){
    ob_start();

    ?>

    <div class="cotainer">

        <div class="data-input">
            <div style = "padding:0; margin: 0;">
                <div class="sector" style="display: flex;">
<!--                    info left-->
                    <p class = "text1">Количество помещений требующих расчет / ремонта</p>
                    <div class="question">?</div>
                    <input class="a-1 clearfix" tyusernumpe="" name="usernum">
                </div>

                <div class="sector" style="display: flex">
                    <p class="text1">1. Введите название помещения</p>
                    <div class="question">?</div>
                    <input class="a-1 clearfix" tyusernumpe="" name="usernum">
                </div>

                <div class="sector">
                    <!-- <div> -->
                    <p class="text1"  style = "margin-top: 20px;">
                        2. Выберите тип помещения</p>
                </div>
                    <!-- </div> -->

                    <div class="Selection">
                        <div class="Selection-inner" >
                            <div class="Selection-type_user"><div>Прямоугольное</div></div>
                            <div class="Selection-type_user"><div>Прямоугольное с углом</div></div>
                            <div class="Selection-type_user"><div>Прямоугольное с выступающим элементом типо колонны</div></div>
                            <div class="Selection-type_user">Нестандартное</div>
                        </div>
                    </div>
                </div>
                <!-- выбор параметров для типа помещения -->

                <!-- прямоугольное -->
                <div class="Selection_type">
                    <div>
                        <div><h2>Размер помещения</h2></div>
                        <div style="display: flex;"><label>Ширина помещения</label><input  class="interaction-js" type="text" name="type_inner-1">mm</div>
                        <div style="display: flex;"><label>Длина помещения</label><input  class="interaction-js" type="text" name="type_inner-1">mm</div>
                        <div style="display: flex;"><label>Высота помещения</label><input  class="interaction-js" type="text" name="type_inner-1">mm</div>
                    </div>
                </div>
                <!-- прямоугольное с углом -->
                <div class="Selection_type">
                    <div>
                        <!-- дополнительно -->
                        <div><h2>Размер выступающего угла</h2></div>
                        <div style="display: flex;"><label>Длина выступающего угла</label><input  class="interaction-js" type="text" name="type_inner-2">mm</div>
                        <div style="display: flex;"><label>Ширина выступающего угла</label><input  class="interaction-js" type="text" name="type_inner-2">mm</div>
                    </div>
                </div>
                <!-- прямоугольное с выступающим элементом типо колонны -->
                <div class="Selection_type">
                    <div>
                        <!-- дополнительно -->
                        <div><h2>Размер выступающей колонны</h2></div>
                        <div style="display: flex;"><label>Глубина колонны</label><input  class="interaction-js" type="text" name="type_inner-3">mm</div>
                        <div style="display: flex;"><label>Ширина колонны</label><input  class="interaction-js" type="text" name="type_inner-3">mm</div>
                    </div>
                </div>
                <!-- нестандартное -->
                <div class="Selection_type">
                    <div>
                        <div><h2>Размер помещения</h2></div>
                        <div style="display: flex;"><label>Количество стен в помещении</label><input  class="interaction-js" type="text" name="type_inner-4">mm</div>
                        <div style="display: flex;"><label>Длина каждой стены по отделности</label><input  class="interaction-js" type="text" name="type_inner-4">mm</div>
                        <div style="display: flex;"><label>Высота помещения</label><input  class="interaction-js" type="text" name="type_inner-4">mm</div>
                    </div>
                </div>
                <!-- ввод размеров проемов -->
                <div class="sector">
                    <div>
                        <h2>Размеры проемов</h2>

                        <div><h3>Оконный проем</h3></div>
                        <div style="display: flex;"><label>Количество проемов</label><input  class="interaction-js" type="text" name="type_inner">mm</div>
                        <div style="display: flex;"><label>Высота окна</label><input  class="interaction-js" type="text" name="type_inner">mm</div>
                        <div style="display: flex;"><label>Ширина окна</label><input  class="interaction-js" type="text" name="type_inner">mm</div>

                        <div><h3>Балконный блок</h3></div>
                        <div style="display: flex;"><label>Высота балконной двери</label><input  class="interaction-js" type="text" name="type_inner">mm</div>
                        <div style="display: flex;"><label>Ширина балконной двери</label><input  class="interaction-js" type="text" name="type_inner">mm</div>
                        <div style="display: flex;"><label>Высота окна</label><input  class="interaction-js" type="text" name="type_inner">mm</div>
                        <div style="display: flex;"><label>Ширина окна</label><input  class="interaction-js" type="text" name="type_inner">mm</div>

                        <div><h3>Дверной проем</h3></div>
                        <div style="display: flex;"><label>Количество проемов</label><input  class="interaction-js" type="text" name="type_inner">mm</div>
                        <div style="display: flex;"><label>Высота двери</label><input  class="interaction-js" type="text" name="type_inner">mm</div>
                        <div style="display: flex;"><label>Ширина двери</label><input  class="interaction-js" type="text" name="type_inner">mm</div>
                    </div>
                </div>
            </div>
            <div class="calculate">
<!--                <h1 style="color: red" id="currentuser"></h1>-->
                    <?php
                            $current_user = wp_get_current_user();
                            if ( 0 == $current_user->ID ) {
//                                echo 'Не авторизован';
//                                echo "<button id=\"calculate-button\" onclick='redirectPopup();'>рассчитать</button>";
                                $varoption = "redirectPopup()";
                            } else {
//                                echo 'Авторизован';
//                                echo "<button id=\"calculate-button\" onclick='calculate();'>рассчитать</button>";
                                $varoption = "calculate()";
                            }

                    ?>
                <button id="calculate-button" onclick="<?php echo $varoption; ?>">рассчитать</button>
                <button id="calculate-button" onclick="reset();">сброс</button>

                <div id="popup">
                    <h1>Вы не авторизованы</h1>
                    <p>Зарегистрироваться ?</p>
                    <div>
                        <div class="popup-inner_button" onclick="noPopup()">Отмена</div>
                        <div class="popup-inner_button" id="aj" onclick="loginPopup()">Да</div>
                    </div>
                </div>
                <!-- reset() -->
            </div>
        </div>

        <!-- вывод данных -->
        <div class="data-output">
            <!-- blok-data-output -->
            <div class="blok-data-output">
                <div class="output-inner">Длинна откосов</div>
                <!-- result -->
                <div class="result">0</div>
            </div>

            <div class="blok-data-output">
                <div class="output-inner">Длинна подоконников</div>
                <!-- result -->
                <div class="result">0</div>
            </div>

            <div class="blok-data-output">
                <div class="output-inner">Площадь проемов</div>
                <!-- result -->
                <div class="result">0</div>
            </div>

            <div class="blok-data-output">
                <div class="output-inner">Периметр помещения</div>
                <!-- result -->
                <div class="result">0</div>
            </div>

            <div class="blok-data-output">
                <div class="output-inner">Площадь пола</div>
                <!-- result -->
                <div class="result">0</div>
            </div>

            <div class="blok-data-output">
                <div class="output-inner">Площадь стен</div>
                <!-- result -->
                <div class="result">0</div>
            </div>

        </div>
    </div> <!-- cotainer -->
    <?php
    return ob_get_clean();
}


add_shortcode('calc_include', 'calc_include_user');


/**
 * Enqueue scripts and styles.
 */
function calc_include_scripts() {

    wp_register_style( 'castom-style-calc', PPS_URL.'/castom-style-calc.css', array(), PPS_VERSION, 'screen' );
    wp_enqueue_style( 'castom-style-calc' );

    wp_register_script( 'calk-script', PPS_URL.'/calk-script.js', array(), PPS_VERSION, true );
    wp_enqueue_script( 'calk-script' );
}

add_action( 'wp_enqueue_scripts', 'calc_include_scripts' );
//echo plugins_url('/castom-style-calc.css');

