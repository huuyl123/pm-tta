/*
	Module: Containerberater (Freisler BLZ)
	Author: Tung Le Huy
	Company: Picasso Media
*/
var PLZ_TRANSPORT = [
  20095,
  20097,
  20099,
  20144,
  20146,
  20148,
  20149,
  20249,
  20251,
  20253,
  20255,
  20257,
  20259,
  20354,
  20355,
  20357,
  20359,
  20457,
  20459,
  20535,
  20537,
  20539,
  21029,
  21031,
  21033,
  21035,
  21037,
  21039,
  21073,
  21075,
  21077,
  21079,
  21107,
  21109,
  21129,
  21147,
  21149,
  22041,
  22043,
  22045,
  22047,
  22049,
  22081,
  22083,
  22085,
  22087,
  22089,
  22111,
  22113,
  22115,
  22117,
  22119,
  22143,
  22145,
  22147,
  22149,
  22159,
  22175,
  22177,
  22179,
  22297,
  22299,
  22301,
  22303,
  22305,
  22307,
  22309,
  22335,
  22337,
  22339,
  22359,
  22391,
  22393,
  22395,
  22397,
  22399,
  22415,
  22417,
  22419,
  22451,
  22453,
  22455,
  22457,
  22459,
  22523,
  22525,
  22527,
  22529,
  22547,
  22549,
  22559,
  22587,
  22589,
  22605,
  22607,
  22609,
  22761,
  22763,
  22765,
  22767,
  22769,
  25462,
  25474,
  27499,
  25421,
];

var PLZ_TRANSPORT_PREISE = {
  20095: 112.35,
  20097: 112.35,
  20099: 112.35,
  20144: 112.35,
  20146: 112.35,
  20148: 112.35,
  20149: 112.35,
  20249: 112.35,
  20251: 112.35,
  20253: 112.35,
  20255: 112.35,
  20257: 112.35,
  20259: 112.35,
  20354: 112.35,
  20355: 112.35,
  20357: 112.35,
  20359: 112.35,
  20457: 112.35,
  20459: 112.35,
  20535: 112.35,
  20537: 112.35,
  20539: 112.35,
  21029: 112.35,
  21031: 122.35,
  21033: 122.35,
  21035: 112.35,
  21037: 122.35,
  21039: 122.35,
  21073: 122.35,
  21075: 122.35,
  21077: 112.35,
  21079: 122.35,
  21107: 122.35,
  21109: 122.35,
  21129: 112.35,
  21147: 122.35,
  21149: 122.35,
  22041: 112.35,
  22043: 112.35,
  22045: 112.35,
  22047: 112.35,
  22049: 112.35,
  22081: 112.35,
  22083: 112.35,
  22085: 112.35,
  22087: 112.35,
  22089: 112.35,
  22111: 112.35,
  22113: 112.35,
  22115: 112.35,
  22117: 112.35,
  22119: 112.35,
  22143: 112.35,
  22145: 112.35,
  22147: 112.35,
  22149: 112.35,
  22159: 112.35,
  22175: 112.35,
  22177: 112.35,
  22179: 112.35,
  22297: 112.35,
  22299: 112.35,
  22301: 112.35,
  22303: 112.35,
  22305: 112.35,
  22307: 112.35,
  22309: 112.35,
  22335: 112.35,
  22337: 112.35,
  22339: 112.35,
  22359: 112.35,
  22391: 112.35,
  22393: 112.35,
  22395: 112.35,
  22397: 112.35,
  22399: 112.35,
  22415: 112.35,
  22417: 112.35,
  22419: 112.35,
  22451: 85,
  22453: 85,
  22455: 85,
  22457: 85,
  22459: 85,
  22523: 85,
  22525: 112.35,
  22527: 112.35,
  22529: 112.35,
  22547: 112.35,
  22549: 112.35,
  22559: 112.35,
  22587: 112.35,
  22589: 112.35,
  22605: 112.35,
  22607: 112.35,
  22609: 112.35,
  22761: 112.35,
  22763: 112.35,
  22765: 112.35,
  22767: 112.35,
  22769: 112.35,
  25462: 85,
  25474: 85,
  27499: 112.35,
  25421: 85,
};

