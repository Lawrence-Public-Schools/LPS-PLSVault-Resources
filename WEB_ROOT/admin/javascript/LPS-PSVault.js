function AddLPSPSVaultResources() {
   $j("div#LPS-PSVaultCustomhiddentable h2").insertBefore("#content-main > div.box-round")
   $j("div#LPSPSVaultResources").insertBefore("#content-main > div.box-round")
      $j('div#content-main > h2:first').each(function(){
      hideCollapseClasses($j(this));
      hideCollapseText($j(this));
      hideCollapseTarget($j(this));
   });
   $j("#content-main > div.box-round").insertBefore("div#LPS-plsvault_students")
   $j("div#LPS-PSVaultCustomhiddentable").remove();
   $Vframe = '<div id="LPSPSVaulttarget"><iframe id="LPSPSVaultlog" src="/admin/students/studentpages/LPS-plsvault_students.html?frn='+$LPSPSVault+'" frameborder="0"></iframe></div>'
   $j("div#LPSPSVaultResources").after($Vframe);
}

function RemoveLPSPSVaultResources() {
        $j("div#LPS-PSVaultCustomhiddentable").remove();
}

if ($testURL.indexOf("admin/students/studentpages/plsvault_students.html") !== -1) {
        $j(document).ready(AddLPSPSVaultResources);
} else {
    $j(document).ready(RemoveLPSPSVaultResources);
}