var mJson=$.ajax({url:"../static/js/food.json",async:false});
var temp=JSON.parse(mJson.responseText);
var temp2=JSON.parse(mJson.responseText);
var CAL_NEED = 2250;
var FAT_NEED = 72220000 / 1.5;
var PRO_NEED = 65000000;
var CARBS_NEED = 120000000;
var Calcium_NEED = 800000;
var Chloride_NEED = 2300000;
var Chromium_NEED = 30;
var Copper_NEED = 800;
var Iodine_NEED = 120;
var Iron_NEED = 12000;
var Magnesium_NEED = 330000;
var Manganese_NEED = 4500;
var Molybdenum_NEED = 100;
var Phosphorus_NEED = 720000;
var Potassium_NEED = 2000000;
var Selenium_NEED = 60;
var Sodium_NEED = 1500000;
var Zinc_NEED = 12500;
var VitaminA_NEED = 800;
var VitaminB1_NEED = 1400;
var VitaminB2_NEED = 1400;
var VitaminB3_NEED = 15000;
var VitaminB5_NEED = 5000;
var VitaminB6_NEED = 1400;
// var VitaminB7_NEED = 0;
var VitaminB9_NEED = 400;
var VitaminB12_NEED = 2400;
var VitaminC_NEED = 100000;
var VitaminE_NEED = 14000;
var VitaminK_NEED = 80;
var Choline_NEED = 500000;
var Isoleucine_NEED = 1350000;
var Histidine_NEED = 1350000;
var Leucine_NEED = 1870000;
var Lysine_NEED = 1600000;
var Methionine_NEED = 1720000;
var Phenylalanine_NEED = 1860000;
var Tryptophan_NEED = 460000;
var Threonine_NEED = 465000 * 2;
var Valine_NEED = 670000 * 2;
var α_Linolenic_acid_NEED = 11560000;
var Linolenic_acid_num = 1730000;

function Change_NL_Option() {
    var XB_NEED = document.getElementById('XB').value;
    // alert("1")
    if (XB_NEED == '男') {
         $('#NL').html("        <option value=\"18~49岁\" id=\"C1\">18~49岁</option>\n" +
            "        <option value=\"1岁\" id=\"C2\">1岁</option>\n" +
            "        <option value=\"2岁\" id=\"C3\">2岁</option>\n" +
            "        <option value=\"3岁\" id=\"C4\">3岁</option>\n" +
            "        <option value=\"4岁\" id=\"C5\">4岁</option>\n" +
            "        <option value=\"5岁\" id=\"C6\">5岁</option>\n" +
            "        <option value=\"6岁\" id=\"C7\">6岁</option>\n" +
            "        <option value=\"7岁\" id=\"C8\">7岁</option>\n" +
            "        <option value=\"8岁\" id=\"C9\">8岁</option>\n" +
            "        <option value=\"9岁\" id=\"C10\">9岁</option>\n" +
            "        <option value=\"10岁\" id=\"C11\">10岁</option>\n" +
            "        <option value=\"11~13岁\" id=\"C12\">11~13岁</option>\n" +
            "        <option value=\"14~17岁\" id=\"C13\">14~17岁</option>\n" +
            "        <option value=\"50~64岁\" id=\"C14\">50~64岁</option>\n" +
            "        <option value=\"65~79岁\" id=\"C15\">65~79岁</option>\n" +
            "        <option value=\"80岁以上\" id=\"C16\">80岁以上</option>");

}
if (XB_NEED == '女') {
    $('#NL').html("        <option value=\"18~49岁\" id=\"C1\">18~49岁</option>\n" +
        "        <option value=\"1岁\" id=\"C2\">1岁</option>\n" +
        "        <option value=\"2岁\" id=\"C3\">2岁</option>\n" +
        "        <option value=\"3岁\" id=\"C4\">3岁</option>\n" +
        "        <option value=\"4岁\" id=\"C5\">4岁</option>\n" +
        "        <option value=\"5岁\" id=\"C6\">5岁</option>\n" +
        "        <option value=\"6岁\" id=\"C7\">6岁</option>\n" +
        "        <option value=\"7岁\" id=\"C8\">7岁</option>\n" +
        "        <option value=\"8岁\" id=\"C9\">8岁</option>\n" +
        "        <option value=\"9岁\" id=\"C10\">9岁</option>\n" +
        "        <option value=\"10岁\" id=\"C11\">10岁</option>\n" +
        "        <option value=\"11~13岁\" id=\"C12\">11~13岁</option>\n" +
        "        <option value=\"14~17岁\" id=\"C13\">14~17岁</option>\n" +
        "        <option value=\"50~64岁\" id=\"C14\">50~64岁</option>\n" +
        "        <option value=\"65~79岁\" id=\"C15\">65~79岁</option>\n" +
        "        <option value=\"80岁以上\" id=\"C16\">80岁以上</option>");
}
if (XB_NEED == '孕妇（早）') {
    $('#NL').html("<option value=\"18~49岁\" id=\"C1\">18~49岁</option>");
}
if (XB_NEED == '孕妇（中）') {
    $('#NL').html("<option value=\"18~49岁\" id=\"C1\">18~49岁</option>");
}
if (XB_NEED == '孕妇（晚）') {
    $('#NL').html("<option value=\"18~49岁\" id=\"C1\">18~49岁</option>");
}
if (XB_NEED == '母乳') {
    $('#NL').html("<option value=\"18~49岁\" id=\"C1\">18~49岁</option>");
}
if (XB_NEED == '婴儿') {
    $('#NL').html("<option value=\"1月\" id=\"C17\" >1月</option>\n" +
        "        <option value=\"2月\" id=\"C18\" >2月</option>\n" +
        "        <option value=\"3月\" id=\"C19\" >3月</option>\n" +
        "        <option value=\"4月\" id=\"C20\" >4月</option>\n" +
        "        <option value=\"5月\" id=\"C21\" >5月</option>\n" +
        "        <option value=\"6月\" id=\"C22\" >6月</option>\n" +
        "        <option value=\"7月\" id=\"C23\" >7月</option>\n" +
        "        <option value=\"8月\" id=\"C24\" >8月</option>\n" +
        "        <option value=\"9月\" id=\"C25\" >9月</option>\n" +
        "        <option value=\"10月\" id=\"C26\" >10月</option>\n" +
        "        <option value=\"11月\" id=\"C27\" >11月</option>");
}
}