var KEINE_MINIS_LIST = [
  21031,
  21033,
  21037,
  21039,
  21073,
  21075,
  21079,
  21107,
  21109,
  21147,
  21149,
  21077,
  21029,
  21035,
];

var ABFALLART = {
  1: {
    Minis: 95,
    M3: 145.5,
    M4: 194.0,
    M6: 291,
    M7: 339.5,
    M10: 0,
    C6: 291.0,
    C10: 485.0,
    C14: 0,
    C18: 0,
    C24: 0,
  } /* Bauschutt, mineralisch */,
  2: {
    Minis: 95,
    M3: 109.5,
    M4: 194,
    M6: 219,
    M7: 0,
    M10: 0,
    C6: 219,
    C10: 365,
    C14: 0,
    C18: 0,
    C24: 0,
  } /* Boden */,
  3: {
    Minis: 95.0,
    M3: 175.5,
    M4: 234.0,
    M6: 351.0,
    M7: 409.5,
    M10: 585.0,
    C6: 351.0,
    C10: 585.0,
    C14: 819.0,
    C18: 1053.0,
    C24: 1404.0,
  } /* Baumischabfall */,
  4: {
    Minis: 95,
    M3: 67.5,
    M4: 90.0,
    M6: 135.0,
    M7: 157.5,
    M10: 225.0,
    C6: 135.0,
    C10: 225.0,
    C14: 315.0,
    C18: 405.0,
    C24: 540.0,
  } /* Garten-/Grünabfall */,
  5: {
    Minis: 95,
    M3: 105.5,
    M4: 140,
    M6: 210,
    M7: 245,
    M10: 350,
    C6: 210,
    C10: 350,
    C14: 490,
    C18: 630,
    C24: 840,
  } /* Holz behandelt A2-A3 */,
  6: {
    Minis: 0,
    M3: 105.5,
    M4: 140,
    M6: 210,
    M7: 245,
    M10: 350,
    C6: 210,
    C10: 350,
    C14: 490,
    C18: 630,
    C24: 840,
  } /* Sperrmüll */,
  7: {
    Minis: 95,
    M3: 135.0,
    M4: 180,
    M6: 270.0,
    M7: 315.0,
    M10: 450.0,
    C6: 270.0,
    C10: 450.0,
    C14: 630.0,
    C18: 810.0,
    C24: 1080.0,
  } /* Gipskarton */,
};

