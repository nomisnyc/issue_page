$(function(){

   // pagination jquery pluggin 
  $("div.holder").jPages({
          containerID  : "itemContainer",
          perPage      : 7,
          startPage    : 1,
          startRange   : 1,
          midRange     : 4,
          endRange     : 8
  });

 // js for the toggle buttons

  $(".current_projects").click(function(){
    $("#current_projects").fadeIn('slow');
    $(".current_projects").addClass(".selected_projects");
    $(".completed_projects").removeClass(".current_projects");
    $("#completed_projects").fadeOut();
    
  });

  $(".completed_projects").click(function(){
    $("#completed_projects").fadeIn('slow');
    $(".completed_projects").addClass(".current_projects");
    $(".current_projects").removeClass(".completed_projects");
    $("#current_projects").fadeOut();
  });
 });