function NEED() {
    var XB_NEED = document.getElementById('XB').value;
    var NL_NEED = document.getElementById('NL').value;
    if (XB_NEED == '男') {
         // $('#NL').html("        <option value=\"18~49岁\" id=\"C1\">18~49岁</option>\n" +
         //    "        <option value=\"1岁\" id=\"C2\">1岁</option>\n" +
         //    "        <option value=\"2岁\" id=\"C3\">2岁</option>\n" +
         //    "        <option value=\"3岁\" id=\"C4\">3岁</option>\n" +
         //    "        <option value=\"4岁\" id=\"C5\">4岁</option>\n" +
         //    "        <option value=\"5岁\" id=\"C6\">5岁</option>\n" +
         //    "        <option value=\"6岁\" id=\"C7\">6岁</option>\n" +
         //    "        <option value=\"7岁\" id=\"C8\">7岁</option>\n" +
         //    "        <option value=\"8岁\" id=\"C9\">8岁</option>\n" +
         //    "        <option value=\"9岁\" id=\"C10\">9岁</option>\n" +
         //    "        <option value=\"10岁\" id=\"C11\">10岁</option>\n" +
         //    "        <option value=\"11~13岁\" id=\"C12\">11~13岁</option>\n" +
         //    "        <option value=\"14~17岁\" id=\"C13\">14~17岁</option>\n" +
         //    "        <option value=\"50~64岁\" id=\"C14\">50~64岁</option>\n" +
         //    "        <option value=\"65~79岁\" id=\"C15\">65~79岁</option>\n" +
         //    "        <option value=\"80岁以上\" id=\"C16\">80岁以上</option>");
        // $('#C1').each(function(){this.style='display:list-item'});
        // $('#C2').each(function(){this.style='display:list-item'});
        // $('#C3').each(function(){this.style='display:list-item'});
        // $('#C4').each(function(){this.style='display:list-item'});
        // $('#C5').each(function(){this.style='display:list-item'});
        // $('#C6').each(function(){this.style='display:list-item'});
        // $('#C7').each(function(){this.style='display:list-item'});
        // $('#C8').each(function(){this.style='display:list-item'});
        // $('#C9').each(function(){this.style='display:list-item'});
        // $('#C10').each(function(){this.style='display:list-item'});
        // $('#C11').each(function(){this.style='display:list-item'});
        // $('#C12').each(function(){this.style='display:list-item'});
        // $('#C13').each(function(){this.style='display:list-item'});
        // $('#C14').each(function(){this.style='display:list-item'});
        // $('#C15').each(function(){this.style='display:list-item'});
        // $('#C16').each(function(){this.style='display:list-item'});
        // $('#C17').each(function(){this.style='display:none'});
        // $('#C18').each(function(){this.style='display:none'});
        // $('#C19').each(function(){this.style='display:none'});
        // $('#C20').each(function(){this.style='display:none'});
        // $('#C21').each(function(){this.style='display:none'});
        // $('#C22').each(function(){this.style='display:none'});
        // $('#C23').each(function(){this.style='display:none'});
        // $('#C24').each(function(){this.style='display:none'});
        // $('#C25').each(function(){this.style='display:none'});
        // $('#C26').each(function(){this.style='display:none'});
        // $('#C27').each(function(){this.style='display:none'});
        if (NL_NEED == '18~49岁') {
            CAL_NEED = 2250;
            FAT_NEED = 72220000 / 1.5;
            PRO_NEED = 65000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 800000;
            Chloride_NEED = 2300000;
            Chromium_NEED = 30;
            Copper_NEED = 800;
            Iodine_NEED = 120;
            Iron_NEED = 12000;
            Magnesium_NEED = 330000;
            Manganese_NEED = 4500;
            Molybdenum_NEED = 100;
            Phosphorus_NEED = 720000;
            Potassium_NEED = 2000000;
            Selenium_NEED = 60;
            Sodium_NEED = 1500000;
            Zinc_NEED = 12500;
            VitaminA_NEED = 800;
            VitaminB1_NEED = 1400;
            VitaminB2_NEED = 1400;
            VitaminB3_NEED = 15000;
            VitaminB5_NEED = 5000;
            VitaminB6_NEED = 1400;
            VitaminB9_NEED = 400;
            VitaminB12_NEED = 2400;
            VitaminC_NEED = 100000;
            VitaminE_NEED = 14000;
            VitaminK_NEED = 80;
            Choline_NEED = 500000;
            Isoleucine_NEED = 675000 * 2;
            Histidine_NEED = 675000 * 2;
            Leucine_NEED = 935000 * 2;
            Lysine_NEED = 800000 * 2;
            Methionine_NEED = 860000 * 2;
            Phenylalanine_NEED = 930000 * 2;
            Tryptophan_NEED = 230000 * 2;
            Threonine_NEED = 465000 * 2;
            Valine_NEED = 670000 * 2;
            α_Linolenic_acid_NEED = 11560000;
            Linolenic_acid_num = 1730000;
        } else if (NL_NEED == '1岁') {
            CAL_NEED = 900;
            FAT_NEED = 25000000 / 1.5;
            PRO_NEED = 25000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 6000000;
            Chloride_NEED = 1100000;
            Chromium_NEED = 15;
            Copper_NEED = 300;
            Iodine_NEED = 90;
            Iron_NEED = 9000;
            Magnesium_NEED = 140000;
            Manganese_NEED = 1500;
            Molybdenum_NEED = 40;
            Phosphorus_NEED = 300000;
            Potassium_NEED = 900000;
            Selenium_NEED = 25;
            Sodium_NEED = 700000;
            Zinc_NEED = 4000;
            VitaminA_NEED = 310;
            VitaminB1_NEED = 600;
            VitaminB2_NEED = 600;
            VitaminB3_NEED = 6000;
            VitaminB5_NEED = 2100;
            VitaminB6_NEED = 600;
            VitaminB9_NEED = 160;
            VitaminB12_NEED = 1000;
            VitaminC_NEED = 40000;
            VitaminE_NEED = 6000;
            VitaminK_NEED = 30;
            Choline_NEED = 200000;
            Isoleucine_NEED = 907054;
            Histidine_NEED = 362821;
            Leucine_NEED = 2086224;
            Lysine_NEED = 1334665;
            Methionine_NEED = 751559;
            Phenylalanine_NEED = 1619739;
            Tryptophan_NEED = 220284;
            Threonine_NEED = 1127338;
            Valine_NEED = 1205086;
            α_Linolenic_acid_NEED = 4000000;
            Linolenic_acid_num = 600000;
        } else if (NL_NEED == '2岁') {
            CAL_NEED = 1100;
            FAT_NEED = 30560000 / 1.5;
            PRO_NEED = 25000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 6000000;
            Chloride_NEED = 1100000;
            Chromium_NEED = 15;
            Copper_NEED = 300;
            Iodine_NEED = 90;
            Iron_NEED = 9000;
            Magnesium_NEED = 140000;
            Manganese_NEED = 1500;
            Molybdenum_NEED = 40;
            Phosphorus_NEED = 300000;
            Potassium_NEED = 900000;
            Selenium_NEED = 25;
            Sodium_NEED = 700000;
            Zinc_NEED = 4000;
            VitaminA_NEED = 310;
            VitaminB1_NEED = 600;
            VitaminB2_NEED = 600;
            VitaminB3_NEED = 6000;
            VitaminB5_NEED = 2100;
            VitaminB6_NEED = 600;
            VitaminB9_NEED = 160;
            VitaminB12_NEED = 1000;
            VitaminC_NEED = 40000;
            VitaminE_NEED = 6000;
            VitaminK_NEED = 30;
            Choline_NEED = 200000;
            Isoleucine_NEED = 907054;
            Histidine_NEED = 362821;
            Leucine_NEED = 2086224;
            Lysine_NEED = 1334665;
            Methionine_NEED = 751559;
            Phenylalanine_NEED = 1619739;
            Tryptophan_NEED = 220284;
            Threonine_NEED = 1127338;
            Valine_NEED = 1205086;
            α_Linolenic_acid_NEED = 4890000;
            Linolenic_acid_num = 730000;
        } else if (NL_NEED == '3岁') {
            CAL_NEED = 1250;
            FAT_NEED = 34720000 / 1.5;
            PRO_NEED = 25000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 6000000;
            Chloride_NEED = 1100000;
            Chromium_NEED = 15;
            Copper_NEED = 300;
            Iodine_NEED = 90;
            Iron_NEED = 9000;
            Magnesium_NEED = 140000;
            Manganese_NEED = 1500;
            Molybdenum_NEED = 40;
            Phosphorus_NEED = 300000;
            Potassium_NEED = 900000;
            Selenium_NEED = 25;
            Sodium_NEED = 700000;
            Zinc_NEED = 4000;
            VitaminA_NEED = 310;
            VitaminB1_NEED = 600;
            VitaminB2_NEED = 600;
            VitaminB3_NEED = 6000;
            VitaminB5_NEED = 2100;
            VitaminB6_NEED = 600;
            VitaminB9_NEED = 160;
            VitaminB12_NEED = 1000;
            VitaminC_NEED = 40000;
            VitaminE_NEED = 6000;
            VitaminK_NEED = 30;
            Choline_NEED = 200000;
            Isoleucine_NEED = 907054;
            Histidine_NEED = 362821;
            Leucine_NEED = 2086224;
            Lysine_NEED = 1334665;
            Methionine_NEED = 751559;
            Phenylalanine_NEED = 1619739;
            Tryptophan_NEED = 220284;
            Threonine_NEED = 1127338;
            Valine_NEED = 1205086;
            α_Linolenic_acid_NEED = 5560000;
            Linolenic_acid_num = 830000;
        } else if (NL_NEED == '4岁') {
            CAL_NEED = 1300;
            FAT_NEED = 36100000 / 1.5;
            PRO_NEED = 30000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 8000000;
            Chloride_NEED = 1400000;
            Chromium_NEED = 20;
            Copper_NEED = 400;
            Iodine_NEED = 90;
            Iron_NEED = 10000;
            Magnesium_NEED = 160000;
            Manganese_NEED = 2000;
            Molybdenum_NEED = 50;
            Phosphorus_NEED = 350000;
            Potassium_NEED = 1200000;
            Selenium_NEED = 30;
            Sodium_NEED = 900000;
            Zinc_NEED = 5500;
            VitaminA_NEED = 360;
            VitaminB1_NEED = 800;
            VitaminB2_NEED = 700;
            VitaminB3_NEED = 8000;
            VitaminB5_NEED = 2500;
            VitaminB6_NEED = 700;
            VitaminB9_NEED = 190;
            VitaminB12_NEED = 1200;
            VitaminC_NEED = 50000;
            VitaminE_NEED = 7000;
            VitaminK_NEED = 40;
            Choline_NEED = 250000;
            Isoleucine_NEED = 603221;
            Histidine_NEED = 273000;
            Leucine_NEED = 1420488;
            Lysine_NEED = 1245360;
            Methionine_NEED = 525386;
            Phenylalanine_NEED = 1342653;
            Tryptophan_NEED = 243234;
            Threonine_NEED = 719973;
            Valine_NEED = 739432;
            α_Linolenic_acid_NEED = 5780000;
            Linolenic_acid_num = 870000;
        } else if (NL_NEED == '5岁') {
            CAL_NEED = 1400;
            FAT_NEED = 38890000 / 1.5;
            PRO_NEED = 30000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 8000000;
            Chloride_NEED = 1400000;
            Chromium_NEED = 20;
            Copper_NEED = 400;
            Iodine_NEED = 90;
            Iron_NEED = 10000;
            Magnesium_NEED = 160000;
            Manganese_NEED = 2000;
            Molybdenum_NEED = 50;
            Phosphorus_NEED = 350000;
            Potassium_NEED = 1200000;
            Selenium_NEED = 30;
            Sodium_NEED = 900000;
            Zinc_NEED = 5500;
            VitaminA_NEED = 360;
            VitaminB1_NEED = 800;
            VitaminB2_NEED = 700;
            VitaminB3_NEED = 8000;
            VitaminB5_NEED = 2500;
            VitaminB6_NEED = 700;
            VitaminB9_NEED = 190;
            VitaminB12_NEED = 1200;
            VitaminC_NEED = 50000;
            VitaminE_NEED = 7000;
            VitaminK_NEED = 40;
            Choline_NEED = 250000;
            Isoleucine_NEED = 603221;
            Histidine_NEED = 273000;
            Leucine_NEED = 1420488;
            Lysine_NEED = 1245360;
            Methionine_NEED = 525386;
            Phenylalanine_NEED = 1342653;
            Tryptophan_NEED = 243234;
            Threonine_NEED = 719973;
            Valine_NEED = 739432;
            α_Linolenic_acid_NEED = 6220000;
            Linolenic_acid_num = 930000;
        } else if (NL_NEED == '6岁') {
            CAL_NEED = 1600;
            FAT_NEED = 44440000 / 1.5;
            PRO_NEED = 30000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 8000000;
            Chloride_NEED = 1400000;
            Chromium_NEED = 20;
            Copper_NEED = 400;
            Iodine_NEED = 90;
            Iron_NEED = 10000;
            Magnesium_NEED = 160000;
            Manganese_NEED = 2000;
            Molybdenum_NEED = 50;
            Phosphorus_NEED = 350000;
            Potassium_NEED = 1200000;
            Selenium_NEED = 30;
            Sodium_NEED = 900000;
            Zinc_NEED = 5500;
            VitaminA_NEED = 360;
            VitaminB1_NEED = 800;
            VitaminB2_NEED = 700;
            VitaminB3_NEED = 8000;
            VitaminB5_NEED = 2500;
            VitaminB6_NEED = 700;
            VitaminB9_NEED = 190;
            VitaminB12_NEED = 1200;
            VitaminC_NEED = 50000;
            VitaminE_NEED = 7000;
            VitaminK_NEED = 40;
            Choline_NEED = 250000;
            Isoleucine_NEED = 603221;
            Histidine_NEED = 273000;
            Leucine_NEED = 1420488;
            Lysine_NEED = 1245360;
            Methionine_NEED = 525386;
            Phenylalanine_NEED = 1342653;
            Tryptophan_NEED = 243234;
            Threonine_NEED = 719973;
            Valine_NEED = 739432;
            α_Linolenic_acid_NEED = 7110000;
            Linolenic_acid_num = 1070000;
        } else if (NL_NEED == '7岁') {
            CAL_NEED = 1500;
            FAT_NEED = 47220000 / 1.5;
            PRO_NEED = 40000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 10000000;
            Chloride_NEED = 1900000;
            Chromium_NEED = 25;
            Copper_NEED = 500;
            Iodine_NEED = 90;
            Iron_NEED = 13000;
            Magnesium_NEED = 220000;
            Manganese_NEED = 3000;
            Molybdenum_NEED = 65;
            Phosphorus_NEED = 470000;
            Potassium_NEED = 1500000;
            Selenium_NEED = 40;
            Sodium_NEED = 1200000;
            Zinc_NEED = 7000;
            VitaminA_NEED = 500;
            VitaminB1_NEED = 1000;
            VitaminB2_NEED = 1000;
            VitaminB3_NEED = 10000;
            VitaminB5_NEED = 3500;
            VitaminB6_NEED = 1000;
            VitaminB9_NEED = 250;
            VitaminB12_NEED = 1600;
            VitaminC_NEED = 65000;
            VitaminE_NEED = 9000;
            VitaminK_NEED = 50;
            Choline_NEED = 300000;
            Isoleucine_NEED = 930000;
            Histidine_NEED = 421000;
            Leucine_NEED = 2190000;
            Lysine_NEED = 1920000;
            Methionine_NEED = 810000;
            Phenylalanine_NEED = 2070000;
            Tryptophan_NEED = 375000;
            Threonine_NEED = 1110000;
            Valine_NEED = 1140000;
            α_Linolenic_acid_NEED = 7560000;
            Linolenic_acid_num = 1130000;
        } else if (NL_NEED == '8岁') {
            CAL_NEED = 1650;
            FAT_NEED = 51390000 / 1.5;
            PRO_NEED = 40000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 10000000;
            Chloride_NEED = 1900000;
            Chromium_NEED = 25;
            Copper_NEED = 500;
            Iodine_NEED = 90;
            Iron_NEED = 13000;
            Magnesium_NEED = 220000;
            Manganese_NEED = 3000;
            Molybdenum_NEED = 65;
            Phosphorus_NEED = 470000;
            Potassium_NEED = 1500000;
            Selenium_NEED = 40;
            Sodium_NEED = 1200000;
            Zinc_NEED = 7000;
            VitaminA_NEED = 500;
            VitaminB1_NEED = 1000;
            VitaminB2_NEED = 1000;
            VitaminB3_NEED = 10000;
            VitaminB5_NEED = 3500;
            VitaminB6_NEED = 1000;
            VitaminB9_NEED = 250;
            VitaminB12_NEED = 1600;
            VitaminC_NEED = 65000;
            VitaminE_NEED = 9000;
            VitaminK_NEED = 50;
            Choline_NEED = 300000;
            Isoleucine_NEED = 930000;
            Histidine_NEED = 421000;
            Leucine_NEED = 2190000;
            Lysine_NEED = 1920000;
            Methionine_NEED = 810000;
            Phenylalanine_NEED = 2070000;
            Tryptophan_NEED = 375000;
            Threonine_NEED = 1110000;
            Valine_NEED = 1140000;
            α_Linolenic_acid_NEED = 8220000;
            Linolenic_acid_num = 1230000;
        } else if (NL_NEED == '9岁') {
            CAL_NEED = 1750;
            FAT_NEED = 55560000 / 1.5;
            PRO_NEED = 40000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 10000000;
            Chloride_NEED = 1900000;
            Chromium_NEED = 25;
            Copper_NEED = 500;
            Iodine_NEED = 90;
            Iron_NEED = 13000;
            Magnesium_NEED = 220000;
            Manganese_NEED = 3000;
            Molybdenum_NEED = 65;
            Phosphorus_NEED = 470000;
            Potassium_NEED = 1500000;
            Selenium_NEED = 40;
            Sodium_NEED = 1200000;
            Zinc_NEED = 7000;
            VitaminA_NEED = 500;
            VitaminB1_NEED = 1000;
            VitaminB2_NEED = 1000;
            VitaminB3_NEED = 10000;
            VitaminB5_NEED = 3500;
            VitaminB6_NEED = 1000;
            VitaminB9_NEED = 250;
            VitaminB12_NEED = 1600;
            VitaminC_NEED = 65000;
            VitaminE_NEED = 9000;
            VitaminK_NEED = 50;
            Choline_NEED = 300000;
            Isoleucine_NEED = 930000;
            Histidine_NEED = 421000;
            Leucine_NEED = 2190000;
            Lysine_NEED = 1920000;
            Methionine_NEED = 810000;
            Phenylalanine_NEED = 2070000;
            Tryptophan_NEED = 375000;
            Threonine_NEED = 1110000;
            Valine_NEED = 1140000;
            α_Linolenic_acid_NEED = 8890000;
            Linolenic_acid_num = 1330000;
        } else if (NL_NEED == '10岁') {
            CAL_NEED = 1800;
            FAT_NEED = 56940000 / 1.5;
            PRO_NEED = 40000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 10000000;
            Chloride_NEED = 1900000;
            Chromium_NEED = 25;
            Copper_NEED = 500;
            Iodine_NEED = 90;
            Iron_NEED = 13000;
            Magnesium_NEED = 220000;
            Manganese_NEED = 3000;
            Molybdenum_NEED = 65;
            Phosphorus_NEED = 470000;
            Potassium_NEED = 1500000;
            Selenium_NEED = 40;
            Sodium_NEED = 1200000;
            Zinc_NEED = 7000;
            VitaminA_NEED = 500;
            VitaminB1_NEED = 1000;
            VitaminB2_NEED = 1000;
            VitaminB3_NEED = 10000;
            VitaminB5_NEED = 3500;
            VitaminB6_NEED = 1000;
            VitaminB9_NEED = 250;
            VitaminB12_NEED = 1600;
            VitaminC_NEED = 65000;
            VitaminE_NEED = 9000;
            VitaminK_NEED = 50;
            Choline_NEED = 300000;
            Isoleucine_NEED = 930000;
            Histidine_NEED = 421000;
            Leucine_NEED = 2190000;
            Lysine_NEED = 1920000;
            Methionine_NEED = 810000;
            Phenylalanine_NEED = 2070000;
            Tryptophan_NEED = 375000;
            Threonine_NEED = 1110000;
            Valine_NEED = 1140000;
            α_Linolenic_acid_NEED = 9110000;
            Linolenic_acid_num = 1370000;
        } else if (NL_NEED == '11~13岁') {
            CAL_NEED = 2050;
            FAT_NEED = 65280000 / 1.5;
            PRO_NEED = 60000000;
            CARBS_NEED = 150000000;
            Calcium_NEED = 12000000;
            Chloride_NEED = 2200000;
            Chromium_NEED = 30;
            Copper_NEED = 700;
            Iodine_NEED = 110;
            Iron_NEED = 15000;
            Magnesium_NEED = 300000;
            Manganese_NEED = 4000;
            Molybdenum_NEED = 90;
            Phosphorus_NEED = 640000;
            Potassium_NEED = 1900000;
            Selenium_NEED = 55;
            Sodium_NEED = 1400000;
            Zinc_NEED = 10000;
            VitaminA_NEED = 670;
            VitaminB1_NEED = 1300;
            VitaminB2_NEED = 1300;
            VitaminB3_NEED = 14000;
            VitaminB5_NEED = 4500;
            VitaminB6_NEED = 1300;
            VitaminB9_NEED = 350;
            VitaminB12_NEED = 2100;
            VitaminC_NEED = 90000;
            VitaminE_NEED = 13000;
            VitaminK_NEED = 70;
            Choline_NEED = 400000;
            Isoleucine_NEED = 1260000;
            Histidine_NEED = 482000;
            Leucine_NEED = 1890000;
            Lysine_NEED = 2520000;
            Methionine_NEED = 1134000;
            Phenylalanine_NEED = 1134000;
            Tryptophan_NEED = 168000;
            Threonine_NEED = 1470000;
            Valine_NEED = 1386000;
            α_Linolenic_acid_NEED = 10440000;
            Linolenic_acid_num = 1570000;
        } else if (NL_NEED == '14~17岁') {
            CAL_NEED = 2500;
            FAT_NEED = 79170000 / 1.5;
            PRO_NEED = 70000000;
            CARBS_NEED = 150000000;
            Calcium_NEED = 10000000;
            Chloride_NEED = 2500000;
            Chromium_NEED = 35;
            Copper_NEED = 800;
            Iodine_NEED = 120;
            Iron_NEED = 16000;
            Magnesium_NEED = 320000;
            Manganese_NEED = 4500;
            Molybdenum_NEED = 100;
            Phosphorus_NEED = 710000;
            Potassium_NEED = 2200000;
            Selenium_NEED = 60;
            Sodium_NEED = 1600000;
            Zinc_NEED = 12000;
            VitaminA_NEED = 820;
            VitaminB1_NEED = 1600;
            VitaminB2_NEED = 1500;
            VitaminB3_NEED = 16000;
            VitaminB5_NEED = 5000;
            VitaminB6_NEED = 1400;
            VitaminB9_NEED = 400;
            VitaminB12_NEED = 2400;
            VitaminC_NEED = 100000;
            VitaminE_NEED = 14000;
            VitaminK_NEED = 75;
            Choline_NEED = 500000;
            Isoleucine_NEED = 550000 * 2;
            Histidine_NEED = 550000 * 2;
            Leucine_NEED = 770000 * 2;
            Lysine_NEED = 660000 * 2;
            Methionine_NEED = 715000 * 2;
            Phenylalanine_NEED = 770000 * 2;
            Tryptophan_NEED = 192500 * 2;
            Threonine_NEED = 385000 * 2;
            Valine_NEED = 550000 * 2;
            α_Linolenic_acid_NEED = 12670000;
            Linolenic_acid_num = 1900000;
        } else if (NL_NEED == '50~64岁') {
            CAL_NEED = 2100;
            FAT_NEED = 68060000 / 1.5;
            PRO_NEED = 65000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 10000000;
            Chloride_NEED = 2200000;
            Chromium_NEED = 30;
            Copper_NEED = 800;
            Iodine_NEED = 120;
            Iron_NEED = 12000;
            Magnesium_NEED = 330000;
            Manganese_NEED = 4500;
            Molybdenum_NEED = 100;
            Phosphorus_NEED = 720000;
            Potassium_NEED = 2000000;
            Selenium_NEED = 60;
            Sodium_NEED = 1400000;
            Zinc_NEED = 12500;
            VitaminA_NEED = 800;
            VitaminB1_NEED = 1400;
            VitaminB2_NEED = 1400;
            VitaminB3_NEED = 14000;
            VitaminB5_NEED = 5000;
            VitaminB6_NEED = 1600;
            VitaminB9_NEED = 400;
            VitaminB12_NEED = 2400;
            VitaminC_NEED = 100000;
            VitaminE_NEED = 14000;
            VitaminK_NEED = 80;
            Choline_NEED = 500000;
            Isoleucine_NEED = 650000 * 2;
            Histidine_NEED = 650000 * 2;
            Leucine_NEED = 910000 * 2;
            Lysine_NEED = 780000 * 2;
            Methionine_NEED = 845000 * 2;
            Phenylalanine_NEED = 910000 * 2;
            Tryptophan_NEED = 227500 * 2;
            Threonine_NEED = 455000 * 2;
            Valine_NEED = 650000 * 2;
            α_Linolenic_acid_NEED = 10890000;
            Linolenic_acid_num = 1630000;
        } else if (NL_NEED == '65~79岁') {
            CAL_NEED = 2050;
            FAT_NEED = 65280000 / 1.5;
            PRO_NEED = 65000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 10000000;
            Chloride_NEED = 2200000;
            Chromium_NEED = 30;
            Copper_NEED = 800;
            Iodine_NEED = 120;
            Iron_NEED = 12000;
            Magnesium_NEED = 320000;
            Manganese_NEED = 4500;
            Molybdenum_NEED = 100;
            Phosphorus_NEED = 700000;
            Potassium_NEED = 2000000;
            Selenium_NEED = 60;
            Sodium_NEED = 1400000;
            Zinc_NEED = 12500;
            VitaminA_NEED = 800;
            VitaminB1_NEED = 1400;
            VitaminB2_NEED = 1400;
            VitaminB3_NEED = 14000;
            VitaminB5_NEED = 5000;
            VitaminB6_NEED = 1600;
            VitaminB9_NEED = 400;
            VitaminB12_NEED = 2400;
            VitaminC_NEED = 100000;
            VitaminE_NEED = 14000;
            VitaminK_NEED = 80;
            Choline_NEED = 500000;
            Isoleucine_NEED = 650000 * 2;
            Histidine_NEED = 650000 * 2;
            Leucine_NEED = 910000 * 2;
            Lysine_NEED = 780000 * 2;
            Methionine_NEED = 845000 * 2;
            Phenylalanine_NEED = 910000 * 2;
            Tryptophan_NEED = 227500 * 2;
            Threonine_NEED = 455000 * 2;
            Valine_NEED = 650000 * 2;
            α_Linolenic_acid_NEED = 10440000;
            Linolenic_acid_num = 1570000;
        } else if (NL_NEED == '80岁以上') {
            CAL_NEED = 1900;
            FAT_NEED = 61110000 / 1.5;
            PRO_NEED = 65000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 10000000;
            Chloride_NEED = 2000000;
            Chromium_NEED = 30;
            Copper_NEED = 800;
            Iodine_NEED = 120;
            Iron_NEED = 12000;
            Magnesium_NEED = 310000;
            Manganese_NEED = 4500;
            Molybdenum_NEED = 100;
            Phosphorus_NEED = 670000;
            Potassium_NEED = 2000000;
            Selenium_NEED = 60;
            Sodium_NEED = 1300000;
            Zinc_NEED = 12500;
            VitaminA_NEED = 800;
            VitaminB1_NEED = 1400;
            VitaminB2_NEED = 1400;
            VitaminB3_NEED = 13000;
            VitaminB5_NEED = 5000;
            VitaminB6_NEED = 1600;
            VitaminB9_NEED = 400;
            VitaminB12_NEED = 2400;
            VitaminC_NEED = 100000;
            VitaminE_NEED = 14000;
            VitaminK_NEED = 80;
            Choline_NEED = 500000;
            Isoleucine_NEED = 650000 * 2;
            Histidine_NEED = 650000 * 2;
            Leucine_NEED = 910000 * 2;
            Lysine_NEED = 780000 * 2;
            Methionine_NEED = 845000 * 2;
            Phenylalanine_NEED = 910000 * 2;
            Tryptophan_NEED = 227500 * 2;
            Threonine_NEED = 455000 * 2;
            Valine_NEED = 650000 * 2;
            α_Linolenic_acid_NEED = 9780000;
            Linolenic_acid_num = 1470000;
        }else {
                    $("#NL").val("18~49岁");
                    NEED()
                }
    }
    if (XB_NEED == '女') {
        // $('#NL').html("        <option value=\"18~49岁\" id=\"C1\">18~49岁</option>\n" +
        //     "        <option value=\"1岁\" id=\"C2\">1岁</option>\n" +
        //     "        <option value=\"2岁\" id=\"C3\">2岁</option>\n" +
        //     "        <option value=\"3岁\" id=\"C4\">3岁</option>\n" +
        //     "        <option value=\"4岁\" id=\"C5\">4岁</option>\n" +
        //     "        <option value=\"5岁\" id=\"C6\">5岁</option>\n" +
        //     "        <option value=\"6岁\" id=\"C7\">6岁</option>\n" +
        //     "        <option value=\"7岁\" id=\"C8\">7岁</option>\n" +
        //     "        <option value=\"8岁\" id=\"C9\">8岁</option>\n" +
        //     "        <option value=\"9岁\" id=\"C10\">9岁</option>\n" +
        //     "        <option value=\"10岁\" id=\"C11\">10岁</option>\n" +
        //     "        <option value=\"11~13岁\" id=\"C12\">11~13岁</option>\n" +
        //     "        <option value=\"14~17岁\" id=\"C13\">14~17岁</option>\n" +
        //     "        <option value=\"50~64岁\" id=\"C14\">50~64岁</option>\n" +
        //     "        <option value=\"65~79岁\" id=\"C15\">65~79岁</option>\n" +
        //     "        <option value=\"80岁以上\" id=\"C16\">80岁以上</option>");
        // $('#C1').each(function(){this.style='display:list-item'});
        // $('#C2').each(function(){this.style='display:list-item'});
        // $('#C3').each(function(){this.style='display:list-item'});
        // $('#C4').each(function(){this.style='display:list-item'});
        // $('#C5').each(function(){this.style='display:list-item'});
        // $('#C6').each(function(){this.style='display:list-item'});
        // $('#C7').each(function(){this.style='display:list-item'});
        // $('#C8').each(function(){this.style='display:list-item'});
        // $('#C9').each(function(){this.style='display:list-item'});
        // $('#C10').each(function(){this.style='display:list-item'});
        // $('#C11').each(function(){this.style='display:list-item'});
        // $('#C12').each(function(){this.style='display:list-item'});
        // $('#C13').each(function(){this.style='display:list-item'});
        // $('#C14').each(function(){this.style='display:list-item'});
        // $('#C15').each(function(){this.style='display:list-item'});
        // $('#C16').each(function(){this.style='display:list-item'});
        // $('#C17').each(function(){this.style='display:none'});
        // $('#C18').each(function(){this.style='display:none'});
        // $('#C19').each(function(){this.style='display:none'});
        // $('#C20').each(function(){this.style='display:none'});
        // $('#C21').each(function(){this.style='display:none'});
        // $('#C22').each(function(){this.style='display:none'});
        // $('#C23').each(function(){this.style='display:none'});
        // $('#C24').each(function(){this.style='display:none'});
        // $('#C25').each(function(){this.style='display:none'});
        // $('#C26').each(function(){this.style='display:none'});
        // $('#C27').each(function(){this.style='display:none'});
        if (NL_NEED == '18~49岁') {
            CAL_NEED = 1800;
            FAT_NEED = 58330000 / 1.5;
            PRO_NEED = 55000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 800000;
            Chloride_NEED = 2300000;
            Chromium_NEED = 30;
            Copper_NEED = 800;
            Iodine_NEED = 120;
            Iron_NEED = 20000;
            Magnesium_NEED = 330000;
            Manganese_NEED = 4500;
            Molybdenum_NEED = 100;
            Phosphorus_NEED = 720000;
            Potassium_NEED = 2000000;
            Selenium_NEED = 60;
            Sodium_NEED = 1500000;
            Zinc_NEED = 7500;
            VitaminA_NEED = 700;
            VitaminB1_NEED = 1200;
            VitaminB2_NEED = 1200;
            VitaminB3_NEED = 12000;
            VitaminB5_NEED = 5000;
            VitaminB6_NEED = 1400;
            VitaminB9_NEED = 400;
            VitaminB12_NEED = 2400;
            VitaminC_NEED = 100000;
            VitaminE_NEED = 14000;
            VitaminK_NEED = 80;
            Choline_NEED = 400000;
            Isoleucine_NEED = 675000 * 2;
            Histidine_NEED = 675000 * 2;
            Leucine_NEED = 935000 * 2;
            Lysine_NEED = 800000 * 2;
            Methionine_NEED = 860000 * 2;
            Phenylalanine_NEED = 930000 * 2;
            Tryptophan_NEED = 230000 * 2;
            Threonine_NEED = 465000 * 2;
            Valine_NEED = 670000 * 2;
            α_Linolenic_acid_NEED = 9330000;
            Linolenic_acid_num = 1400000;
        } else if (NL_NEED == '1岁') {
            CAL_NEED = 800;
            FAT_NEED = 22220000 / 1.5;
            PRO_NEED = 25000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 6000000;
            Chloride_NEED = 1100000;
            Chromium_NEED = 15;
            Copper_NEED = 300;
            Iodine_NEED = 90;
            Iron_NEED = 9000;
            Magnesium_NEED = 140000;
            Manganese_NEED = 1500;
            Molybdenum_NEED = 40;
            Phosphorus_NEED = 300000;
            Potassium_NEED = 900000;
            Selenium_NEED = 25;
            Sodium_NEED = 700000;
            Zinc_NEED = 4000;
            VitaminA_NEED = 310;
            VitaminB1_NEED = 600;
            VitaminB2_NEED = 600;
            VitaminB3_NEED = 6000;
            VitaminB5_NEED = 2100;
            VitaminB6_NEED = 600;
            VitaminB9_NEED = 160;
            VitaminB12_NEED = 1000;
            VitaminC_NEED = 40000;
            VitaminE_NEED = 6000;
            VitaminK_NEED = 30;
            Choline_NEED = 200000;
            Isoleucine_NEED = 907054;
            Histidine_NEED = 362821;
            Leucine_NEED = 2086224;
            Lysine_NEED = 1334665;
            Methionine_NEED = 751559;
            Phenylalanine_NEED = 1619739;
            Tryptophan_NEED = 220284;
            Threonine_NEED = 1127338;
            Valine_NEED = 1205086;
            α_Linolenic_acid_NEED = 3560000;
            Linolenic_acid_num = 530000;
        } else if (NL_NEED == '2岁') {
            CAL_NEED = 1000;
            FAT_NEED = 27780000 / 1.5;
            PRO_NEED = 25000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 6000000;
            Chloride_NEED = 1100000;
            Chromium_NEED = 15;
            Copper_NEED = 300;
            Iodine_NEED = 90;
            Iron_NEED = 9000;
            Magnesium_NEED = 140000;
            Manganese_NEED = 1500;
            Molybdenum_NEED = 40;
            Phosphorus_NEED = 300000;
            Potassium_NEED = 900000;
            Selenium_NEED = 25;
            Sodium_NEED = 700000;
            Zinc_NEED = 4000;
            VitaminA_NEED = 310;
            VitaminB1_NEED = 600;
            VitaminB2_NEED = 600;
            VitaminB3_NEED = 6000;
            VitaminB5_NEED = 2100;
            VitaminB6_NEED = 600;
            VitaminB9_NEED = 160;
            VitaminB12_NEED = 1000;
            VitaminC_NEED = 40000;
            VitaminE_NEED = 6000;
            VitaminK_NEED = 30;
            Choline_NEED = 200000;
            Isoleucine_NEED = 907054;
            Histidine_NEED = 362821;
            Leucine_NEED = 2086224;
            Lysine_NEED = 1334665;
            Methionine_NEED = 751559;
            Phenylalanine_NEED = 1619739;
            Tryptophan_NEED = 220284;
            Threonine_NEED = 1127338;
            Valine_NEED = 1205086;
            α_Linolenic_acid_NEED = 4440000;
            Linolenic_acid_num = 670000;
        } else if (NL_NEED == '3岁') {
            CAL_NEED = 1200;
            FAT_NEED = 33330000 / 1.5;
            PRO_NEED = 25000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 6000000;
            Chloride_NEED = 1100000;
            Chromium_NEED = 15;
            Copper_NEED = 300;
            Iodine_NEED = 90;
            Iron_NEED = 9000;
            Magnesium_NEED = 140000;
            Manganese_NEED = 1500;
            Molybdenum_NEED = 40;
            Phosphorus_NEED = 300000;
            Potassium_NEED = 900000;
            Selenium_NEED = 25;
            Sodium_NEED = 700000;
            Zinc_NEED = 4000;
            VitaminA_NEED = 310;
            VitaminB1_NEED = 600;
            VitaminB2_NEED = 600;
            VitaminB3_NEED = 6000;
            VitaminB5_NEED = 2100;
            VitaminB6_NEED = 600;
            VitaminB9_NEED = 160;
            VitaminB12_NEED = 1000;
            VitaminC_NEED = 40000;
            VitaminE_NEED = 6000;
            VitaminK_NEED = 30;
            Choline_NEED = 200000;
            Isoleucine_NEED = 907054;
            Histidine_NEED = 362821;
            Leucine_NEED = 2086224;
            Lysine_NEED = 1334665;
            Methionine_NEED = 751559;
            Phenylalanine_NEED = 1619739;
            Tryptophan_NEED = 220284;
            Threonine_NEED = 1127338;
            Valine_NEED = 1205086;
            α_Linolenic_acid_NEED = 5530000;
            Linolenic_acid_num = 800000;
        } else if (NL_NEED == '4岁') {
            CAL_NEED = 1250;
            FAT_NEED = 34720000 / 1.5;
            PRO_NEED = 30000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 8000000;
            Chloride_NEED = 1400000;
            Chromium_NEED = 20;
            Copper_NEED = 400;
            Iodine_NEED = 90;
            Iron_NEED = 10000;
            Magnesium_NEED = 160000;
            Manganese_NEED = 2000;
            Molybdenum_NEED = 50;
            Phosphorus_NEED = 350000;
            Potassium_NEED = 1200000;
            Selenium_NEED = 30;
            Sodium_NEED = 900000;
            Zinc_NEED = 5500;
            VitaminA_NEED = 360;
            VitaminB1_NEED = 800;
            VitaminB2_NEED = 700;
            VitaminB3_NEED = 8000;
            VitaminB5_NEED = 2500;
            VitaminB6_NEED = 700;
            VitaminB9_NEED = 190;
            VitaminB12_NEED = 1200;
            VitaminC_NEED = 50000;
            VitaminE_NEED = 7000;
            VitaminK_NEED = 40;
            Choline_NEED = 250000;
            Isoleucine_NEED = 603221;
            Histidine_NEED = 273000;
            Leucine_NEED = 1420488;
            Lysine_NEED = 1245360;
            Methionine_NEED = 525386;
            Phenylalanine_NEED = 1342653;
            Tryptophan_NEED = 243234;
            Threonine_NEED = 719973;
            Valine_NEED = 739432;
            α_Linolenic_acid_NEED = 5560000;
            Linolenic_acid_num = 830000;
        } else if (NL_NEED == '5岁') {
            CAL_NEED = 1300;
            FAT_NEED = 36110000 / 1.5;
            PRO_NEED = 30000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 8000000;
            Chloride_NEED = 1400000;
            Chromium_NEED = 20;
            Copper_NEED = 400;
            Iodine_NEED = 90;
            Iron_NEED = 10000;
            Magnesium_NEED = 160000;
            Manganese_NEED = 2000;
            Molybdenum_NEED = 50;
            Phosphorus_NEED = 350000;
            Potassium_NEED = 1200000;
            Selenium_NEED = 30;
            Sodium_NEED = 900000;
            Zinc_NEED = 5500;
            VitaminA_NEED = 360;
            VitaminB1_NEED = 800;
            VitaminB2_NEED = 700;
            VitaminB3_NEED = 8000;
            VitaminB5_NEED = 2500;
            VitaminB6_NEED = 700;
            VitaminB9_NEED = 190;
            VitaminB12_NEED = 1200;
            VitaminC_NEED = 50000;
            VitaminE_NEED = 7000;
            VitaminK_NEED = 40;
            Choline_NEED = 250000;
            Isoleucine_NEED = 603221;
            Histidine_NEED = 273000;
            Leucine_NEED = 1420488;
            Lysine_NEED = 1245360;
            Methionine_NEED = 525386;
            Phenylalanine_NEED = 1342653;
            Tryptophan_NEED = 243234;
            Threonine_NEED = 719973;
            Valine_NEED = 739432;
            α_Linolenic_acid_NEED = 5780000;
            Linolenic_acid_num = 870000;
        } else if (NL_NEED == '6岁') {
            CAL_NEED = 1250;
            FAT_NEED = 40280000 / 1.5;
            PRO_NEED = 30000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 8000000;
            Chloride_NEED = 1400000;
            Chromium_NEED = 20;
            Copper_NEED = 400;
            Iodine_NEED = 90;
            Iron_NEED = 10000;
            Magnesium_NEED = 160000;
            Manganese_NEED = 2000;
            Molybdenum_NEED = 50;
            Phosphorus_NEED = 350000;
            Potassium_NEED = 1200000;
            Selenium_NEED = 30;
            Sodium_NEED = 900000;
            Zinc_NEED = 5500;
            VitaminA_NEED = 360;
            VitaminB1_NEED = 800;
            VitaminB2_NEED = 700;
            VitaminB3_NEED = 8000;
            VitaminB5_NEED = 2500;
            VitaminB6_NEED = 700;
            VitaminB9_NEED = 190;
            VitaminB12_NEED = 1200;
            VitaminC_NEED = 50000;
            VitaminE_NEED = 7000;
            VitaminK_NEED = 40;
            Choline_NEED = 250000;
            Isoleucine_NEED = 603221;
            Histidine_NEED = 273000;
            Leucine_NEED = 1420488;
            Lysine_NEED = 1245360;
            Methionine_NEED = 525386;
            Phenylalanine_NEED = 1342653;
            Tryptophan_NEED = 243234;
            Threonine_NEED = 719973;
            Valine_NEED = 739432;
            α_Linolenic_acid_NEED = 6440000;
            Linolenic_acid_num = 970000;
        } else if (NL_NEED == '7岁') {
            CAL_NEED = 1350;
            FAT_NEED = 43060000 / 1.5;
            PRO_NEED = 40000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 10000000;
            Chloride_NEED = 1900000;
            Chromium_NEED = 25;
            Copper_NEED = 500;
            Iodine_NEED = 90;
            Iron_NEED = 13000;
            Magnesium_NEED = 220000;
            Manganese_NEED = 3000;
            Molybdenum_NEED = 65;
            Phosphorus_NEED = 470000;
            Potassium_NEED = 1500000;
            Selenium_NEED = 40;
            Sodium_NEED = 1200000;
            Zinc_NEED = 7000;
            VitaminA_NEED = 500;
            VitaminB1_NEED = 1000;
            VitaminB2_NEED = 1000;
            VitaminB3_NEED = 11000;
            VitaminB5_NEED = 3500;
            VitaminB6_NEED = 1000;
            VitaminB9_NEED = 250;
            VitaminB12_NEED = 1600;
            VitaminC_NEED = 65000;
            VitaminE_NEED = 9000;
            VitaminK_NEED = 50;
            Choline_NEED = 300000;
            Isoleucine_NEED = 930000;
            Histidine_NEED = 421000;
            Leucine_NEED = 2190000;
            Lysine_NEED = 1920000;
            Methionine_NEED = 810000;
            Phenylalanine_NEED = 2070000;
            Tryptophan_NEED = 375000;
            Threonine_NEED = 1110000;
            Valine_NEED = 1140000;
            α_Linolenic_acid_NEED = 6890000;
            Linolenic_acid_num = 1030000;
        } else if (NL_NEED == '8岁') {
            CAL_NEED = 1450;
            FAT_NEED = 47220000 / 1.5;
            PRO_NEED = 40000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 10000000;
            Chloride_NEED = 1900000;
            Chromium_NEED = 25;
            Copper_NEED = 500;
            Iodine_NEED = 90;
            Iron_NEED = 13000;
            Magnesium_NEED = 220000;
            Manganese_NEED = 3000;
            Molybdenum_NEED = 65;
            Phosphorus_NEED = 470000;
            Potassium_NEED = 1500000;
            Selenium_NEED = 40;
            Sodium_NEED = 1200000;
            Zinc_NEED = 7000;
            VitaminA_NEED = 500;
            VitaminB1_NEED = 1000;
            VitaminB2_NEED = 1000;
            VitaminB3_NEED = 11000;
            VitaminB5_NEED = 3500;
            VitaminB6_NEED = 1000;
            VitaminB9_NEED = 250;
            VitaminB12_NEED = 1600;
            VitaminC_NEED = 65000;
            VitaminE_NEED = 9000;
            VitaminK_NEED = 50;
            Choline_NEED = 300000;
            Isoleucine_NEED = 930000;
            Histidine_NEED = 421000;
            Leucine_NEED = 2190000;
            Lysine_NEED = 1920000;
            Methionine_NEED = 810000;
            Phenylalanine_NEED = 2070000;
            Tryptophan_NEED = 375000;
            Threonine_NEED = 1110000;
            Valine_NEED = 1140000;
            α_Linolenic_acid_NEED = 7560000;
            Linolenic_acid_num = 1130000;
        } else if (NL_NEED == '9岁') {
            CAL_NEED = 1550;
            FAT_NEED = 50000000 / 1.5;
            PRO_NEED = 40000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 10000000;
            Chloride_NEED = 1900000;
            Chromium_NEED = 25;
            Copper_NEED = 500;
            Iodine_NEED = 90;
            Iron_NEED = 13000;
            Magnesium_NEED = 220000;
            Manganese_NEED = 3000;
            Molybdenum_NEED = 65;
            Phosphorus_NEED = 470000;
            Potassium_NEED = 1500000;
            Selenium_NEED = 40;
            Sodium_NEED = 1200000;
            Zinc_NEED = 7000;
            VitaminA_NEED = 500;
            VitaminB1_NEED = 1000;
            VitaminB2_NEED = 1000;
            VitaminB3_NEED = 11000;
            VitaminB5_NEED = 3500;
            VitaminB6_NEED = 1000;
            VitaminB9_NEED = 250;
            VitaminB12_NEED = 1600;
            VitaminC_NEED = 65000;
            VitaminE_NEED = 9000;
            VitaminK_NEED = 50;
            Choline_NEED = 300000;
            Isoleucine_NEED = 930000;
            Histidine_NEED = 421000;
            Leucine_NEED = 2190000;
            Lysine_NEED = 1920000;
            Methionine_NEED = 810000;
            Phenylalanine_NEED = 2070000;
            Tryptophan_NEED = 375000;
            Threonine_NEED = 1110000;
            Valine_NEED = 1140000;
            α_Linolenic_acid_NEED = 8000000;
            Linolenic_acid_num = 1200000;
        } else if (NL_NEED == '10岁') {
            CAL_NEED = 1650;
            FAT_NEED = 52780000 / 1.5;
            PRO_NEED = 40000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 10000000;
            Chloride_NEED = 1900000;
            Chromium_NEED = 25;
            Copper_NEED = 500;
            Iodine_NEED = 90;
            Iron_NEED = 13000;
            Magnesium_NEED = 220000;
            Manganese_NEED = 3000;
            Molybdenum_NEED = 65;
            Phosphorus_NEED = 470000;
            Potassium_NEED = 1500000;
            Selenium_NEED = 40;
            Sodium_NEED = 1200000;
            Zinc_NEED = 7000;
            VitaminA_NEED = 500;
            VitaminB1_NEED = 1000;
            VitaminB2_NEED = 1000;
            VitaminB3_NEED = 11000;
            VitaminB5_NEED = 3500;
            VitaminB6_NEED = 1000;
            VitaminB9_NEED = 250;
            VitaminB12_NEED = 1600;
            VitaminC_NEED = 65000;
            VitaminE_NEED = 9000;
            VitaminK_NEED = 50;
            Choline_NEED = 300000;
            Isoleucine_NEED = 930000;
            Histidine_NEED = 421000;
            Leucine_NEED = 2190000;
            Lysine_NEED = 1920000;
            Methionine_NEED = 810000;
            Phenylalanine_NEED = 2070000;
            Tryptophan_NEED = 375000;
            Threonine_NEED = 1110000;
            Valine_NEED = 1140000;
            α_Linolenic_acid_NEED = 8440000;
            Linolenic_acid_num = 1270000;
        } else if (NL_NEED == '11~13岁') {
            CAL_NEED = 1800;
            FAT_NEED = 56940000 / 1.5;
            PRO_NEED = 60000000;
            CARBS_NEED = 150000000;
            Calcium_NEED = 12000000;
            Chloride_NEED = 2200000;
            Chromium_NEED = 30;
            Copper_NEED = 700;
            Iodine_NEED = 110;
            Iron_NEED = 18000;
            Magnesium_NEED = 300000;
            Manganese_NEED = 4000;
            Molybdenum_NEED = 90;
            Phosphorus_NEED = 640000;
            Potassium_NEED = 1900000;
            Selenium_NEED = 55;
            Sodium_NEED = 1400000;
            Zinc_NEED = 9000;
            VitaminA_NEED = 670;
            VitaminB1_NEED = 1100;
            VitaminB2_NEED = 1100;
            VitaminB3_NEED = 12000;
            VitaminB5_NEED = 4500;
            VitaminB6_NEED = 1300;
            VitaminB9_NEED = 350;
            VitaminB12_NEED = 2100;
            VitaminC_NEED = 90000;
            VitaminE_NEED = 13000;
            VitaminK_NEED = 70;
            Choline_NEED = 400000;
            Isoleucine_NEED = 1260000;
            Histidine_NEED = 482000;
            Leucine_NEED = 1890000;
            Lysine_NEED = 2520000;
            Methionine_NEED = 1134000;
            Phenylalanine_NEED = 1134000;
            Tryptophan_NEED = 168000;
            Threonine_NEED = 1470000;
            Valine_NEED = 1386000;
            α_Linolenic_acid_NEED = 9110000;
            Linolenic_acid_num = 1370000;
        } else if (NL_NEED == '14~17岁') {
            CAL_NEED = 2000;
            FAT_NEED = 63890000 / 1.5;
            PRO_NEED = 60000000;
            CARBS_NEED = 150000000;
            Calcium_NEED = 10000000;
            Chloride_NEED = 2500000;
            Chromium_NEED = 35;
            Copper_NEED = 800;
            Iodine_NEED = 120;
            Iron_NEED = 18000;
            Magnesium_NEED = 320000;
            Manganese_NEED = 4500;
            Molybdenum_NEED = 100;
            Phosphorus_NEED = 710000;
            Potassium_NEED = 2200000;
            Selenium_NEED = 60;
            Sodium_NEED = 1600000;
            Zinc_NEED = 8500;
            VitaminA_NEED = 620;
            VitaminB1_NEED = 1300;
            VitaminB2_NEED = 1200;
            VitaminB3_NEED = 13000;
            VitaminB5_NEED = 5000;
            VitaminB6_NEED = 1400;
            VitaminB9_NEED = 400;
            VitaminB12_NEED = 2400;
            VitaminC_NEED = 100000;
            VitaminE_NEED = 14000;
            VitaminK_NEED = 75;
            Choline_NEED = 400000;
            Isoleucine_NEED = 550000 * 2;
            Histidine_NEED = 550000 * 2;
            Leucine_NEED = 770000 * 2;
            Lysine_NEED = 660000 * 2;
            Methionine_NEED = 715000 * 2;
            Phenylalanine_NEED = 770000 * 2;
            Tryptophan_NEED = 192500 * 2;
            Threonine_NEED = 385000 * 2;
            Valine_NEED = 550000 * 2;
            α_Linolenic_acid_NEED = 10220000;
            Linolenic_acid_num = 1530000;
        } else if (NL_NEED == '50~64岁') {
            CAL_NEED = 1750;
            FAT_NEED = 56940000 / 1.5;
            PRO_NEED = 55000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 10000000;
            Chloride_NEED = 2200000;
            Chromium_NEED = 30;
            Copper_NEED = 800;
            Iodine_NEED = 120;
            Iron_NEED = 12000;
            Magnesium_NEED = 330000;
            Manganese_NEED = 4500;
            Molybdenum_NEED = 100;
            Phosphorus_NEED = 720000;
            Potassium_NEED = 2000000;
            Selenium_NEED = 60;
            Sodium_NEED = 1400000;
            Zinc_NEED = 7500;
            VitaminA_NEED = 700;
            VitaminB1_NEED = 1200;
            VitaminB2_NEED = 1200;
            VitaminB3_NEED = 12000;
            VitaminB5_NEED = 5000;
            VitaminB6_NEED = 1600;
            VitaminB9_NEED = 400;
            VitaminB12_NEED = 2400;
            VitaminC_NEED = 100000;
            VitaminE_NEED = 14000;
            VitaminK_NEED = 80;
            Choline_NEED = 400000;
            Isoleucine_NEED = 650000 * 2;
            Histidine_NEED = 650000 * 2;
            Leucine_NEED = 910000 * 2;
            Lysine_NEED = 780000 * 2;
            Methionine_NEED = 845000 * 2;
            Phenylalanine_NEED = 910000 * 2;
            Tryptophan_NEED = 227500 * 2;
            Threonine_NEED = 455000 * 2;
            Valine_NEED = 650000 * 2;
            α_Linolenic_acid_NEED = 9110000;
            Linolenic_acid_num = 1370000;
        } else if (NL_NEED == '65~79岁') {
            CAL_NEED = 1700;
            FAT_NEED = 54170000 / 1.5;
            PRO_NEED = 55000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 10000000;
            Chloride_NEED = 2200000;
            Chromium_NEED = 30;
            Copper_NEED = 800;
            Iodine_NEED = 120;
            Iron_NEED = 12000;
            Magnesium_NEED = 320000;
            Manganese_NEED = 4500;
            Molybdenum_NEED = 100;
            Phosphorus_NEED = 700000;
            Potassium_NEED = 2000000;
            Selenium_NEED = 60;
            Sodium_NEED = 1400000;
            Zinc_NEED = 7500;
            VitaminA_NEED = 700;
            VitaminB1_NEED = 1200;
            VitaminB2_NEED = 1200;
            VitaminB3_NEED = 11000;
            VitaminB5_NEED = 5000;
            VitaminB6_NEED = 1600;
            VitaminB9_NEED = 400;
            VitaminB12_NEED = 2400;
            VitaminC_NEED = 100000;
            VitaminE_NEED = 14000;
            VitaminK_NEED = 80;
            Choline_NEED = 400000;
            Isoleucine_NEED = 650000 * 2;
            Histidine_NEED = 650000 * 2;
            Leucine_NEED = 910000 * 2;
            Lysine_NEED = 780000 * 2;
            Methionine_NEED = 845000 * 2;
            Phenylalanine_NEED = 910000 * 2;
            Tryptophan_NEED = 227500 * 2;
            Threonine_NEED = 455000 * 2;
            Valine_NEED = 650000 * 2;
            α_Linolenic_acid_NEED = 8670000;
            Linolenic_acid_num = 1300000;
        } else if (NL_NEED == '80岁以上') {
            CAL_NEED = 1500;
            FAT_NEED = 48610000 / 1.5;
            PRO_NEED = 55000000;
            CARBS_NEED = 120000000;
            Calcium_NEED = 10000000;
            Chloride_NEED = 2000000;
            Chromium_NEED = 30;
            Copper_NEED = 800;
            Iodine_NEED = 120;
            Iron_NEED = 12000;
            Magnesium_NEED = 310000;
            Manganese_NEED = 4500;
            Molybdenum_NEED = 100;
            Phosphorus_NEED = 670000;
            Potassium_NEED = 2000000;
            Selenium_NEED = 60;
            Sodium_NEED = 1300000;
            Zinc_NEED = 7500;
            VitaminA_NEED = 700;
            VitaminB1_NEED = 1200;
            VitaminB2_NEED = 1200;
            VitaminB3_NEED = 10000;
            VitaminB5_NEED = 5000;
            VitaminB6_NEED = 1600;
            VitaminB9_NEED = 400;
            VitaminB12_NEED = 2400;
            VitaminC_NEED = 100000;
            VitaminE_NEED = 14000;
            VitaminK_NEED = 80;
            Choline_NEED = 400000;
            Isoleucine_NEED = 650000 * 2;
            Histidine_NEED = 650000 * 2;
            Leucine_NEED = 910000 * 2;
            Lysine_NEED = 780000 * 2;
            Methionine_NEED = 845000 * 2;
            Phenylalanine_NEED = 910000 * 2;
            Tryptophan_NEED = 227500 * 2;
            Threonine_NEED = 455000 * 2;
            Valine_NEED = 650000 * 2;
            α_Linolenic_acid_NEED = 7780000;
            Linolenic_acid_num = 1170000;
        } else {
            $("#NL").val("18~49岁");
            NEED()
        }
    }
    if (XB_NEED == '孕妇（早）') {
        // $('#NL').html("<option value=\"18~49岁\" id=\"C1\">18~49岁</option>");
        // $('#C1').each(function(){this.style='display:list-item'});
        // $('#C2').each(function(){this.style='display:none'});
        // $('#C3').each(function(){this.style='display:none'});
        // $('#C4').each(function(){this.style='display:none'});
        // $('#C5').each(function(){this.style='display:none'});
        // $('#C6').each(function(){this.style='display:none'});
        // $('#C7').each(function(){this.style='display:none'});
        // $('#C8').each(function(){this.style='display:none'});
        // $('#C9').each(function(){this.style='display:none'});
        // $('#C10').each(function(){this.style='display:none'});
        // $('#C11').each(function(){this.style='display:none'});
        // $('#C12').each(function(){this.style='display:none'});
        // $('#C13').each(function(){this.style='display:none'});
        // $('#C14').each(function(){this.style='display:none'});
        // $('#C15').each(function(){this.style='display:none'});
        // $('#C16').each(function(){this.style='display:none'});
        // $('#C17').each(function(){this.style='display:none'});
        // $('#C18').each(function(){this.style='display:none'});
        // $('#C19').each(function(){this.style='display:none'});
        // $('#C20').each(function(){this.style='display:none'});
        // $('#C21').each(function(){this.style='display:none'});
        // $('#C22').each(function(){this.style='display:none'});
        // $('#C23').each(function(){this.style='display:none'});
        // $('#C24').each(function(){this.style='display:none'});
        // $('#C25').each(function(){this.style='display:none'});
        // $('#C26').each(function(){this.style='display:none'});
        // $('#C27').each(function(){this.style='display:none'});
        // $("#NL").val("18~49岁");
        if (NL_NEED == '18~49岁') {
            CAL_NEED = 1800;
            FAT_NEED = 58330000 / 1.5;
            PRO_NEED = 55000000;
            CARBS_NEED = 130000000;
            Calcium_NEED = 800000;
            Chloride_NEED = 2000000;
            Chromium_NEED = 31;
            Copper_NEED = 900;
            Iodine_NEED = 230;
            Iron_NEED = 20000;
            Magnesium_NEED = 370000;
            Manganese_NEED = 4900;
            Molybdenum_NEED = 110;
            Phosphorus_NEED = 720000;
            Potassium_NEED = 2000000;
            Selenium_NEED = 65;
            Sodium_NEED = 1500000;
            Zinc_NEED = 9500;
            VitaminA_NEED = 700;
            VitaminB1_NEED = 1200;
            VitaminB2_NEED = 1200;
            VitaminB3_NEED = 12000;
            VitaminB5_NEED = 5000;
            VitaminB6_NEED = 2200;
            VitaminB9_NEED = 600;
            VitaminB12_NEED = 2900;
            VitaminC_NEED = 100000;
            VitaminE_NEED = 14000;
            VitaminK_NEED = 80;
            Choline_NEED = 420000;
            Isoleucine_NEED = 680000 * 2;
            Histidine_NEED = 680000 * 2;
            Leucine_NEED = 952000 * 2;
            Lysine_NEED = 816000 * 2;
            Methionine_NEED = 884000 * 2;
            Phenylalanine_NEED = 952000 * 2;
            Tryptophan_NEED = 238000 * 2;
            Threonine_NEED = 476000 * 2;
            Valine_NEED = 680000 * 2;
            α_Linolenic_acid_NEED = 9330000;
            Linolenic_acid_num = 1400000;
        }
    }
    if (XB_NEED == '孕妇（中）') {
        // $('#NL').html("<option value=\"18~49岁\" id=\"C1\">18~49岁</option>");
        // $('#C1').each(function(){this.style='display:list-item'});
        // $('#C2').each(function(){this.style='display:none'});
        // $('#C3').each(function(){this.style='display:none'});
        // $('#C4').each(function(){this.style='display:none'});
        // $('#C5').each(function(){this.style='display:none'});
        // $('#C6').each(function(){this.style='display:none'});
        // $('#C7').each(function(){this.style='display:none'});
        // $('#C8').each(function(){this.style='display:none'});
        // $('#C9').each(function(){this.style='display:none'});
        // $('#C10').each(function(){this.style='display:none'});
        // $('#C11').each(function(){this.style='display:none'});
        // $('#C12').each(function(){this.style='display:none'});
        // $('#C13').each(function(){this.style='display:none'});
        // $('#C14').each(function(){this.style='display:none'});
        // $('#C15').each(function(){this.style='display:none'});
        // $('#C16').each(function(){this.style='display:none'});
        // $('#C17').each(function(){this.style='display:none'});
        // $('#C18').each(function(){this.style='display:none'});
        // $('#C19').each(function(){this.style='display:none'});
        // $('#C20').each(function(){this.style='display:none'});
        // $('#C21').each(function(){this.style='display:none'});
        // $('#C22').each(function(){this.style='display:none'});
        // $('#C23').each(function(){this.style='display:none'});
        // $('#C24').each(function(){this.style='display:none'});
        // $('#C25').each(function(){this.style='display:none'});
        // $('#C26').each(function(){this.style='display:none'});
        // $('#C27').each(function(){this.style='display:none'});
        // $("#NL").val("18~49岁");
        if (NL_NEED == '18~49岁') {
            CAL_NEED = 1800;
            FAT_NEED = 66670000 / 1.5;
            PRO_NEED = 75000000;
            CARBS_NEED = 130000000;
            Calcium_NEED = 1000000;
            Chloride_NEED = 2000000;
            Chromium_NEED = 34;
            Copper_NEED = 900;
            Iodine_NEED = 230;
            Iron_NEED = 24000;
            Magnesium_NEED = 370000;
            Manganese_NEED = 4900;
            Molybdenum_NEED = 110;
            Phosphorus_NEED = 720000;
            Potassium_NEED = 2000000;
            Selenium_NEED = 65;
            Sodium_NEED = 1500000;
            Zinc_NEED = 9500;
            VitaminA_NEED = 770;
            VitaminB1_NEED = 1400;
            VitaminB2_NEED = 1400;
            VitaminB3_NEED = 12000;
            VitaminB5_NEED = 5000;
            VitaminB6_NEED = 2200;
            VitaminB9_NEED = 600;
            VitaminB12_NEED = 2900;
            VitaminC_NEED = 115000;
            VitaminE_NEED = 14000;
            VitaminK_NEED = 80;
            Choline_NEED = 420000;
            Isoleucine_NEED = 816000 * 2;
            Histidine_NEED = 816000 * 2;
            Leucine_NEED = 1142200 * 2;
            Lysine_NEED = 979200 * 2;
            Methionine_NEED = 1014000 * 2;
            Phenylalanine_NEED = 1092000 * 2;
            Tryptophan_NEED = 273000 * 2;
            Threonine_NEED = 546000 * 2;
            Valine_NEED = 780000 * 2;
            α_Linolenic_acid_NEED = 10670000;
            Linolenic_acid_num = 1600000;
        }
    }
    if (XB_NEED == '孕妇（晚）') {
        // $('#NL').html("<option value=\"18~49岁\" id=\"C1\">18~49岁</option>");
        // $('#C1').each(function(){this.style='display:list-item'});
        // $('#C2').each(function(){this.style='display:none'});
        // $('#C3').each(function(){this.style='display:none'});
        // $('#C4').each(function(){this.style='display:none'});
        // $('#C5').each(function(){this.style='display:none'});
        // $('#C6').each(function(){this.style='display:none'});
        // $('#C7').each(function(){this.style='display:none'});
        // $('#C8').each(function(){this.style='display:none'});
        // $('#C9').each(function(){this.style='display:none'});
        // $('#C10').each(function(){this.style='display:none'});
        // $('#C11').each(function(){this.style='display:none'});
        // $('#C12').each(function(){this.style='display:none'});
        // $('#C13').each(function(){this.style='display:none'});
        // $('#C14').each(function(){this.style='display:none'});
        // $('#C15').each(function(){this.style='display:none'});
        // $('#C16').each(function(){this.style='display:none'});
        // $('#C17').each(function(){this.style='display:none'});
        // $('#C18').each(function(){this.style='display:none'});
        // $('#C19').each(function(){this.style='display:none'});
        // $('#C20').each(function(){this.style='display:none'});
        // $('#C21').each(function(){this.style='display:none'});
        // $('#C22').each(function(){this.style='display:none'});
        // $('#C23').each(function(){this.style='display:none'});
        // $('#C24').each(function(){this.style='display:none'});
        // $('#C25').each(function(){this.style='display:none'});
        // $('#C26').each(function(){this.style='display:none'});
        // $('#C27').each(function(){this.style='display:none'});
        // $("#NL").val("18~49岁");
        if (NL_NEED == '18~49岁') {
            CAL_NEED = 2050;
            FAT_NEED = 70830000 / 1.5;
            PRO_NEED = 85000000;
            CARBS_NEED = 130000000;
            Calcium_NEED = 1000000;
            Chloride_NEED = 2300000;
            Chromium_NEED = 36;
            Copper_NEED = 900;
            Iodine_NEED = 230;
            Iron_NEED = 29000;
            Magnesium_NEED = 370000;
            Manganese_NEED = 4900;
            Molybdenum_NEED = 110;
            Phosphorus_NEED = 720000;
            Potassium_NEED = 2000000;
            Selenium_NEED = 65;
            Sodium_NEED = 1500000;
            Zinc_NEED = 9500;
            VitaminA_NEED = 770;
            VitaminB1_NEED = 1500;
            VitaminB2_NEED = 1500;
            VitaminB3_NEED = 12000;
            VitaminB5_NEED = 6000;
            VitaminB6_NEED = 2200;
            VitaminB9_NEED = 600;
            VitaminB12_NEED = 2900;
            VitaminC_NEED = 115000;
            VitaminE_NEED = 14000;
            VitaminK_NEED = 80;
            Choline_NEED = 420000;
            Isoleucine_NEED = 1020000 * 2;
            Histidine_NEED = 1020000 * 2;
            Leucine_NEED = 1428000 * 2;
            Lysine_NEED = 1224000 * 2;
            Methionine_NEED = 1276500 * 2;
            Phenylalanine_NEED = 1365000 * 2;
            Tryptophan_NEED = 341250 * 2;
            Threonine_NEED = 628500 * 2;
            Valine_NEED = 957000 * 2;
            α_Linolenic_acid_NEED = 11330000;
            Linolenic_acid_num = 1700000;
        }
    }
    if (XB_NEED == '母乳') {
        // $('#NL').html("<option value=\"18~49岁\" id=\"C1\">18~49岁</option>");
        // $('#C1').each(function(){this.style='display:list-item'});
        // $('#C2').each(function(){this.style='display:none'});
        // $('#C3').each(function(){this.style='display:none'});
        // $('#C4').each(function(){this.style='display:none'});
        // $('#C5').each(function(){this.style='display:none'});
        // $('#C6').each(function(){this.style='display:none'});
        // $('#C7').each(function(){this.style='display:none'});
        // $('#C8').each(function(){this.style='display:none'});
        // $('#C9').each(function(){this.style='display:none'});
        // $('#C10').each(function(){this.style='display:none'});
        // $('#C11').each(function(){this.style='display:none'});
        // $('#C12').each(function(){this.style='display:none'});
        // $('#C13').each(function(){this.style='display:none'});
        // $('#C14').each(function(){this.style='display:none'});
        // $('#C15').each(function(){this.style='display:none'});
        // $('#C16').each(function(){this.style='display:none'});
        // $('#C17').each(function(){this.style='display:none'});
        // $('#C18').each(function(){this.style='display:none'});
        // $('#C19').each(function(){this.style='display:none'});
        // $('#C20').each(function(){this.style='display:none'});
        // $('#C21').each(function(){this.style='display:none'});
        // $('#C22').each(function(){this.style='display:none'});
        // $('#C23').each(function(){this.style='display:none'});
        // $('#C24').each(function(){this.style='display:none'});
        // $('#C25').each(function(){this.style='display:none'});
        // $('#C26').each(function(){this.style='display:none'});
        // $('#C27').each(function(){this.style='display:none'});
        // $("#NL").val("18~49岁");
        if (NL_NEED == '18~49岁') {
            CAL_NEED = 2100;
            FAT_NEED = 72220000 / 1.5;
            PRO_NEED = 80000000;
            CARBS_NEED = 160000000;
            Calcium_NEED = 1000000;
            Chloride_NEED = 2300000;
            Chromium_NEED = 37;
            Copper_NEED = 1400;
            Iodine_NEED = 240;
            Iron_NEED = 24000;
            Magnesium_NEED = 330000;
            Manganese_NEED = 4800;
            Molybdenum_NEED = 103;
            Phosphorus_NEED = 720000;
            Potassium_NEED = 2400000;
            Selenium_NEED = 78;
            Sodium_NEED = 1500000;
            Zinc_NEED = 12000;
            VitaminA_NEED = 1300;
            VitaminB1_NEED = 1500;
            VitaminB2_NEED = 1500;
            VitaminB3_NEED = 15000;
            VitaminB5_NEED = 7000;
            VitaminB6_NEED = 1700;
            VitaminB9_NEED = 550;
            VitaminB12_NEED = 3200;
            VitaminC_NEED = 150000;
            VitaminE_NEED = 17000;
            VitaminK_NEED = 85;
            Choline_NEED = 520000;
            Isoleucine_NEED = 985000 * 2;
            Histidine_NEED = 985000 * 2;
            Leucine_NEED = 1332800 * 2;
            Lysine_NEED = 1142400 * 2;
            Methionine_NEED = 1183000 * 2;
            Phenylalanine_NEED = 1274000 * 2;
            Tryptophan_NEED = 318500 * 2;
            Threonine_NEED = 637000 * 2;
            Valine_NEED = 910000 * 2;
            α_Linolenic_acid_NEED = 11560000;
            Linolenic_acid_num = 1730000;
        }
    }

    if (XB_NEED == '婴儿') {
        // $('#NL').html("<option value=\"1月\" id=\"C17\" >1月</option>\n" +
        //     "        <option value=\"2月\" id=\"C18\" >2月</option>\n" +
        //     "        <option value=\"3月\" id=\"C19\" >3月</option>\n" +
        //     "        <option value=\"4月\" id=\"C20\" >4月</option>\n" +
        //     "        <option value=\"5月\" id=\"C21\" >5月</option>\n" +
        //     "        <option value=\"6月\" id=\"C22\" >6月</option>\n" +
        //     "        <option value=\"7月\" id=\"C23\" >7月</option>\n" +
        //     "        <option value=\"8月\" id=\"C24\" >8月</option>\n" +
        //     "        <option value=\"9月\" id=\"C25\" >9月</option>\n" +
        //     "        <option value=\"10月\" id=\"C26\" >10月</option>\n" +
        //     "        <option value=\"11月\" id=\"C27\" >11月</option>");
        // $('#C1').each(function(){this.style='display:none'});
        // $('#C2').each(function(){this.style='display:none'});
        // $('#C3').each(function(){this.style='display:none'});
        // $('#C4').each(function(){this.style='display:none'});
        // $('#C5').each(function(){this.style='display:none'});
        // $('#C6').each(function(){this.style='display:none'});
        // $('#C7').each(function(){this.style='display:none'});
        // $('#C8').each(function(){this.style='display:none'});
        // $('#C9').each(function(){this.style='display:none'});
        // $('#C10').each(function(){this.style='display:none'});
        // $('#C11').each(function(){this.style='display:none'});
        // $('#C12').each(function(){this.style='display:none'});
        // $('#C13').each(function(){this.style='display:none'});
        // $('#C14').each(function(){this.style='display:none'});
        // $('#C15').each(function(){this.style='display:none'});
        // $('#C16').each(function(){this.style='display:none'});
        // $('#C17').each(function(){this.style='display:list-item'});
        // $('#C18').each(function(){this.style='display:list-item'});
        // $('#C19').each(function(){this.style='display:list-item'});
        // $('#C20').each(function(){this.style='display:list-item'});
        // $('#C21').each(function(){this.style='display:list-item'});
        // $('#C22').each(function(){this.style='display:list-item'});
        // $('#C23').each(function(){this.style='display:list-item'});
        // $('#C24').each(function(){this.style='display:list-item'});
        // $('#C25').each(function(){this.style='display:list-item'});
        // $('#C26').each(function(){this.style='display:list-item'});
        // $('#C27').each(function(){this.style='display:list-item'});
        if (NL_NEED == '1月') {
            CAL_NEED = 392.4;
            FAT_NEED = 10900000 / 1.5;
            PRO_NEED = 9000000;
            CARBS_NEED = 0;
            Calcium_NEED = 200000;
            Chloride_NEED = 260000;
            Chromium_NEED = 0.2;
            Copper_NEED = 300;
            Iodine_NEED = 85;
            Iron_NEED = 300;
            Magnesium_NEED = 20000;
            Manganese_NEED = 10;
            Molybdenum_NEED = 2;
            Phosphorus_NEED = 100000;
            Potassium_NEED = 350000;
            Selenium_NEED = 15;
            Sodium_NEED = 170000;
            Zinc_NEED = 2000;
            VitaminA_NEED = 300;
            VitaminB1_NEED = 100;
            VitaminB2_NEED = 400;
            VitaminB3_NEED = 2000;
            VitaminB5_NEED = 1700;
            VitaminB6_NEED = 200;
            VitaminB9_NEED = 65;
            VitaminB12_NEED = 300;
            VitaminC_NEED = 40000;
            VitaminE_NEED = 3000;
            VitaminK_NEED = 2;
            Choline_NEED = 120000;
            Isoleucine_NEED = 228550;
            Histidine_NEED = 92420;
            Leucine_NEED = 525670;
            Lysine_NEED = 91420;
            Methionine_NEED = 189370;
            Phenylalanine_NEED = 408130;
            Tryptophan_NEED = 55510;
            Threonine_NEED = 284060;
            Valine_NEED = 303650;
            α_Linolenic_acid_NEED = 3180000;
            Linolenic_acid_num = 38000;
        }else if (NL_NEED == '2月') {
            CAL_NEED = 490.5;
            FAT_NEED = 13630000 / 1.5;
            PRO_NEED = 9000000;
            CARBS_NEED = 0;
            Calcium_NEED = 200000;
            Chloride_NEED = 260000;
            Chromium_NEED = 0.2;
            Copper_NEED = 300;
            Iodine_NEED = 85;
            Iron_NEED = 300;
            Magnesium_NEED = 20000;
            Manganese_NEED = 10;
            Molybdenum_NEED = 2;
            Phosphorus_NEED = 100000;
            Potassium_NEED = 350000;
            Selenium_NEED = 15;
            Sodium_NEED = 170000;
            Zinc_NEED = 2000;
            VitaminA_NEED = 300;
            VitaminB1_NEED = 100;
            VitaminB2_NEED = 400;
            VitaminB3_NEED = 2000;
            VitaminB5_NEED = 1700;
            VitaminB6_NEED = 200;
            VitaminB9_NEED = 65;
            VitaminB12_NEED = 300;
            VitaminC_NEED = 40000;
            VitaminE_NEED = 3000;
            VitaminK_NEED = 2;
            Choline_NEED = 120000;
            Isoleucine_NEED = 304850;
            Histidine_NEED = 121940;
            Leucine_NEED = 701160;
            Lysine_NEED = 448570;
            Methionine_NEED = 252590;
            Phenylalanine_NEED = 554380;
            Tryptophan_NEED = 74040;
            Threonine_NEED = 378890;
            Valine_NEED = 405200;
            α_Linolenic_acid_NEED = 3980000;
            Linolenic_acid_num = 48000;
        }else if (NL_NEED == '3月') {
            CAL_NEED = 576.83;
            FAT_NEED = 16020000 / 1.5;
            PRO_NEED = 9000000;
            CARBS_NEED = 0;
            Calcium_NEED = 200000;
            Chloride_NEED = 260000;
            Chromium_NEED = 0.2;
            Copper_NEED = 300;
            Iodine_NEED = 85;
            Iron_NEED = 300;
            Magnesium_NEED = 20000;
            Manganese_NEED = 10;
            Molybdenum_NEED = 2;
            Phosphorus_NEED = 100000;
            Potassium_NEED = 350000;
            Selenium_NEED = 15;
            Sodium_NEED = 170000;
            Zinc_NEED = 2000;
            VitaminA_NEED = 300;
            VitaminB1_NEED = 100;
            VitaminB2_NEED = 400;
            VitaminB3_NEED = 2000;
            VitaminB5_NEED = 1700;
            VitaminB6_NEED = 200;
            VitaminB9_NEED = 65;
            VitaminB12_NEED = 300;
            VitaminC_NEED = 40000;
            VitaminE_NEED = 3000;
            VitaminK_NEED = 2;
            Choline_NEED = 120000;
            Isoleucine_NEED = 381150;
            Histidine_NEED = 152460;
            Leucine_NEED = 876645;
            Lysine_NEED = 560835;
            Methionine_NEED = 315810;
            Phenylalanine_NEED = 680625;
            Tryptophan_NEED = 92565;
            Threonine_NEED = 473715;
            Valine_NEED = 506385;
            α_Linolenic_acid_NEED = 4960000;
            Linolenic_acid_num = 57000;
        }else if (NL_NEED == '4月') {
            CAL_NEED = 660.4;
            FAT_NEED = 18340000 / 1.5;
            PRO_NEED = 9000000;
            CARBS_NEED = 0;
            Calcium_NEED = 200000;
            Chloride_NEED = 260000;
            Chromium_NEED = 0.2;
            Copper_NEED = 300;
            Iodine_NEED = 85;
            Iron_NEED = 300;
            Magnesium_NEED = 20000;
            Manganese_NEED = 10;
            Molybdenum_NEED = 2;
            Phosphorus_NEED = 100000;
            Potassium_NEED = 350000;
            Selenium_NEED = 15;
            Sodium_NEED = 170000;
            Zinc_NEED = 2000;
            VitaminA_NEED = 300;
            VitaminB1_NEED = 100;
            VitaminB2_NEED = 400;
            VitaminB3_NEED = 2000;
            VitaminB5_NEED = 1700;
            VitaminB6_NEED = 200;
            VitaminB9_NEED = 65;
            VitaminB12_NEED = 300;
            VitaminC_NEED = 40000;
            VitaminE_NEED = 3000;
            VitaminK_NEED = 2;
            Choline_NEED = 120000;
            Isoleucine_NEED = 449050;
            Histidine_NEED = 179620;
            Leucine_NEED = 1032815;
            Lysine_NEED = 660745;
            Methionine_NEED = 372070;
            Phenylalanine_NEED = 801875;
            Tryptophan_NEED = 109055;
            Threonine_NEED = 558105;
            Valine_NEED = 596595;
            α_Linolenic_acid_NEED = 5210000;
            Linolenic_acid_num = 62000;
        }else if (NL_NEED == '5月') {
            CAL_NEED = 691.01;
            FAT_NEED = 19190000 / 1.5;
            PRO_NEED = 9000000;
            CARBS_NEED = 0;
            Calcium_NEED = 200000;
            Chloride_NEED = 260000;
            Chromium_NEED = 0.2;
            Copper_NEED = 300;
            Iodine_NEED = 85;
            Iron_NEED = 300;
            Magnesium_NEED = 20000;
            Manganese_NEED = 10;
            Molybdenum_NEED = 2;
            Phosphorus_NEED = 100000;
            Potassium_NEED = 350000;
            Selenium_NEED = 15;
            Sodium_NEED = 170000;
            Zinc_NEED = 2000;
            VitaminA_NEED = 300;
            VitaminB1_NEED = 100;
            VitaminB2_NEED = 400;
            VitaminB3_NEED = 2000;
            VitaminB5_NEED = 1700;
            VitaminB6_NEED = 200;
            VitaminB9_NEED = 65;
            VitaminB12_NEED = 300;
            VitaminC_NEED = 40000;
            VitaminE_NEED = 3000;
            VitaminK_NEED = 2;
            Choline_NEED = 120000;
            Isoleucine_NEED = 449800;
            Histidine_NEED = 199920;
            Leucine_NEED = 1149540;
            Lysine_NEED = 735420;
            Methionine_NEED = 414120;
            Phenylalanine_NEED = 892500;
            Tryptophan_NEED = 121380;
            Threonine_NEED = 621180;
            Valine_NEED = 664020;
            α_Linolenic_acid_NEED = 5600000;
            Linolenic_acid_num = 67000;
        }else if (NL_NEED == '6月') {
            CAL_NEED = 632.12;
            FAT_NEED = 17560000 / 1.5;
            PRO_NEED = 20000000;
            CARBS_NEED = 0;
            Calcium_NEED = 250000;
            Chloride_NEED = 550000;
            Chromium_NEED = 4;
            Copper_NEED = 300;
            Iodine_NEED = 115;
            Iron_NEED = 10000;
            Magnesium_NEED = 65000;
            Manganese_NEED = 700;
            Molybdenum_NEED = 3;
            Phosphorus_NEED = 180000;
            Potassium_NEED = 550000;
            Selenium_NEED = 20;
            Sodium_NEED = 350000;
            Zinc_NEED = 3.5000;
            VitaminA_NEED = 350;
            VitaminB1_NEED = 300;
            VitaminB2_NEED = 400;
            VitaminB3_NEED = 3000;
            VitaminB5_NEED = 1900;
            VitaminB6_NEED = 400;
            VitaminB9_NEED = 100;
            VitaminB12_NEED = 600;
            VitaminC_NEED = 40000;
            VitaminE_NEED = 4000;
            VitaminK_NEED = 10;
            Choline_NEED = 150000;
            Isoleucine_NEED = 537600;
            Histidine_NEED = 215040;
            Leucine_NEED = 1236480;
            Lysine_NEED = 791040;
            Methionine_NEED = 445440;
            Phenylalanine_NEED = 960000;
            Tryptophan_NEED = 130560;
            Threonine_NEED = 668160;
            Valine_NEED = 714270;
            α_Linolenic_acid_NEED = 4210000;
            Linolenic_acid_num = 46400;
        }else if (NL_NEED == '7月') {
            CAL_NEED = 659.47;
            FAT_NEED = 18320000 / 1.5;
            PRO_NEED = 20000000;
            CARBS_NEED = 0;
            Calcium_NEED = 250000;
            Chloride_NEED = 550000;
            Chromium_NEED = 4;
            Copper_NEED = 300;
            Iodine_NEED = 115;
            Iron_NEED = 10000;
            Magnesium_NEED = 65000;
            Manganese_NEED = 700;
            Molybdenum_NEED = 3;
            Phosphorus_NEED = 180000;
            Potassium_NEED = 550000;
            Selenium_NEED = 20;
            Sodium_NEED = 350000;
            Zinc_NEED = 3.5000;
            VitaminA_NEED = 350;
            VitaminB1_NEED = 300;
            VitaminB2_NEED = 400;
            VitaminB3_NEED = 3000;
            VitaminB5_NEED = 1900;
            VitaminB6_NEED = 400;
            VitaminB9_NEED = 100;
            VitaminB12_NEED = 600;
            VitaminC_NEED = 40000;
            VitaminE_NEED = 4000;
            VitaminK_NEED = 10;
            Choline_NEED = 150000;
            Isoleucine_NEED = 566300;
            Histidine_NEED = 226520;
            Leucine_NEED = 1302490;
            Lysine_NEED = 833270;
            Methionine_NEED = 469220;
            Phenylalanine_NEED = 1011250;
            Tryptophan_NEED = 137530;
            Threonine_NEED = 703830;
            Valine_NEED = 752370;
            α_Linolenic_acid_NEED = 4390000;
            Linolenic_acid_num = 48400;
        }else if (NL_NEED == '8月') {
            CAL_NEED = 682.13;
            FAT_NEED = 18950000 / 1.5;
            PRO_NEED = 20000000;
            CARBS_NEED = 0;
            Calcium_NEED = 250000;
            Chloride_NEED = 550000;
            Chromium_NEED = 4;
            Copper_NEED = 300;
            Iodine_NEED = 115;
            Iron_NEED = 10000;
            Magnesium_NEED = 65000;
            Manganese_NEED = 700;
            Molybdenum_NEED = 3;
            Phosphorus_NEED = 180000;
            Potassium_NEED = 550000;
            Selenium_NEED = 20;
            Sodium_NEED = 350000;
            Zinc_NEED = 3.5000;
            VitaminA_NEED = 350;
            VitaminB1_NEED = 300;
            VitaminB2_NEED = 400;
            VitaminB3_NEED = 3000;
            VitaminB5_NEED = 1900;
            VitaminB6_NEED = 400;
            VitaminB9_NEED = 100;
            VitaminB12_NEED = 600;
            VitaminC_NEED = 40000;
            VitaminE_NEED = 4000;
            VitaminK_NEED = 10;
            Choline_NEED = 150000;
            Isoleucine_NEED = 590450;
            Histidine_NEED = 236180;
            Leucine_NEED = 1358035;
            Lysine_NEED = 868805;
            Methionine_NEED = 498230;
            Phenylalanine_NEED = 1054375;
            Tryptophan_NEED = 143395;
            Threonine_NEED = 733845;
            Valine_NEED = 784455;
            α_Linolenic_acid_NEED = 4540000;
            Linolenic_acid_num = 50000;
        }else if (NL_NEED == '9月') {
            CAL_NEED = 704;
            FAT_NEED = 19560000 / 1.5;
            PRO_NEED = 20000000;
            CARBS_NEED = 0;
            Calcium_NEED = 250000;
            Chloride_NEED = 550000;
            Chromium_NEED = 4;
            Copper_NEED = 300;
            Iodine_NEED = 115;
            Iron_NEED = 10000;
            Magnesium_NEED = 65000;
            Manganese_NEED = 700;
            Molybdenum_NEED = 3;
            Phosphorus_NEED = 180000;
            Potassium_NEED = 550000;
            Selenium_NEED = 20;
            Sodium_NEED = 350000;
            Zinc_NEED = 3.5000;
            VitaminA_NEED = 350;
            VitaminB1_NEED = 300;
            VitaminB2_NEED = 400;
            VitaminB3_NEED = 3000;
            VitaminB5_NEED = 1900;
            VitaminB6_NEED = 400;
            VitaminB9_NEED = 100;
            VitaminB12_NEED = 600;
            VitaminC_NEED = 40000;
            VitaminE_NEED = 4000;
            VitaminK_NEED = 10;
            Choline_NEED = 150000;
            Isoleucine_NEED = 611100;
            Histidine_NEED = 244440;
            Leucine_NEED = 1405530;
            Lysine_NEED = 899190;
            Methionine_NEED = 506340;
            Phenylalanine_NEED = 1091250;
            Tryptophan_NEED = 148410;
            Threonine_NEED = 759510;
            Valine_NEED = 811890;
            α_Linolenic_acid_NEED = 4890000;
            Linolenic_acid_num = 52000;
        }else if (NL_NEED == '10月') {
            CAL_NEED = 723.54;
            FAT_NEED = 20100000 / 1.5;
            PRO_NEED = 20000000;
            CARBS_NEED = 0;
            Calcium_NEED = 250000;
            Chloride_NEED = 550000;
            Chromium_NEED = 4;
            Copper_NEED = 300;
            Iodine_NEED = 115;
            Iron_NEED = 10000;
            Magnesium_NEED = 65000;
            Manganese_NEED = 700;
            Molybdenum_NEED = 3;
            Phosphorus_NEED = 180000;
            Potassium_NEED = 550000;
            Selenium_NEED = 20;
            Sodium_NEED = 350000;
            Zinc_NEED = 3.5000;
            VitaminA_NEED = 350;
            VitaminB1_NEED = 300;
            VitaminB2_NEED = 400;
            VitaminB3_NEED = 3000;
            VitaminB5_NEED = 1900;
            VitaminB6_NEED = 400;
            VitaminB9_NEED = 100;
            VitaminB12_NEED = 600;
            VitaminC_NEED = 40000;
            VitaminE_NEED = 4000;
            VitaminK_NEED = 10;
            Choline_NEED = 150000;
            Isoleucine_NEED = 630700;
            Histidine_NEED = 252280;
            Leucine_NEED = 1450610;
            Lysine_NEED = 928030;
            Methionine_NEED = 522580;
            Phenylalanine_NEED = 1126250;
            Tryptophan_NEED = 153170;
            Threonine_NEED = 783870;
            Valine_NEED = 837930;
            α_Linolenic_acid_NEED = 4810000;
            Linolenic_acid_num = 53000;
        }else if (NL_NEED == '11月') {
            CAL_NEED = 743.07;
            FAT_NEED = 20640000 / 1.5;
            PRO_NEED = 20000000;
            CARBS_NEED = 0;
            Calcium_NEED = 250000;
            Chloride_NEED = 550000;
            Chromium_NEED = 4;
            Copper_NEED = 300;
            Iodine_NEED = 115;
            Iron_NEED = 10000;
            Magnesium_NEED = 65000;
            Manganese_NEED = 700;
            Molybdenum_NEED = 3;
            Phosphorus_NEED = 180000;
            Potassium_NEED = 550000;
            Selenium_NEED = 20;
            Sodium_NEED = 350000;
            Zinc_NEED = 3.5000;
            VitaminA_NEED = 350;
            VitaminB1_NEED = 300;
            VitaminB2_NEED = 400;
            VitaminB3_NEED = 3000;
            VitaminB5_NEED = 1900;
            VitaminB6_NEED = 400;
            VitaminB9_NEED = 100;
            VitaminB12_NEED = 600;
            VitaminC_NEED = 40000;
            VitaminE_NEED = 4000;
            VitaminK_NEED = 10;
            Choline_NEED = 150000;
            Isoleucine_NEED = 648200;
            Histidine_NEED = 259280;
            Leucine_NEED = 1490860;
            Lysine_NEED = 953780;
            Methionine_NEED = 537080;
            Phenylalanine_NEED = 1175500;
            Tryptophan_NEED = 157420;
            Threonine_NEED = 805620;
            Valine_NEED = 861180;
            α_Linolenic_acid_NEED = 4950000;
            Linolenic_acid_num = 55000;
        } else {
            $("#NL").val("1月");
            NEED()
        }
    }
}