var OPTION_LIST = [
  '<option id="Minis" data-img-src="' +
    window.location.origin +
    '/wp-content/themes/inovado/Containerberater/img/icon_minicontainer.jpg" data-img-label="Minis (1 m³)" value="1">Minis (1 m³)</option>',
  '<option id="M3" data-img-src="' +
    window.location.origin +
    '/wp-content/themes/inovado/Containerberater/img/icon_offenemulde.jpg" data-img-label="Mulde (3 m³)" value="2">Mulde (3 m³)</option>',
  '<option id="M4" data-img-src="' +
    window.location.origin +
    '/wp-content/themes/inovado/Containerberater/img/icon_offenemulde.jpg" data-img-label="Mulde (4 m³)" value="3">Mulde (4 m³)</option>',
  '<option id="M6" data-img-src="' +
    window.location.origin +
    '/wp-content/themes/inovado/Containerberater/img/icon_mulde.jpg" data-img-label="Mulde (6 m³)" value="4">Mulde (6 m³)</option>',
  '<option id="M7" data-img-src="' +
    window.location.origin +
    '/wp-content/themes/inovado/Containerberater/img/icon_mulde.jpg" data-img-label="Mulde (7 m³)" value="5">Mulde (7 m³)</option>',
  '<option id="M10" data-img-src="' +
    window.location.origin +
    '/wp-content/themes/inovado/Containerberater/img/icon_deckelmulde1.jpg" data-img-label="Mulde (10 m³)" value="6">Mulde (10 m³)</option>',
  '<option id="C6" data-img-src="' +
    window.location.origin +
    '/wp-content/themes/inovado/Containerberater/img/icon_abrollcontainer.jpg" data-img-label="Abrollcont. (6 m³)" value="7">Abrollcont. (6 m³)</option>',
  '<option id="C10" data-img-src="' +
    window.location.origin +
    '/wp-content/themes/inovado/Containerberater/img/icon_abrollcontainer.jpg" data-img-label="Abrollcont. (10 m³)" value="8">Abrollcont. (10 m³)</option>',
  '<option id="C14" data-img-src="' +
    window.location.origin +
    '/wp-content/themes/inovado/Containerberater/img/icon_abrollcontainer.jpg" data-img-label="Abrollcont. (14 m³)" value="9">Abrollcont. (14 m³)</option>',
  '<option id="C18" data-img-src="' +
    window.location.origin +
    '/wp-content/themes/inovado/Containerberater/img/icon_abrollcontainer.jpg" data-img-label="Abrollcont. (18 m³)" value="10">Abrollcont. (18 m³)</option>',
  '<option id="C24" data-img-src="' +
    window.location.origin +
    '/wp-content/themes/inovado/Containerberater/img/icon_offenecontainer1.jpg" data-img-label="Abrollcont. (24 m³)" value="11">Abrollcont. (24 m³)</option>',
];

function DebugHash(debugstr) {
  window.location.hash = debugstr;
}

function getAbsolutePath() {
  var loc = window.location;
  var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf("/") + 1);
  return loc.href.substring(
    0,
    loc.href.length -
      ((loc.pathname + loc.search + loc.hash).length - pathName.length)
  );
}

var _PLZ = 0,
  _ART = 0,
  _GROSS = 0,
  _PREISE;

function IsInList(VALUE, LIST) {
  return LIST.indexOf(VALUE) > -1;
}

function GetAllKeyInObject(obj) {
  var keys = [];
  for (var k in obj) keys.push(k);
  return keys;
}

function Reset() {
  jQuery("#plz").val("");
  jQuery("#plz").removeAttr("readonly");
  jQuery("#deleteplz").hide();
  jQuery("#Abfallart").val("0");
  jQuery("#Abfallart").data("picker").sync_picker_with_select();
  jQuery('#ContainerGroesse option[val!="0"]').remove();
  for (var i = 0; i < OPTION_LIST.length; i++) {
    jQuery("#ContainerGroesse").append(OPTION_LIST[i]);
  }
  jQuery("#ContainerGroesse").val("0");
  jQuery("#ContainerGroesse").imagepicker({
    hide_select: true,
    show_label: true,
  });
  jQuery("#ContainerGroesse").data("picker").sync_picker_with_select();
  _PLZ = 0;
  _ART = 0;
  _GROSS = 0;
  jQuery("#preis").html("");
}

function InEURO(number) {
  var numberStr = parseFloat(number).toFixed(2).toString();
  var numFormatDec = numberStr.slice(-2); /*decimal 00*/
  numberStr = numberStr.substring(
    0,
    numberStr.length - 3
  ); /*cut last 3 strings*/
  var numFormat = new Array();
  while (numberStr.length > 3) {
    numFormat.unshift(numberStr.slice(-3));
    numberStr = numberStr.substring(0, numberStr.length - 3);
  }
  numFormat.unshift(numberStr);
  return numFormat.join(".") + "," + numFormatDec; /*format 000.000.000,00 */
}

