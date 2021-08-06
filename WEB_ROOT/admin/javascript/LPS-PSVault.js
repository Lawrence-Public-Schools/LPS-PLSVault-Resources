function AddLPSPSVaultResources() {
   $j("#content-main > div.box-round").prepend($j("div#LPS-PSVaultCustomhiddentable h2"));
   $j("#content-main > div.box-round").prepend($j("div#LPS-plsvault_students"));
   $j('#content-main > div.box-round > h2:first').each(function(){
      hideCollapseClasses($j(this));
      hideCollapseText($j(this));
      hideCollapseTarget($j(this));
   });
   $j("#content-main > div.box-round").prepend($j("div#LPS-PSVaultCustomhiddentable div#LPSPSVaultResources"));
   $j("div#LPS-PSVaultCustomhiddentable").remove();
   $j("div#LPS-plsvault_students").append('<iframe src="/admin/students/studentpages/LPS-plsvault_students.html?frn=~(studentfrn)" frameborder="0" height="200" width="600"></iframe>');
};

function RemoveLPSPSVaultResources() {
        $j("div#LPS-PSVaultCustomhiddentable").remove();
};

if ($testURL.indexOf("admin/students/studentpages/plsvault_students.html") !== -1) {
        $j(document).ready(AddLPSPSVaultResources);
} else {
    $j(document).ready(RemoveLPSPSVaultResources);
}