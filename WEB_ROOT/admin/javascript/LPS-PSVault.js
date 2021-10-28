if ($testURL.indexOf("admin/students/studentpages/plsvault_students.html") !== -1) {
  $j(document).ready(AddLPSPSVaultResources);
} else {
  $j(document).ready(RemoveLPSPSVaultResources);
}

function AddLPSPSVaultResources() {
   $j("#LPS-PSVaultCustomhiddentable h2").insertBefore("#content-main > div.box-round")
   $j("#LPSPSVaultResources").insertBefore("#content-main > div.box-round")
   $j('#content-main > h2:first').each(function(){
       hideCollapseClasses($j(this));
       hideCollapseText($j(this));
       hideCollapseTarget($j(this));
   });
   $j("#content-main > div.box-round").insertBefore("#LPS-plsvault_students")
   $j("#LPS-PSVaultCustomhiddentable").remove();
   $Vframe = '<div id="LPSPSVaulttarget"><iframe id="LPSPSVaultlog" src="/admin/students/studentpages/LPS-plsvault_students.html?frn='+$LPSPSVault+'" frameborder="0"></iframe></div>'
   $j("#LPSPSVaultResources").after($Vframe);
}
function RemoveLPSPSVaultResources() {
   $j("#LPS-PSVaultCustomhiddentable").remove();
}

function toggleVAT() {
  let $VAT = $j('#VAT');
  let $link = $j('#VAT-Link')
  if ($VAT.css("display") === "none") {
    $VAT.css("display","inline-block");
    $link.html("<i id='VAT-Link'>(click to hide)</i>");
  } else {
    $VAT.css("display","none");
    $link.html("<i id='VAT-Link'>(click to show)</i>");
  }
}