function Calculate(PLZ, ART, GROSS, MwSt) {
  var PLZ_PREIS, GROSS_PREIS, GESAMT_PREIS, ENDPREIS;
  if (typeof MwSt === "undefined") MwSt = 0;
  if (!PLZ || !ART || !GROSS) return 0;
  if (!IsInList(PLZ, PLZ_TRANSPORT)) return 0;
  // Minis
  if (GROSS == 1) PLZ_PREIS = 0;
  else PLZ_PREIS = PLZ_TRANSPORT_PREISE[PLZ];
  var GrossList = GetAllKeyInObject(ABFALLART[ART]);
  GROSS_PREIS = ABFALLART[ART][GrossList[GROSS - 1]];
  GESAMT_PREIS = PLZ_PREIS + GROSS_PREIS;
  ENDPREIS = GESAMT_PREIS + (GESAMT_PREIS / 100) * MwSt;
  return InEURO(ENDPREIS);
}

jQuery(document).ready(function () {
  jQuery("#pm-container-berater-form").show();
  jQuery("#Abfallart").imagepicker({
    hide_select: true,
    show_label: true,
  });
  jQuery("#ContainerGroesse").imagepicker({
    hide_select: true,
    show_label: true,
  });
  // PLZ prüfen

  jQuery("#plz").on("input propertychange paste", function () {
    if (jQuery("#plz").val().length < 5) exit;
    if (IsInList(parseInt(this.value), PLZ_TRANSPORT)) {
      jQuery("#plz").attr("readonly", "readonly");
      jQuery("#deleteplz").show();
      _PLZ = parseInt(this.value);
      jQuery("#plz_err").hide();
    } else {
      jQuery("#plz_err").show();
      jQuery("#plz").val("");
    }
  });
  // Abfallart prüfen
  jQuery("#Abfallart").change(function () {
    if (_PLZ == 0) {
      jQuery("#Abfallart").val("0");
      jQuery("#Abfallart").data("picker").sync_picker_with_select();
      alert("Bitte geben Sie eine gültige PLZ !");
    } else {
      _ART = parseInt(jQuery("#Abfallart").val());
      jQuery('#ContainerGroesse option[val!="0"]').remove();
      var GrossList = GetAllKeyInObject(ABFALLART[_ART]);
      for (var i = 0; i < GrossList.length; i++) {
        if (ABFALLART[_ART][GrossList[i]] != 0) {
          jQuery("#ContainerGroesse").append(OPTION_LIST[i]);
        }
      }
      if (IsInList(_PLZ, KEINE_MINIS_LIST))
        jQuery('#ContainerGroesse option[id="Minis"]').remove();
      _GROSS = 0;
      jQuery("#ContainerGroesse").val("0");
      jQuery("#ContainerGroesse").imagepicker({
        hide_select: true,
        show_label: true,
      });
      jQuery("#ContainerGroesse").data("picker").sync_picker_with_select();
      jQuery("#preis").html("");
    }
  });
  // Größe prüfen
  jQuery(document).on("change", "#ContainerGroesse", function () {
    if (_PLZ == 0 || _ART == 0) {
      jQuery("#ContainerGroesse").val("0");
      jQuery("#ContainerGroesse").data("picker").sync_picker_with_select();
    } else {
      _GROSS = parseInt(jQuery("#ContainerGroesse").val());
      jQuery("#preis").html(
        '<span id="euro">' +
          Calculate(_PLZ, _ART, _GROSS, 16) +
          " €</span><br>Inkl. 16% MwSt.<br><span>und Mautpauschale</span><br>(Nettopreis " +
          Calculate(_PLZ, _ART, _GROSS) +
          " €)"
      );
    }
  });
  jQuery(".inline_1").colorbox({ inline: true, width: "50%" });
  jQuery(".inline_2").colorbox({ inline: true, width: "50%" });
  jQuery(".inline_3").colorbox({ inline: true, width: "50%" });
  jQuery(".inline_4").colorbox({ inline: true, width: "50%" });
  jQuery(".inline_5").colorbox({ inline: true, width: "50%" });
  jQuery(".inline_6").colorbox({ inline: true, width: "50%" });
  jQuery(".inline_7").colorbox({ inline: true, width: "50%" });
});