// else {
//     alert("请输入正确的年龄段")
//     $("#NL").val("18~49岁")
// }



function roundFun(value, n) {
    return Math.round(value*Math.pow(10,n))/Math.pow(10,n);
}

function del(obj,i)
{
    temp[i].name = temp2[i].name ;
    obj.remove()
}
function up(obj)
{
    obj.value = Number(obj.value) + 1
}
function down(obj)
{
    if (Number(obj.value) > 0){
        obj.value = Number(obj.value) - 1
    }
    else {
        obj.value = 0
    }
}


function add(name_in){
    for(var i = 0 ; i < temp.length ; i++){
        if (name_in != ''){
            if(name_in === temp[i].name){
                // 在DIV添加表
                var TableContent ="<tr><td id='"+i+"'>"+name_in+"" +
                    "<button style='color: #777777;height: 24px;float:right;outline: none;border:solid;border-color: #e0e0e0;border-width:1px;BACKGROUND-COLOR: transparent;font-size: 12px;border-left: none;' onclick='del(document.getElementById("+i+"),"+i+");Calculation()'class=' fa fa-remove'></button>"
                    +
                     "<input style='float:right;font-size: 13px;outline: none;border:solid;border-color: #e0e0e0;border-width:1px;width: 44px;height: 24px;BACKGROUND-COLOR: transparent' type='text' onclick='Calculation()' oninput='Calculation()' value= "+temp[i].serving+" style='height: 22px;width: 50px;' id='T"+i+";'></input>" +
                    "</tr>";
                $("#Table").append(TableContent);
                temp[i].name = '';
                document.getElementById("tags").value = "";
                break
            } else if (name_in === temp2[i].name){
                document.getElementById("tags").value = ""
                alert('请不要重复输入')
                break
            }
            if (i == temp.length-1){
                document.getElementById("tags").value = ""
                alert('请输入正确的食物名称')

            }
        }
        else {
            document.getElementById("tags").value = ""
            alert('请输入正确的食物名称')
            break
        }
    }
}
// 计算数值
function Calculation() {
    var CAL = 0;
    var FAT = 0;
    var PRO = 0;
    var CARBS = 0;
    var CALCI = 0;
    var CHL = 0 ;
    var CHR = 0 ;
    var COPP = 0;
    var IOD = 0 ;
    var IRO = 0;
    var MAGN = 0;
    var MANGAN = 0;
    var MOLY = 0;
    var PHO = 0;
    var POT = 0;
    var SEL = 0;
    var SOD = 0;
    var ZINC = 0;
    var VIT_A = 0;
    var VIT_B1 = 0;
    var VIT_B2 = 0;
    var VIT_B3 = 0;
    var VIT_B5 = 0;
    var VIT_B6 = 0;
    var VIT_B7 = 0;
    var VIT_B9 = 0;
    var VIT_B12 = 0;
    var VIT_C = 0;
    var VIT_E = 0;
    var VIT_K = 0;
    var CHO = 0;
    var ISOL = 0;
    var HIST = 0;
    var LEU = 0;
    var LYS = 0;
    var METH = 0;
    var PHENY = 0;
    var TRYP = 0;
    var THRE = 0;
    var VAL = 0;
    var LIN_a = 0;
    var LIN = 0;

    var div_data=document.getElementById("Table").getElementsByTagName("td");
    var G =document.getElementById("Table").getElementsByTagName("input");
    for(var i=0;i<div_data.length;i++)
    {

        CAL += temp2[div_data[i].id].calories * G[i].value;
        if(CAL_NEED != 0){
            var B1 = CAL * 100 / CAL_NEED;
            B1 = roundFun(B1,0);
            if(CAL != 0) {
                if (B1 < 100) {
                    if(CAL === 0){
                        $('#X1').html('');
                        $('#Y1').html(0+'%');
                    }else {
                        $('#Y1').html(B1 + '%');
                        var M1 = "<div class='S7' style='width:" + B1 * 0.9 + "px;'></div>"
                        $('#X1').html(M1)
                    }
                }else {
                    if(B1 <= 150){
                        $('#Y1').html(B1 + '%');
                        var M1 = "<div class='S5-2'></div>"
                        $('#X1').html(M1)
                    }else {
                        $('#Y1').html(B1 + '%');
                        var M1 = "<div class='S6-2'></div>"
                        $('#X1').html(M1)
                    }
                }
            }
        }else{
            $('#X1').html('');
            $('#Y1').html(0+'%');
        }

        FAT += temp2[div_data[i].id].fat * G[i].value;
        if(FAT_NEED != 0){
            var B2 = FAT * 100 / FAT_NEED;
            B2 = roundFun(B2,0);
            if(FAT != 0) {
                if (B2 < 100) {
                    if(FAT === 0){
                        $('#X4').html('');
                        $('#Y4').html(0+'%');
                    }else {
                        $('#Y4').html(B2 + '%');
                        var M2 = "<div class='S7' style='width:" + B2 * 0.9+ "px;'></div>"
                        $('#X4').html(M2)
                    }
                }else {
                    if(B2 <= 150){
                        $('#Y4').html(B2 + '%');
                        var M2 = "<div class='S5-2'></div>"
                        $('#X4').html(M2)
                    }else {
                        $('#Y4').html(B2 + '%');
                        var M2 = "<div class='S6-2'></div>"
                        $('#X4').html(M2)
                    }
                }
            }
        }else{
            $('#X4').html('');
            $('#Y4').html(0+'%');
        }

        PRO += temp2[div_data[i].id].proteins * G[i].value;
        if(PRO_NEED != 0){
            var B3 = PRO * 100 / PRO_NEED;
            B3 = roundFun(B3,0);
            if(PRO != 0) {
                if (B3 < 100) {
                    if(PRO === 0){
                        $('#X2').html('');
                        $('#Y2').html(0+'%');
                    }else {
                        $('#Y2').html(B3 + '%');
                        var M3 = "<div class='S7' style='width:" + B3 * 0.9 + "px;'></div>"
                        // var M3 = "<div class='progress-bar' style='width:" + B3 + "%;background: #00a0e9'></div>"
                        $('#X2').html(M3)
                    }
                }else {
                    if(B3 <= 150){
                        $('#Y2').html(B3 + '%');
                        var M3 = "<div class='S5-2'></div>"
                        $('#X2').html(M3)
                    }else {
                        $('#Y2').html(B3 + '%');
                        var M3 = "<div class='S6-2'></div>"
                        $('#X2').html(M3)
                    }
                }
            }
        }else{
            $('#X2').html('');
            $('#Y2').html(0+'%');
        }

        CARBS += temp2[div_data[i].id].carbohydrates * G[i].value;
        if(CARBS_NEED != 0){
            var B4 = CARBS * 100 / CARBS_NEED;
            B4 = roundFun(B4,0);
            if(CARBS != 0) {
                if (B4 < 100) {
                    if(CARBS === 0){
                        $('#X3').html('');
                        $('#Y3').html(0+'%');
                    }else {
                        $('#Y3').html(B4 + '%');
                        var M4 = "<div class='S7' style='width:" + B4 * 0.9 + "px;'></div>"
                        $('#X3').html(M4)
                    }
                }else {
                    if(B4 <= 150){
                        $('#Y3').html(B4 + '%');
                        var M4 = "<div class='S5-2'></div>"
                        $('#X3').html(M4)
                    }else {
                        $('#Y3').html(B4 + '%');
                        var M4 = "<div class='S6-2'></div>"
                        $('#X3').html(M4)
                    }
                }
            }
        }else{
            $('#X3').html('');
            $('#Y3').html(0+'%');
        }

        var A1 = temp2[div_data[i].id].nutrients.Calcium * G[i].value;
        if(isNaN(A1)){
            A1 = 0
        }
        CALCI += A1;
        if(Calcium_NEED != 0){
            var B5 = CALCI * 100 / Calcium_NEED;
            B5 = roundFun(B5,0);
            if(CALCI != 0) {
                if (B5 < 100) {
                    if(CALCI === 0){
                        $('#X5').html('');
                        $('#Y5').html(0+'%');
                    }else {
                        $('#Y5').html(B5 + '%');
                        var M5 = "<div class='S7' style='width:" + B5 + "px;'></div>"
                        $('#X5').html(M5)
                    }
                }else {
                    if(B5 <= 150){
                        $('#Y5').html(B5 + '%');
                        var M5 = "<div class='S5'></div>"
                        $('#X5').html(M5)
                    }else {
                        $('#Y5').html(B5 + '%');
                        var M5 = "<div class='S6'></div>"
                        $('#X5').html(M5)
                    }
                }
            }
        }else{
            $('#X5').html('');
            $('#Y5').html(0+'%');
        }

        var A2 = temp2[div_data[i].id].nutrients.Chloride * G[i].value;
        if(isNaN(A2)){
            A2 = 0
        }
        CHL += A2;
        if(Chloride_NEED != 0){
            var B6 = CHL * 100 / Chloride_NEED;
            B6 = roundFun(B6,0);
            if(CHL != 0) {
                if (B6 < 100) {
                    if(CHL === 0){
                        $('#X6').html('');
                        $('#Y6').html(0+'%');
                    }else {
                        $('#Y6').html(B6 + '%');
                        var M6 = "<div class='S7' style='width:" + B6 + "px;'></div>"
                        $('#X6').html(M6)
                    }
                }else {
                    if(B6 <= 150){
                        $('#Y6').html(B6 + '%');
                        var M6 = "<div class='S5'></div>"
                        $('#X6').html(M6)
                    }else {
                        $('#Y6').html(B6 + '%');
                        var M6 = "<div class='S6'></div>"
                        $('#X6').html(M6)
                    }
                }
            }
        }else{
            $('#X6').html('');
            $('#Y6').html(0+'%');
        }

        var A3 = temp2[div_data[i].id].nutrients.Chromium * G[i].value;
        if(isNaN(A3)){
            A3 = 0
        }
        CHR += A3;
        if(Chromium_NEED != 0){
            var B7 = CHR * 100 / Chromium_NEED;
            B7 = roundFun(B7,0);
            if(CHR != 0) {
                if (B7 < 100) {
                    if(CHR === 0){
                        $('#X7').html('');
                        $('#Y7').html(0+'%');
                    }else {
                        $('#Y7').html(B7 + '%');
                        var M7 = "<div class='S7' style='width:" + B7 + "px;'></div>"
                        $('#X7').html(M7)
                    }
                }else {
                    if(B7 <= 150){
                        $('#Y7').html(B7 + '%');
                        var M7 = "<div class='S5'></div>"
                        $('#X7').html(M7)
                    }else {
                        $('#Y7').html(B7 + '%');
                        var M7 = "<div class='S6'></div>"
                        $('#X7').html(M7)
                    }
                }
            }
        }else{
            $('#X7').html('');
            $('#Y7').html(0+'%');
        }

        var A4 = temp2[div_data[i].id].nutrients.Copper * G[i].value;
        if(isNaN(A4)){
            A4 = 0
        }
        COPP += A4;
        if(Copper_NEED != 0){
            var B8 = COPP * 100 / Copper_NEED;
            B8 = roundFun(B8,0);
            if(COPP != 0) {
                if (B8 < 100) {
                    if(COPP === 0){
                        $('#X8').html('');
                        $('#Y8').html(0+'%');
                    }else {
                        $('#Y8').html(B8 + '%');
                        var M8 = "<div class='S7' style='width:" + B8 + "px;'></div>"
                        $('#X8').html(M8)
                    }
                }else {
                    if(B8 <= 150){
                        $('#Y8').html(B8 + '%');
                        var M8 = "<div class='S5'></div>"
                        $('#X8').html(M8)
                    }else {
                        $('#Y8').html(B8 + '%');
                        var M8 = "<div class='S6'></div>"
                        $('#X8').html(M8)
                    }
                }
            }
        }else{
            $('#X8').html('');
            $('#Y8').html(0+'%');
        }

        var A5 = temp2[div_data[i].id].nutrients.Iodine * G[i].value;
        if(isNaN(A5)){
            A5 = 0
        }
        IOD += A5;
        if(Iodine_NEED != 0){
            var B9 = IOD * 100 / Iodine_NEED;
            B9 = roundFun(B9,0);
            if(IOD != 0) {
                if (B9 < 100) {
                    if(IOD === 0){
                        $('#X9').html('');
                        $('#Y9').html(0+'%');
                    }else {
                        $('#Y9').html(B9 + '%');
                        var M9 = "<div class='S7' style='width:" + B9 + "px;'></div>"
                        $('#X9').html(M9)
                    }
                }else {
                    if(B9 <= 150){
                        $('#Y9').html(B9 + '%');
                        var M9 = "<div class='S5'></div>"
                        $('#X9').html(M9)
                    }else {
                        $('#Y9').html(B9 + '%');
                        var M9 = "<div class='S6'></div>"
                        $('#X9').html(M9)
                    }
                }
            }
        }else{
            $('#X9').html('');
            $('#Y9').html(0+'%');
        }

        var A6 = temp2[div_data[i].id].nutrients.Iron * G[i].value;
        if(isNaN(A6)){
            A6 = 0
        }
        IRO += A6;
        if(Iron_NEED != 0){
            var B10 = IRO * 100 / Iron_NEED;
            B10 = roundFun(B10,0);
            if(IRO != 0) {
                if (B10 < 100) {
                    if(IRO === 0){
                        $('#X10').html('');
                        $('#Y10').html(0+'%');
                    }else {
                        $('#Y10').html(B10 + '%');
                        var M10 = "<div class='S7' style='width:" + B10 + "px;'></div>"
                        $('#X10').html(M10)
                    }
                }else {
                    if(B10 <= 150){
                        $('#Y10').html(B10 + '%');
                        var M10 = "<div class='S5'></div>"
                        $('#X10').html(M10)
                    }else {
                        $('#Y10').html(B10 + '%');
                        var M10 = "<div class='S6'></div>"
                        $('#X10').html(M10)
                    }
                }
            }
        }else{
            $('#X10').html('');
            $('#Y10').html(0+'%');
        }

        var A7 = temp2[div_data[i].id].nutrients.Magnesium * G[i].value;
        if(isNaN(A7)){
            A7 = 0
        }
        MAGN += A7;
        if(Magnesium_NEED != 0){
            var B11 = MAGN * 100 / Magnesium_NEED;
            B11 = roundFun(B11,0);
            if(MAGN != 0) {
                if (B11 < 100) {
                    if(MAGN === 0){
                        $('#X11').html('');
                        $('#Y11').html(0+'%');
                    }else {
                        $('#Y11').html(B11 + '%');
                        var M11 = "<div style='width:" + B11 + "px;' class='S7' ></div>"
                        $('#X11').html(M11)
                    }
                }else {
                    if(B11 <= 150){
                        $('#Y11').html(B11 + '%');
                        var M11 = "<div class='S5'></div>"
                        $('#X11').html(M11)
                    }else {
                        $('#Y11').html(B11 + '%');
                        var M11 = "<div class='S6'></div>"
                        $('#X11').html(M11)
                    }
                }
            }
        }else{
            $('#X11').html('');
            $('#Y11').html(0+'%');
        }

        var A8 = temp2[div_data[i].id].nutrients.Manganese * G[i].value;
        if(isNaN(A8)){
            A8 = 0
        }
        MANGAN += A8;
        if(Manganese_NEED != 0){
            var B12 = MANGAN * 100 / Manganese_NEED;
            B12 = roundFun(B11,0);
            if(MANGAN != 0) {
                if (B12 < 100) {
                    if(MANGAN === 0){
                        $('#X12').html('');
                        $('#Y12').html(0+'%');
                    }else {
                        $('#Y12').html(B12 + '%');
                        var M12 = "<div class='S7' style='width:" + B12 + "px;'></div>"
                        $('#X12').html(M12)
                    }
                }else {
                    if(B12 <= 150){
                        $('#Y12').html(B12 + '%');
                        var M12 = "<div class='S5'></div>"
                        $('#X12').html(M12)
                    }else {
                        $('#Y12').html(B12 + '%');
                        var M12 = "<div class='S6'></div>"
                        $('#X12').html(M12)
                    }
                }
            }
        }else{
            $('#X12').html('');
            $('#Y12').html(0+'%');
        }

        var A9 = temp2[div_data[i].id].nutrients.Molybdenum * G[i].value;
        if(isNaN(A9)){
            A9 = 0
        }
        MOLY += A9;
        if(Molybdenum_NEED != 0){
            var B13 = MOLY * 100 / Molybdenum_NEED;
            B13 = roundFun(B13,0);
            if(MOLY != 0) {
                if (B13 < 100) {
                    if(MOLY === 0){
                        $('#X13').html('');
                        $('#Y13').html(0+'%');
                    }else {
                        $('#Y13').html(B13 + '%');
                        var M13 = "<div class='S7' style='width:" + B13 + "px;'></div>"
                        $('#X13').html(M13)
                    }
                }else {
                    if(B13 <= 150){
                        $('#Y13').html(B13 + '%');
                        var M13 = "<div class='S5'></div>"
                        $('#X13').html(M13)
                    }else {
                        $('#Y13').html(B13 + '%');
                        var M13 = "<div class='S6'></div>"
                        $('#X13').html(M13)
                    }
                }
            }
        }else{
            $('#X13').html('');
            $('#Y13').html(0+'%');
        }

        var A10 = temp2[div_data[i].id].nutrients.Phosphorus * G[i].value;
        if(isNaN(A10)){
            A10 = 0
        }
        PHO += A10;
        if(Phosphorus_NEED != 0){
            var B14 = PHO * 100 / Phosphorus_NEED;
            B14 = roundFun(B14,0);
            if(PHO != 0) {
                if (B14 < 100) {
                    if(PHO === 0){
                        $('#X14').html('');
                        $('#Y14').html(0+'%');
                    }else {
                        $('#Y14').html(B14 + '%');
                        var M14 = "<div class='S7' style='width:" + B14 + "px;'></div>"
                        $('#X14').html(M14)
                    }
                }else {
                    if(B14 <= 150){
                        $('#Y14').html(B14 + '%');
                        var M14 = "<div class='S5'></div>"
                        $('#X14').html(M14)
                    }else {
                        $('#Y14').html(B14 + '%');
                        var M14 = "<div class='S6'></div>"
                        $('#X14').html(M14)
                    }
                }
            }
        }else{
            $('#X14').html('');
            $('#Y14').html(0+'%');
        }

        var A11 = temp2[div_data[i].id].nutrients.Potassium * G[i].value;
        if(isNaN(A11)){
            A11 = 0
        }
        POT += A11;
        if(Potassium_NEED != 0){
            var B15 = POT * 100 / Potassium_NEED;
            B15 = roundFun(B15,0);
            if(POT != 0) {
                if (B15 < 100) {
                    if(POT === 0){
                        $('#X15').html('');
                        $('#Y15').html(0+'%');
                    }else {
                        $('#Y15').html(B15 + '%');
                        var M15 = "<div class='S7' style='width:" + B15 + "px;'></div>"
                        $('#X15').html(M15)
                    }
                }else {
                    if(B15 <= 150){
                        $('#Y15').html(B15 + '%');
                        var M15 = "<div class='S5'></div>"
                        $('#X15').html(M15)
                    }else {
                        $('#Y15').html(B15 + '%');
                        var M15 = "<div class='S6'></div>"
                        $('#X15').html(M15)
                    }
                }
            }
        }else{
            $('#X15').html('');
            $('#Y15').html(0+'%');
        }

        var A12 = temp2[div_data[i].id].nutrients.Selenium * G[i].value;
        if(isNaN(A12)){
            A12 = 0
        }
        SEL += A12;
        if(Selenium_NEED != 0){
            var B16 = SEL * 100 / Selenium_NEED;
            B16 = roundFun(B16,0);
            if(SEL != 0) {
                if (B16 < 100) {
                    if(SEL === 0){
                        $('#X16').html('');
                        $('#Y16').html(0+'%');
                    }else {
                        $('#Y16').html(B16 + '%');
                        var M16 = "<div class='S7' style='width:" + B16 + "px;'></div>"
                        $('#X16').html(M16)
                    }
                }else {
                    if(B16 <= 150){
                        $('#Y16').html(B16 + '%');
                        var M16 = "<div class='S5'></div>"
                        $('#X16').html(M16)
                    }else {
                        $('#Y16').html(B16 + '%');
                        var M16 = "<div class='S6'></div>"
                        $('#X16').html(M16)
                    }
                }
            }
        }else{
            $('#X16').html('');
            $('#Y16').html(0+'%');
        }

        var A13 = temp2[div_data[i].id].nutrients.Sodium * G[i].value;
        if(isNaN(A13)){
            A13 = 0
        }
        SOD += A13;
        if(Sodium_NEED != 0){
            var B17 = SOD * 100 / Sodium_NEED;
            B17 = roundFun(B17,0);
            if(SOD != 0) {
                if (B17 < 100) {
                    if(SOD === 0){
                        $('#X17').html('');
                        $('#Y17').html(0+'%');
                    }else {
                        $('#Y17').html(B17 + '%');
                        var M17 = "<div class='S7' style='width:" + B17 + "px;'></div>"
                        $('#X17').html(M17)
                    }
                }else {
                    if(B17 <= 150){
                        $('#Y17').html(B17 + '%');
                        var M17 = "<div class='S5'></div>"
                        $('#X17').html(M17)
                    }else {
                        $('#Y17').html(B17 + '%');
                        var M17 = "<div class='S6'></div>"
                        $('#X17').html(M17)
                    }
                }
            }
        }else{
            $('#X17').html('');
            $('#Y17').html(0+'%');
        }

        var A14 = temp2[div_data[i].id].nutrients.Zinc * G[i].value;
        if(isNaN(A14)){
            A14 = 0
        }
        ZINC += A14;
        if(Zinc_NEED != 0){
            var B18 = ZINC * 100 / Zinc_NEED;
            B18 = roundFun(B17,0);
            if(ZINC != 0) {
                if (B18 < 100) {
                    if(ZINC === 0){
                        $('#X18').html('');
                        $('#Y18').html(0+'%');
                    }else {
                        $('#Y18').html(B18 + '%');
                        var M18 = "<div class='S7' style='width:" + B18 + "px;height: 8px;'></div>"
                        $('#X18').html(M18)
                    }
                }else {
                    if(B18 <= 150){
                        $('#Y18').html(B18 + '%');
                        var M18 = "<div class='S5'></div>"
                        $('#X18').html(M18)
                    }else {
                        $('#Y18').html(B18 + '%');
                        var M18 = "<div class='S6'></div>"
                        $('#X18').html(M18)
                    }
                }
            }
        }else{
            $('#X18').html('');
            $('#Y18').html(0+'%');
        }

        var A15 = temp2[div_data[i].id].nutrients['Vitamin A'] * G[i].value;
        if(isNaN(A15)){
            A15 = 0
        }
        VIT_A += A15;
        if(VitaminA_NEED != 0){
            var B19 = VIT_A * 100 / VitaminA_NEED;
            B19 = roundFun(B19,0);
            if(VIT_A != 0) {
                if (B19 < 100) {
                    if(VIT_A === 0){
                        $('#X19').html('');
                        $('#Y19').html(0+'%');
                    }else {
                        $('#Y19').html(B19 + '%');
                        var M19 = "<div class='S7' style='width:" + B19 + "px;'></div>"
                        $('#X19').html(M19)
                    }
                }else {
                    if(B19 <= 150){
                        $('#Y19').html(B19 + '%');
                        var M19 = "<div class='S5'></div>"
                        $('#X19').html(M19)
                    }else {
                        $('#Y19').html(B19 + '%');
                        var M19 = "<div class='S6'></div>"
                        $('#X19').html(M19)
                    }
                }
            }
        }else{
            $('#X19').html('');
            $('#Y19').html(0+'%');
        }

        var A16 = temp2[div_data[i].id].nutrients['Vitamin B1'] * G[i].value;
        if(isNaN(A16)){
            A16 = 0
        }
        VIT_B1 += A16;
        if(VitaminB1_NEED != 0){
            var B20 = VIT_B1 * 100 / VitaminB1_NEED;
            B20 = roundFun(B20,0);
            if(VIT_B1 != 0) {
                if (B20 < 100) {
                    if(VIT_B1 === 0){
                        $('#X20').html('');
                        $('#Y20').html(0+'%');
                    }else {
                        $('#Y20').html(B20 + '%');
                        var M20 = "<div class='S7' style='width:" + B20 + "px;'></div>"
                        $('#X20').html(M20)
                    }
                }else {
                    if(B20 <= 150){
                        $('#Y20').html(B20 + '%');
                        var M20 = "<div class='S5'></div>"
                        $('#X20').html(M20)
                    }else {
                        $('#Y20').html(B20 + '%');
                        var M20 = "<div class='S6'></div>"
                        $('#X20').html(M20)
                    }
                }
            }
        }else{
            $('#X20').html('');
            $('#Y20').html(0+'%');
        }

        var A17 = temp2[div_data[i].id].nutrients['Vitamin B2'] * G[i].value;
        if(isNaN(A17)){
            A17 = 0
        }
        VIT_B2 += A17;
        if(VitaminB2_NEED != 0){
            var B21 = VIT_B2 * 100 / VitaminB2_NEED;
            B21 = roundFun(B21,0);
            if(VIT_B2 != 0) {
                if (B21 < 100) {
                    if(VIT_B2 === 0){
                        $('#X21').html('');
                        $('#Y21').html(0+'%');
                    }else {
                        $('#Y21').html(B21 + '%');
                        var M21 = "<div class='S7' style='width:" + B21 + "px;'></div>"
                        $('#X21').html(M21)
                    }
                }else {
                    if(B21 <= 150){
                        $('#Y21').html(B21 + '%');
                        var M21 = "<div class='S5'></div>"
                        $('#X21').html(M21)
                    }else {
                        $('#Y21').html(B21 + '%');
                        var M21 = "<div class='S6'></div>"
                        $('#X21').html(M21)
                    }
                }
            }
        }else{
            $('#X21').html('');
            $('#Y21').html(0+'%');
        }

        var A18 = temp2[div_data[i].id].nutrients['Vitamin B3'] * G[i].value;
        if(isNaN(A18)){
            A18 = 0
        }
        VIT_B3 += A18;
        if(VitaminB3_NEED != 0){
            var B22 = VIT_B3 * 100 / VitaminB3_NEED;
            B22 = roundFun(B22,0);
            if(VIT_B3 != 0) {
                if (B22 < 100) {
                    if(VIT_B3 === 0){
                        $('#X22').html('');
                        $('#Y22').html(0+'%');
                    }else {
                        $('#Y22').html(B22 + '%');
                        var M22 = "<div class='S7' style='width:" + B22 + "px;'></div>"
                        $('#X22').html(M22)
                    }
                }else {
                    if(B22 <= 150){
                        $('#Y22').html(B22 + '%');
                        var M22 = "<div class='S5'></div>"
                        $('#X22').html(M22)
                    }else {
                        $('#Y22').html(B22 + '%');
                        var M22 = "<div class='S6'></div>"
                        $('#X22').html(M22)
                    }
                }
            }
        }else{
            $('#X22').html('');
            $('#Y22').html(0+'%');
        }

        var A19 = temp2[div_data[i].id].nutrients['Vitamin B5'] * G[i].value;
        if(isNaN(A19)){
            A19 = 0
        }
        VIT_B5 += A19;
        if(VitaminB5_NEED != 0){
            var B23 = VIT_B5 * 100 / VitaminB5_NEED;
            B23 = roundFun(B23,0);
            if(VIT_B5 != 0) {
                if (B23 < 100) {
                    if(VIT_B5 === 0){
                        $('#X23').html('');
                        $('#Y23').html(0+'%');
                    }else {
                        $('#Y23').html(B23 + '%');
                        var M23 = "<div class='S7' style='width:" + B23 + "px;'></div>"
                        $('#X23').html(M23)
                    }
                }else {
                    if(B23 <= 150){
                        $('#Y23').html(B23 + '%');
                        var M23 = "<div class='S5'></div>"
                        $('#X23').html(M23)
                    }else {
                        $('#Y23').html(B23 + '%');
                        var M23 = "<div class='S6'></div>"
                        $('#X23').html(M23)
                    }
                }
            }
        }else{
            $('#X23').html('');
            $('#Y23').html(0+'%');
        }

        var A20 = temp2[div_data[i].id].nutrients['Vitamin B6'] * G[i].value;
        if(isNaN(A20)){
            A20 = 0
        }
        VIT_B6 += A20;
        if(VitaminB6_NEED != 0){
            var B24 = VIT_B6 * 100 / VitaminB6_NEED;
            B24 = roundFun(B24,0);
            if(VIT_B6 != 0) {
                if (B24 < 100) {
                    if(VIT_B6 === 0){
                        $('#X24').html('');
                        $('#Y24').html(0+'%');
                    }else {
                        $('#Y24').html(B24 + '%');
                        var M24 = "<div class='S7' style='width:" + B24 + "px;'></div>"
                        $('#X24').html(M24)
                    }
                }else {
                    if(B24 <= 150){
                        $('#Y24').html(B24 + '%');
                        var M24 = "<div class='S5'></div>"
                        $('#X24').html(M24)
                    }else {
                        $('#Y24').html(B24 + '%');
                        var M24 = "<div class='S6'></div>"
                        $('#X24').html(M24)
                    }
                }
            }
        }else{
            $('#X24').html('');
            $('#Y24').html(0+'%');
        }

        var A21 = temp2[div_data[i].id].nutrients['Vitamin B7'] * G[i].value;
        if(isNaN(A21)){
            A21 = 0
        }
        VIT_B7 += A21;

        var A22 = temp2[div_data[i].id].nutrients['Vitamin B9'] * G[i].value;
        if(isNaN(A22)){
            A22 = 0
        }
        VIT_B9 += A22;
        if(VitaminB9_NEED != 0){
            var B25 = VIT_B9 * 100 / VitaminB9_NEED;
            B25 = roundFun(B25,0);
            if(VIT_B9 != 0) {
                if (B25 < 100) {
                    if(VIT_B9 === 0){
                        $('#X26').html('');
                        $('#Y26').html(0+'%');
                    }else {
                        $('#Y26').html(B25 + '%');
                        var M25 = "<div class='S7' style='width:" + B25 + "px;'></div>"
                        $('#X26').html(M25)
                    }
                }else {
                    if(B25 <= 150){
                        $('#Y26').html(B25 + '%');
                        var M25 = "<div class='S5'></div>"
                        $('#X26').html(M25)
                    }else {
                        $('#Y26').html(B25 + '%');
                        var M25 = "<div class='S6'></div>"
                        $('#X26').html(M25)
                    }
                }
            }
        }else{
            $('#X26').html('');
            $('#Y26').html(0+'%');
        }

        var A23 = temp2[div_data[i].id].nutrients['Vitamin B12'] * G[i].value;
        if(isNaN(A23)){
            A23 = 0
        }
        VIT_B12 += A23;
        if(VitaminB12_NEED != 0){
            var B26 = VIT_B12 * 100 / VitaminB12_NEED;
            B26 = roundFun(B26,0);
            if(VIT_B12 != 0) {
                if (B26 < 100) {
                    if(VIT_B12 === 0){
                        $('#X27').html('');
                        $('#Y27').html(0+'%');
                    }else {
                        $('#Y27').html(B26 + '%');
                        var M26 = "<div class='S7' style='width:" + B26 + "px;'></div>"
                        $('#X27').html(M26)
                    }
                }else {
                    if(B26 <= 150){
                        $('#Y27').html(B26 + '%');
                        var M26 = "<div class='S5'></div>"
                        $('#X27').html(M26)
                    }else {
                        $('#Y27').html(B26 + '%');
                        var M26 = "<div class='S6'></div>"
                        $('#X27').html(M26)
                    }
                }
            }
        }else{
            $('#X27').html('');
            $('#Y27').html(0+'%');
        }

        var A24 = temp2[div_data[i].id].nutrients['Vitamin C'] * G[i].value;
        if(isNaN(A24)){
            A24 = 0
        }
        VIT_C += A24;
        if(VitaminC_NEED != 0){
            var B27 = VIT_C * 100 / VitaminC_NEED;
            B27 = roundFun(B27,0);
            if(VIT_C != 0) {
                if (B27 < 100) {
                    if(VIT_C === 0){
                        $('#X28').html('');
                        $('#Y28').html(0+'%');
                    }else {
                        $('#Y28').html(B27 + '%');
                        var M27 = "<div class='S7' style='width:" + B27 + "px;'></div>"
                        $('#X28').html(M27)
                    }
                }else {
                    if(B27 <= 150){
                        $('#Y28').html(B27 + '%');
                        var M27 = "<div class='S5'></div>"
                        $('#X28').html(M27)
                    }else {
                        $('#Y28').html(B27 + '%');
                        var M27 = "<div class='S6'></div>"
                        $('#X28').html(M27)
                    }
                }
            }
        }else{
            $('#X28').html('');
            $('#Y28').html(0+'%');
        }

        var A25 = temp2[div_data[i].id].nutrients['Vitamin E'] * G[i].value;
        if(isNaN(A25)){
            A25 = 0
        }
        VIT_E += A25;
        if(VitaminE_NEED != 0){
            var B28 = VIT_E * 100 / VitaminE_NEED;
            B28 = roundFun(B28,0);
            if(VIT_E != 0) {
                if (B28 < 100) {
                    if(VIT_E === 0){
                        $('#X29').html('');
                        $('#Y29').html(0+'%');
                    }else {
                        $('#Y29').html(B28 + '%');
                        var M28 = "<div class='S7' style='width:" + B28 + "px;'></div>"
                        $('#X29').html(M28)
                    }
                }else {
                    if(B28 <= 150){
                        $('#Y29').html(B28 + '%');
                        var M28 = "<div class='S5'></div>"
                        $('#X29').html(M28)
                    }else {
                        $('#Y29').html(B28 + '%');
                        var M28 = "<div class='S6'></div>"
                        $('#X29').html(M28)
                    }
                }
            }
        }else{
            $('#X29').html('');
            $('#Y29').html(0+'%');
        }

        var A26 = temp2[div_data[i].id].nutrients['Vitamin K'] * G[i].value;
        if(isNaN(A26)){
            A26 = 0
        }
        VIT_K += A26;
        if(VitaminK_NEED != 0){
            var B29 = VIT_K * 100 / VitaminK_NEED;
            B29 = roundFun(B29,0);
            if(VIT_K != 0) {
                if (B29 < 100) {
                    if(VIT_K === 0){
                        $('#X30').html('');
                        $('#Y30').html(0+'%');
                    }else {
                        $('#Y30').html(B29 + '%');
                        var M29 = "<div class='S7' style='width:" + B29 + "px;'></div>"
                        $('#X30').html(M29)
                    }
                }else {
                    if(B29 <= 150){
                        $('#Y30').html(B29 + '%');
                        var M29 = "<div class='S5'></div>"
                        $('#X30').html(M29)
                    }else {
                        $('#Y30').html(B29 + '%');
                        var M29 = "<div class='S6'></div>"
                        $('#X30').html(M29)
                    }
                }
            }
        }else{
            $('#X30').html('');
            $('#Y30').html(0+'%');
        }

        var A27 = temp2[div_data[i].id].nutrients['Choline'] * G[i].value;
        if(isNaN(A27)){
            A27 = 0
        }
        CHO += A27;
        if(Choline_NEED != 0){
            var B30 = CHO * 100 / Choline_NEED;
            B30 = roundFun(B30,0);
            if(CHO != 0) {
                if (B30 < 100) {
                    if(CHO === 0){
                        $('#X31').html('');
                        $('#Y31').html(0+'%');
                    }else {
                        $('#Y31').html(B30 + '%');
                        var M30 = "<div class='S7' style='width:" + B30 + "px;'></div>"
                        $('#X31').html(M30)
                    }
                }else {
                    if(B30 <= 150){
                        $('#Y31').html(B30 + '%');
                        var M30 = "<div class='S5'></div>"
                        $('#X31').html(M30)
                    }else {
                        $('#Y31').html(B30 + '%');
                        var M30 = "<div class='S6'></div>"
                        $('#X31').html(M30)
                    }
                }
            }
        }else{
            $('#X31').html('');
            $('#Y31').html(0+'%');
        }

        var A28 = temp2[div_data[i].id].nutrients['Isoleucine'] * G[i].value;
        if(isNaN(A28)){
            A28 = 0
        }
        ISOL += A28;
        if(Isoleucine_NEED != 0){
            var B31 = ISOL * 100 / Isoleucine_NEED;
            B31 = roundFun(B31,0);
            if(ISOL != 0) {
                if (B31 < 100) {
                    if(ISOL === 0){
                        $('#X32').html('');
                        $('#Y32').html(0+'%');
                    }else {
                        $('#Y32').html(B31 + '%');
                        var M31 = "<div class='S7' style='width:" + B31 + "px;'></div>"
                        $('#X32').html(M31)
                    }
                }else {
                    if(B31 <= 150){
                        $('#Y32').html(B31 + '%');
                        var M31 = "<div class='S5'></div>"
                        $('#X32').html(M31)
                    }else {
                        $('#Y32').html(B31 + '%');
                        var M31 = "<div class='S6'></div>"
                        $('#X32').html(M31)
                    }
                }
            }
        }else{
            $('#X32').html('');
            $('#Y32').html(0+'%');
        }

        var A29 = temp2[div_data[i].id].nutrients['Histidine'] * G[i].value;
        if(isNaN(A29)){
            A29 = 0
        }
        HIST += A29;
        if(Histidine_NEED != 0){
            var B32 = HIST * 100 / Histidine_NEED;
            B32 = roundFun(B32,0);
            if(HIST != 0) {
                if (B32 < 100) {
                    if(HIST === 0){
                        $('#X33').html('');
                        $('#Y33').html(0+'%');
                    }else {
                        $('#Y33').html(B32 + '%');
                        var M32 = "<div class='S7' style='width:" + B32 + "px;'></div>"
                        $('#X33').html(M32)
                    }
                }else {
                    if(B32 <= 150){
                        $('#Y33').html(B32 + '%');
                        var M32 = "<div class='S5'></div>"
                        $('#X33').html(M32)
                    }else {
                        $('#Y33').html(B32 + '%');
                        var M32 = "<div class='S6'></div>"
                        $('#X33').html(M32)
                    }
                }
            }
        }else{
            $('#X33').html('');
            $('#Y33').html(0+'%');
        }

        var A30 = temp2[div_data[i].id].nutrients['Leucine'] * G[i].value;
        if(isNaN(A30)){
            A30 = 0
        }
        LEU += A30;
        if(Leucine_NEED != 0){
            var B33 = LEU * 100 / Leucine_NEED;
            B33 = roundFun(B33,0);
            if(LEU != 0) {
                if (B33 < 100) {
                    if(LEU === 0){
                        $('#X34').html('');
                        $('#Y34').html(0+'%');
                    }else {
                        $('#Y34').html(B33 + '%');
                        var M33 = "<div class='S7' style='width:" + B33 + "px;'></div>"
                        $('#X34').html(M33)
                    }
                }else {
                    if(B33 <= 150){
                        $('#Y34').html(B33 + '%');
                        var M33 = "<div class='S5'></div>"
                        $('#X34').html(M33)
                    }else {
                        $('#Y34').html(B33 + '%');
                        var M33 = "<div class='S6'></div>"
                        $('#X34').html(M33)
                    }
                }
            }
        }else{
            $('#X34').html('');
            $('#Y34').html(0+'%');
        }

        var A31 = temp2[div_data[i].id].nutrients['Lysine'] * G[i].value;
        if(isNaN(A31)){
            A31 = 0
        }
        LYS += A31;
        if(Lysine_NEED != 0){
            var B34 = LYS * 100 / Lysine_NEED;
            B34 = roundFun(B34,0);
            if(LYS != 0) {
                if (B34 < 100) {
                    if(LYS === 0){
                        $('#X35').html('');
                        $('#Y35').html(0+'%');
                    }else {
                        $('#Y35').html(B34 + '%');
                        var M34 = "<div class='S7' style='width:" + B34 + "px;'></div>"
                        $('#X35').html(M34)
                    }
                }else {
                    if(B34 <= 150){
                        $('#Y35').html(B34 + '%');
                        var M34 = "<div class='S5'></div>"
                        $('#X35').html(M34)
                    }else {
                        $('#Y35').html(B34 + '%');
                        var M34 = "<div class='S6'></div>"
                        $('#X35').html(M34)
                    }
                }
            }
        }else{
            $('#X35').html('');
            $('#Y35').html(0+'%');
        }

        var A32 = temp2[div_data[i].id].nutrients['Methionine'] * G[i].value;
        if(isNaN(A32)){
            A32 = 0
        }
        METH += A32;
        if(Methionine_NEED != 0){
            var B35 = METH * 100 / Methionine_NEED;
            B35 = roundFun(B35,0);
            if(METH != 0) {
                if (B35 < 100) {
                    if(METH === 0){
                        $('#X36').html('');
                        $('#Y36').html(0+'%');
                    }else {
                        $('#Y36').html(B35 + '%');
                        var M35 = "<div class='S7' style='width:" + B35 + "px;'></div>"
                        $('#X36').html(M35)
                    }
                }else {
                    if(B35 <= 150){
                        $('#Y36').html(B35 + '%');
                        var M35 = "<div class='S5'></div>"
                        $('#X36').html(M35)
                    }else {
                        $('#Y36').html(B35 + '%');
                        var M35 = "<div class='S6   '></div>"
                        $('#X36').html(M35)
                    }
                }
            }
        }else{
            $('#X36').html('');
            $('#Y36').html(0+'%');
        }

        var A33 = temp2[div_data[i].id].nutrients['Phenylalanine'] * G[i].value;
        if(isNaN(A33)){
            A33 = 0
        }
        PHENY += A33;
        if(Phenylalanine_NEED != 0){
            var B36 = PHENY * 100 / Phenylalanine_NEED;
            B36 = roundFun(B36,0);
            if(PHENY != 0) {
                if (B36 < 100) {
                    if(PHENY === 0){
                        $('#X37').html('');
                        $('#Y37').html(0+'%');
                    }else {
                        $('#Y37').html(B36 + '%');
                        var M36 = "<div class='S7' style='width:" + B36 + "px;'></div>"
                        $('#X37').html(M36)
                    }
                }else {
                    if(B36 <= 150){
                        $('#Y37').html(B36 + '%');
                        var M36 = "<div class='S5'></div>"
                        $('#X37').html(M36)
                    }else {
                        $('#Y37').html(B36 + '%');
                        var M36 = "<div class='S6'></div>"
                        $('#X37').html(M36)
                    }
                }
            }
        }else{
            $('#X37').html('');
            $('#Y37').html(0+'%');
        }

        var A34 = temp2[div_data[i].id].nutrients['Tryptophan'] * G[i].value;
        if(isNaN(A34)){
            A34 = 0
        }
        TRYP += A34;
        if(Tryptophan_NEED != 0){
            var B37 = TRYP * 100 / Tryptophan_NEED;
            B37 = roundFun(B37,0);
            if(TRYP != 0) {
                if (B37 < 100) {
                    if(TRYP === 0){
                        $('#X38').html('');
                        $('#Y38').html(0+'%');
                    }else {
                        $('#Y38').html(B37 + '%');
                        var M37 = "<div class='S7' style='width:" + B37 + "px;'></div>"
                        $('#X38').html(M37)
                    }
                }else {
                    if(B37 <= 150){
                        $('#Y38').html(B37 + '%');
                        var M37 = "<div class='S5'></div>"
                        $('#X38').html(M37)
                    }else {
                        $('#Y38').html(B37 + '%');
                        var M37 = "<div class='S6'></div>"
                        $('#X38').html(M37)
                    }
                }
            }
        }else{
            $('#X38').html('');
            $('#Y38').html(0+'%');
        }

        var A35 = temp2[div_data[i].id].nutrients['Threonine'] * G[i].value;
        if(isNaN(A35)){
            A35 = 0
        }
        THRE += A35;
        if(Threonine_NEED != 0){
            var B38 = THRE * 100 / Threonine_NEED;
            B38 = roundFun(B38,0);
            if(THRE != 0) {
                if (B38 < 100) {
                    if(THRE === 0){
                        $('#X39').html('');
                        $('#Y39').html(0+'%');
                    }else {
                        $('#Y39').html(B38 + '%');
                        var M38 = "<div class='S7' style='width:" + B38 + "px;'></div>"
                        $('#X39').html(M38)
                    }
                }else {
                    if(B38 <= 150){
                        $('#Y39').html(B38 + '%');
                        var M38 = "<div class='S5'></div>"
                        $('#X39').html(M38)
                    }else {
                        $('#Y39').html(B38 + '%');
                        var M38 = "<div class='S6'></div>"
                        $('#X39').html(M38)
                    }
                }
            }
        }else{
            $('#X39').html('');
            $('#Y39').html(0+'%');
        }

        var A36 = temp2[div_data[i].id].nutrients['Valine'] * G[i].value;
        if(isNaN(A36)){
            A36 = 0
        }
        VAL += A36;
        if(Valine_NEED != 0){
            var B39 = VAL * 100 / Valine_NEED;
            B39 = roundFun(B39,0);
            if(VAL != 0) {
                if (B39 < 100) {
                    if(VAL === 0){
                        $('#X40').html('');
                        $('#Y40').html(0+'%');
                    }else {
                        $('#Y40').html(B39 + '%');
                        var M39 = "<div class='S7' style='width:" + B39 + "px;'></div>"
                        $('#X40').html(M39)
                    }
                }else {
                    if(B39 <= 150){
                        $('#Y40').html(B39 + '%');
                        var M39 = "<div class='S5'></div>"
                        $('#X40').html(M39)
                    }else {
                        $('#Y40').html(B39 + '%');
                        var M39 = "<div class='S6'></div>"
                        $('#X40').html(M39)
                    }
                }
            }
        }else{
            $('#X40').html('');
            $('#Y40').html(0+'%');
        }

        var A37 = temp2[div_data[i].id].nutrients['α-Linolenic acid'] * G[i].value;
        if(isNaN(A37)){
            A37 = 0
        }
        LIN_a += A37;
        if(α_Linolenic_acid_NEED != 0){
            var B40 = LIN_a * 100 / α_Linolenic_acid_NEED;
            B40 = roundFun(B40,0);
            if(LIN_a != 0) {
                if (B40 < 100) {
                    if(LIN_a === 0){
                        $('#X41').html('');
                        $('#Y41').html(0+'%');
                    }else {
                        $('#Y41').html(B40 + '%');
                        var M40 = "<div style='border:solid;width:" + B40 + "px;height: 8px;border-color: #e0e0e0;border-radius:10px;border-width:1px;position: fixed;left:1065px;top:552px;background: #00a0e9'></div>"
                        $('#X41').html(M40)
                    }
                }else {
                    if(B40 <= 150){
                        $('#Y41').html(B40 + '%');
                        var M40 = "<div style='border:solid;width:100px;height: 8px;border-color: #e0e0e0;border-radius:10px;border-width:1px;position: fixed;left:1065px;top:552px;background:green'></div>"
                        $('#X41').html(M40)
                    }else {
                        $('#Y41').html(B40 + '%');
                        var M40 = "<div style='border:solid;width:100px;height: 8px;border-color: #e0e0e0;border-radius:10px;border-width:1px;position: fixed;left:1065px;top:552px;background:red'></div>"
                        $('#X41').html(M40)
                    }
                }
            }
        }else{
            $('#X41').html('');
            $('#Y41').html(0+'%');
        }

        var A38 = temp2[div_data[i].id].nutrients['Linoleic acid'] * G[i].value;
        if(isNaN(A38)){
            A38 = 0
        }
        LIN += A38;
        if(Linolenic_acid_num != 0){
            var B41 = LIN * 100 / Linolenic_acid_num;
            B41 = roundFun(B41,0);
            if(LIN != 0) {
                if (B41 < 100) {
                    if(LIN === 0){
                        $('#X42').html('');
                        $('#Y42').html(0+'%');
                    }else {
                        $('#Y42').html(B41 + '%');
                        var M41 = "<div style='border:solid;width:" + B41 + "px;height: 8px;border-color: #e0e0e0;border-radius:10px;border-width:1px;position: fixed;left:1065px;top:582.5px;background: #00a0e9'></div>"
                        $('#X42').html(M41)
                    }
                }else {
                    if(B41 <= 150){
                        $('#Y42').html(B41 + '%');
                        var M41 = "<div style='border:solid;width:100px;height: 8px;border-color: #e0e0e0;border-radius:10px;border-width:1px;position: fixed;left:1065px;top:582.5px;background:green'></div>"
                        $('#X42').html(M41)
                    }else {
                        $('#Y42').html(B41 + '%');
                        var M41 = "<div style='border:solid;width:100px;height: 8px;border-color: #e0e0e0;border-radius:10px;border-width:1px;position: fixed;left:1065px;top:582.5px;background:red'></div>"
                        $('#X42').html(M41)
                    }
                }
            }
        }else{
            $('#X42').html('');
            $('#Y42').html(0+'%');
        }
    }




    $('#Calculation_num').html(roundFun(CAL,2)+'kcal');
    if(CAL === 0){
        $('#X1').html('');
        $('#Y1').html(0+'%');
    }

    if(FAT < 1000){
        $('#fat_num').html(roundFun(FAT,2)+'μg');
    }else if(FAT < 1000000){
        FAT = FAT / 1000;
        $('#fat_num').html(roundFun(FAT,2)+'mg');
    }else {
        FAT = FAT / 1000000;
        $('#fat_num').html(roundFun(FAT,2)+'g');
    }
    if(FAT === 0){
        $('#X4').html('');
        $('#Y4').html(0+'%');
    }

    if(PRO < 1000){
        $('#proteins_num').html(roundFun(PRO,2)+'μg');
    }else if(PRO < 1000000){
        PRO = PRO / 1000;
        $('#proteins_num').html(roundFun(PRO,2)+'mg');
    }else {
        PRO = PRO / 1000000;
        $('#proteins_num').html(roundFun(PRO,2)+'g');
    }
    if(PRO === 0){
        $('#X2').html('');
        $('#Y2').html(0+'%');
    }

    if(CARBS < 1000){
        $('#carbohydrates_num').html(roundFun(CARBS,2)+'μg');
    }else if(CARBS < 1000000){
        CARBS = CARBS / 1000;
        $('#carbohydrates_num').html(roundFun(CARBS,2)+'mg');
    }else {
        CARBS = CARBS / 1000000;
        $('#carbohydrates_num').html(roundFun(CARBS,2)+'g');
    }
    if(CARBS === 0){
        $('#X3').html('');
        $('#Y3').html(0+'%');
    }

    if(CALCI < 1000){
        $('#Calcium_num').html(roundFun(CALCI,2)+'μg');
    }else if(CALCI < 1000000){
        CALCI = CALCI / 1000;
        $('#Calcium_num').html(roundFun(CALCI,2)+'mg');
    }else {
        CALCI = CALCI / 1000000;
        $('#Calcium_num').html(roundFun(CALCI,2)+'g');
    }
    if(CALCI === 0){
        $('#X5').html('');
        $('#Y5').html(0+'%');
    }

    if(CHL < 1000){
        $('#Chloride_num').html(roundFun(CHL,2)+'μg');
    }else if(CHL < 1000000){
        CHL = CHL / 1000;
        $('#Chloride_num').html(roundFun(CHL,2)+'mg');
    }else {
        CHL = CHL / 1000000;
        $('#Chloride_num').html(roundFun(CHL,2)+'g');
    }
    if(CHL === 0){
        $('#X6').html('');
        $('#Y6').html(0+'%');
    }

    if(CHR < 1000){
        $('#Chromium_num').html(roundFun(CHR,2)+'μg');
    }else if(CHR < 1000000){
        CHR = CHR / 1000;
        $('#Chromium_num').html(roundFun(CHR,2)+'mg');
    }else {
        CHR = CHR / 1000000;
        $('#Chromium_num').html(roundFun(CHR,2)+'g');
    }
    if(CHR === 0){
        $('#X7').html('');
        $('#Y7').html(0+'%');
    }


    if(COPP < 1000){
        $('#Copper_num').html(roundFun(COPP,2)+'μg');
    }else if(COPP < 1000000){
        COPP = COPP / 1000;
        $('#Copper_num').html(roundFun(COPP,2)+'mg');
    }else {
        COPP = COPP / 1000000;
        $('#Copper_num').html(roundFun(COPP,2)+'g');
    }
    if(COPP === 0){
        $('#X8').html('');
        $('#Y8').html(0+'%');
    }

    if(IOD < 1000){
        $('#Iodine_num').html(roundFun(IOD,2)+'μg');
    }else if(IOD < 1000000){
        IOD = IOD / 1000;
        $('#Iodine_num').html(roundFun(IOD,2)+'mg');
    }else {
        IOD = IOD / 1000000;
        $('#Iodine_num').html(roundFun(IOD,2)+'g');
    }
    if(IOD === 0){
        $('#X9').html('');
        $('#Y9').html(0+'%');
    }

    if(IRO < 1000){
        $('#Iron_num').html(roundFun(IRO,2)+'μg');
    }else if(IRO < 1000000){
        IRO = IRO / 1000;
        $('#Iron_num').html(roundFun(IRO,2)+'mg');
    }else {
        IRO = IRO / 1000000;
        $('#Iron_num').html(roundFun(IRO,2)+'g');
    }
    if(IRO === 0){
        $('#X10').html('');
        $('#Y10').html(0+'%');
    }

    if(MAGN < 1000){
        $('#Magnesium_num').html(roundFun(MAGN,2)+'μg');
    }else if(MAGN < 1000000){
        MAGN = MAGN / 1000;
        $('#Magnesium_num').html(roundFun(MAGN,2)+'mg');
    }else {
        MAGN = MAGN / 1000000;
        $('#Magnesium_num').html(roundFun(MAGN,2)+'g');
    }
    if(MAGN === 0){
        $('#X11').html('');
        $('#Y11').html(0+'%');
    }

    if(MANGAN < 1000){
        $('#Manganese_num').html(roundFun(MANGAN,2)+'μg');
    }else if(MANGAN < 1000000){
        MANGAN = MANGAN / 1000;
        $('#Manganese_num').html(roundFun(MANGAN,2)+'mg');
    }else {
        MANGAN = MANGAN / 1000000;
        $('#Manganese_num').html(roundFun(MANGAN,2)+'g');
    }
    if(MANGAN === 0){
        $('#X12').html('');
        $('#Y12').html(0+'%');
    }

    if(MOLY < 1000){
        $('#Molybdenum_num').html(roundFun(MOLY,2)+'μg');
    }else if(MOLY < 1000000){
        MOLY = MOLY / 1000;
        $('#Molybdenum_num').html(roundFun(MOLY,2)+'mg');
    }else {
        MOLY = MOLY / 1000000;
        $('#Molybdenum_num').html(roundFun(MOLY,2)+'g');
    }
    if(MOLY === 0){
        $('#X13').html('');
        $('#Y13').html(0+'%');
    }

    if(PHO < 1000){
        $('#Phosphorus_num').html(roundFun(PHO,2)+'μg');
    }else if(PHO < 1000000){
        PHO = PHO / 1000;
        $('#Phosphorus_num').html(roundFun(PHO,2)+'mg');
    }else {
        PHO = PHO / 1000000;
        $('#Phosphorus_num').html(roundFun(PHO,2)+'g');
    }
    if(PHO === 0){
        $('#X14').html('');
        $('#Y14').html(0+'%');
    }

    if(POT < 1000){
        $('#Potassium_num').html(roundFun(POT,2)+'μg');
    }else if(POT < 1000000){
        POT = POT / 1000;
        $('#Potassium_num').html(roundFun(POT,2)+'mg');
    }else {
        POT = POT / 1000000;
        $('#Potassium_num').html(roundFun(POT,2)+'g');
    }
    if(POT === 0){
        $('#X15').html('');
        $('#Y15').html(0+'%');
    }

    if(SEL < 1000){
        $('#Selenium_num').html(roundFun(SEL,2)+'μg');
    }else if(SEL < 1000000){
        SEL = SEL / 1000;
        $('#Selenium_num').html(roundFun(SEL,2)+'mg');
    }else {
        SEL = SEL / 1000000;
        $('#Selenium_num').html(roundFun(SEL,2)+'g');
    }
    if(SEL === 0){
        $('#X16').html('');
        $('#Y16').html(0+'%');
    }

    if(SOD < 1000){
        $('#Sodium_num').html(roundFun(SOD,2)+'μg');
    }else if(SOD < 1000000){
        SOD = SOD / 1000;
        $('#Sodium_num').html(roundFun(SOD,2)+'mg');
    }else {
        SOD = SOD / 1000000;
        $('#Sodium_num').html(roundFun(SOD,2)+'g');
    }
    if(SOD === 0){
        $('#X17').html('');
        $('#Y17').html(0+'%');
    }

    if(ZINC < 1000){
        $('#Zinc_num').html(roundFun(ZINC,2)+'μg');
    }else if(ZINC < 1000000){
        ZINC = ZINC / 1000;
        $('#Zinc_num').html(roundFun(ZINC,2)+'mg');
    }else {
        ZINC = ZINC / 1000000;
        $('#Zinc_num').html(roundFun(ZINC,2)+'g');
    }
    if(ZINC === 0){
        $('#X18').html('');
        $('#Y18').html(0+'%');
    }

    if(VIT_A < 1000){
        $('#VitaminA_num').html(roundFun(VIT_A,2)+'μg');
    }else if(VIT_A < 1000000){
        VIT_A = VIT_A / 1000;
        $('#VitaminA_num').html(roundFun(VIT_A,2)+'mg');
    }else {
        VIT_A = VIT_A / 1000000;
        $('#VitaminA_num').html(roundFun(VIT_A,2)+'g');
    }
    if(VIT_A === 0){
        $('#X19').html('');
        $('#Y19').html(0+'%');
    }

    if(VIT_B1 < 1000){
        $('#VitaminB1_num').html(roundFun(VIT_B1,2)+'μg');
    }else if(VIT_B1 < 1000000){
        VIT_B1 = VIT_B1 / 1000;
        $('#VitaminB1_num').html(roundFun(VIT_B1,2)+'mg');
    }else {
        VIT_B1 = VIT_B1 / 1000000;
        $('#VitaminB1_num').html(roundFun(VIT_B1,2) + 'g');
    }
    if(VIT_B1 === 0){
        $('#X20').html('');
        $('#Y20').html(0+'%');
    }

    if(VIT_B2 < 1000){
        $('#VitaminB2_num').html(roundFun(VIT_B2,2)+'μg');
    }else if(VIT_B2 < 1000000){
        VIT_B2 = VIT_B2 / 1000;
        $('#VitaminB2_num').html(roundFun(VIT_B2,2)+'mg');
    }else {
        VIT_B2 = VIT_B2 / 1000000;
        $('#VitaminB2_num').html(roundFun(VIT_B2,2) + 'g');
    }
    if(VIT_B2 === 0){
        $('#X21').html('');
        $('#Y21').html(0+'%');
    }

    if(VIT_B3 < 1000){
        $('#VitaminB3_num').html(roundFun(VIT_B3,2)+'μg');
    }else if(VIT_B3 < 1000000){
        VIT_B3 = VIT_B3 / 1000;
        $('#VitaminB3_num').html(roundFun(VIT_B3,2)+'mg');
    }else {
        VIT_B3 = VIT_B3 / 1000000;
        $('#VitaminB3_num').html(roundFun(VIT_B3,2) + 'g');
    }
    if(VIT_B3 === 0){
        $('#X22').html('');
        $('#Y22').html(0+'%');
    }

    if(VIT_B5 < 1000){
        $('#VitaminB5_num').html(roundFun(VIT_B5,2)+'μg');
    }else if(VIT_B5 < 1000000){
        VIT_B5 = VIT_B5 / 1000;
        $('#VitaminB5_num').html(roundFun(VIT_B5,2)+'mg');
    }else {
        VIT_B5 = VIT_B5 / 1000000;
        $('#VitaminB5_num').html(roundFun(VIT_B5,2) + 'g');
    }
    if(VIT_B5 === 0){
        $('#X23').html('');
        $('#Y23').html(0+'%');
    }

    if(VIT_B6 < 1000){
        $('#VitaminB6_num').html(roundFun(VIT_B6,2)+'μg');
    }else if(VIT_B6 < 1000000){
        VIT_B6 = VIT_B6 / 1000;
        $('#VitaminB6_num').html(roundFun(VIT_B6,2)+'mg');
    }else {
        VIT_B6 = VIT_B6 / 1000000;
        $('#VitaminB6_num').html(roundFun(VIT_B6,2) + 'g');
    }
    if(VIT_B6 === 0){
        $('#X24').html('');
        $('#Y24').html(0+'%');
    }

    if(VIT_B7 < 1000){
        $('#VitaminB7_num').html(roundFun(VIT_B7,2)+'μg');
    }else if(VIT_B7 < 1000000){
        VIT_B7 = VIT_B7 / 1000;
        $('#VitaminB7_num').html(roundFun(VIT_B7,2)+'mg');
    }else {
        VIT_B7 = VIT_B7 / 1000000;
        $('#VitaminB7_num').html(roundFun(VIT_B7,2) + 'g');
    }

    if(VIT_B9 < 1000){
        $('#VitaminB9_num').html(roundFun(VIT_B9,2)+'μg');
    }else if(VIT_B9 < 1000000){
        VIT_B9 = VIT_B9 / 1000;
        $('#VitaminB9_num').html(roundFun(VIT_B9,2)+'mg');
    }else {
        VIT_B9 = VIT_B9 / 1000000;
        $('#VitaminB9_num').html(roundFun(VIT_B9,2) + 'g');
    }
    if(VIT_B9 === 0){
        $('#X26').html('');
        $('#Y26').html(0+'%');
    }

    if(VIT_B12 < 1000){
        $('#VitaminB12_num').html(roundFun(VIT_B12,2)+'μg');
    }else if(VIT_B12 < 1000000){
        VIT_B12 = VIT_B12 / 1000;
        $('#VitaminB12_num').html(roundFun(VIT_B12,2)+'mg');
    }else {
        VIT_B12 = VIT_B12 / 1000000;
        $('#VitaminB12_num').html(roundFun(VIT_B12,2) + 'g');
    }
    if(VIT_B12 === 0){
        $('#X27').html('');
        $('#Y27').html(0+'%');
    }

    if(VIT_C < 1000){
        $('#VitaminC_num').html(roundFun(VIT_C,2)+'μg');
    }else if(VIT_C < 1000000){
        VIT_C = VIT_C / 1000;
        $('#VitaminC_num').html(roundFun(VIT_C,2)+'mg');
    }else {
        VIT_C = VIT_C / 1000000;
        $('#VitaminC_num').html(roundFun(VIT_C,2) + 'g');
    }
    if(VIT_C === 0){
        $('#X28').html('');
        $('#Y28').html(0+'%');
    }

    if(VIT_E < 1000){
        $('#VitaminE_num').html(roundFun(VIT_E,2)+'μg');
    }else if(VIT_E < 1000000){
        VIT_E = VIT_E / 1000;
        $('#VitaminE_num').html(roundFun(VIT_E,2)+'mg');
    }else {
        VIT_E = VIT_E / 1000000;
        $('#VitaminE_num').html(roundFun(VIT_E,2) + 'g');
    }
    if(VIT_E === 0){
        $('#X29').html('');
        $('#Y29').html(0+'%');
    }

    if(VIT_K < 1000){
        $('#VitaminK_num').html(roundFun(VIT_K,2)+'μg');
    }else if(VIT_K < 1000000){
        VIT_K = VIT_K / 1000;
        $('#VitaminK_num').html(roundFun(VIT_K,2)+'mg');
    }else {
        VIT_K = VIT_K / 1000000;
        $('#VitaminK_num').html(roundFun(VIT_K,2) + 'g');
    }
    if(VIT_K === 0){
        $('#X30').html('');
        $('#Y30').html(0+'%');
    }

    if(CHO < 1000){
        $('#Choline_num').html(roundFun(CHO,2)+'μg');
    }else if(CHO < 1000000){
        CHO = CHO / 1000;
        $('#Choline_num').html(roundFun(CHO,2)+'mg');
    }else {
        CHO = CHO / 1000000;
        $('#Choline_num').html(roundFun(CHO,2) + 'g');
    }
    if(CHO === 0){
        $('#X31').html('');
        $('#Y31').html(0+'%');
    }

    if(ISOL < 1000){
        $('#Isoleucine_num').html(roundFun(ISOL,2)+'μg');
    }else if(ISOL < 1000000){
        ISOL = ISOL / 1000;
        $('#Isoleucine_num').html(roundFun(ISOL,2)+'mg');
    }else {
        ISOL = ISOL / 1000000;
        $('#Isoleucine_num').html(roundFun(ISOL,2) + 'g');
    }
    if(ISOL === 0){
        $('#X32').html('');
        $('#Y32').html(0+'%');
    }

    if(HIST < 1000){
        $('#Histidine_num').html(roundFun(HIST,2)+'μg');
    }else if(HIST < 1000000){
        HIST = HIST / 1000;
        $('#Histidine_num').html(roundFun(HIST,2)+'mg');
    }else {
        HIST = HIST / 1000000;
        $('#Histidine_num').html(roundFun(HIST,2) + 'g');
    }
    if(ISOL === 0){
        $('#X33').html('');
        $('#Y33').html(0+'%');
    }

    if(LEU < 1000){
        $('#Leucine_num').html(roundFun(LEU,2)+'μg');
    }else if(LEU < 1000000){
        LEU = LEU / 1000;
        $('#Leucine_num').html(roundFun(LEU,2)+'mg');
    }else {
        LEU = LEU / 1000000;
        $('#Leucine_num').html(roundFun(LEU,2) + 'g');
    }
    if(LEU === 0){
        $('#X34').html('');
        $('#Y34').html(0+'%');
    }

    if(LYS < 1000){
        $('#Lysine_num').html(roundFun(LYS,2)+'μg');
    }else if(LYS < 1000000){
        LYS = LYS / 1000;
        $('#Lysine_num').html(roundFun(LYS,2)+'mg');
    }else {
        LYS = LYS / 1000000;
        $('#Lysine_num').html(roundFun(LYS,2) + 'g');
    }
    if(LYS === 0){
        $('#X35').html('');
        $('#Y35').html(0+'%');
    }

    if(METH < 1000){
        $('#Methionine_num').html(roundFun(METH,2)+'μg');
    }else if(METH < 1000000){
        METH = METH / 1000;
        $('#Methionine_num').html(roundFun(METH,2)+'mg');
    }else {
        METH = METH / 1000000;
        $('#Methionine_num').html(roundFun(METH,2) + 'g');
    }
    if(METH === 0){
        $('#X36').html('');
        $('#Y36').html(0+'%');
    }

    if(PHENY < 1000){
        $('#Phenylalanine_num').html(roundFun(PHENY,2)+'μg');
    }else if(PHENY < 1000000){
        PHENY = PHENY / 1000;
        $('#Phenylalanine_num').html(roundFun(PHENY,2)+'mg');
    }else {
        PHENY = PHENY / 1000000;
        $('#Phenylalanine_num').html(roundFun(PHENY,2) + 'g');
    }
    if(PHENY === 0){
        $('#X37').html('');
        $('#Y37').html(0+'%');
    }

    if(TRYP < 1000){
        $('#Tryptophan_num').html(roundFun(TRYP,2)+'μg');
    }else if(TRYP < 1000000){
        TRYP = TRYP / 1000;
        $('#Tryptophan_num').html(roundFun(TRYP,2)+'mg');
    }else {
        TRYP = TRYP / 1000000;
        $('#Tryptophan_num').html(roundFun(TRYP,2) + 'g');
    }
    if(TRYP === 0){
        $('#X38').html('');
        $('#Y38').html(0+'%');
    }

    if(THRE < 1000){
        $('#Threonine_num').html(roundFun(THRE,2)+'μg');
    }else if(THRE < 1000000){
        THRE = THRE / 1000;
        $('#Threonine_num').html(roundFun(THRE,2)+'mg');
    }else {
        THRE = THRE / 1000000;
        $('#Threonine_num').html(roundFun(THRE,2) + 'g');
    }
    if(THRE === 0){
        $('#X39').html('');
        $('#Y39').html(0+'%');
    }

    if(VAL < 1000){
        $('#Valine_num').html(roundFun(VAL,2)+'μg');
    }else if(VAL < 1000000){
        VAL = VAL / 1000;
        $('#Valine_num').html(roundFun(VAL,2)+'mg');
    }else {
        VAL = VAL / 1000000;
        $('#Valine_num').html(roundFun(VAL,2) + 'g');
    }
    if(VAL === 0){
        $('#X40').html('');
        $('#Y40').html(0+'%');
    }

    if(LIN_a < 1000){
        $('#α_Linolenic_acid_num').html(roundFun(LIN_a,2)+'μg');
    }else if(LIN_a < 1000000){
        LIN_a = LIN_a / 1000;
        $('#α_Linolenic_acid_num').html(roundFun(LIN_a,2)+'mg');
    }else {
        LIN_a = LIN_a / 1000000;
        $('#α_Linolenic_acid_num').html(roundFun(LIN_a,2) + 'g');
    }
    if(LIN_a === 0){
        $('#X41').html('');
        $('#Y41').html(0+'%');
    }

    if(LIN < 1000){
        $('#Linolenic_acid_num').html(roundFun(LIN,2)+'μg');
    }else if(LIN < 1000000){
        LIN = LIN / 1000;
        $('#Linolenic_acid_num').html(roundFun(LIN,2)+'mg');
    }else {
        LIN = LIN / 1000000;
        $('#Linolenic_acid_num').html(roundFun(LIN,2) + 'g');
    }
    if(LIN === 0){
        $('#X42').html('');
        $('#Y42').html(0+'%');
    }
}
