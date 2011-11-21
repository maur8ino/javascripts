(function ($) {

	var mandatory_fields_user = ["NAME", "SURNAME", "EMAIL"];

	$.fn.undoChangesUser = function() {
		$(this).unbind('click');
		$(this).bind('click', function() {
			var user_id = $(this).attr("id").split("_")[1];
			// Visualizzo i view
			$("div[id^='viewuser_"+user_id+"_']").each(function() {
				$(this).show();
			});
			// Nascondo e resetto gli edit
			$("div[id^='edituser_"+user_id+"_']").each(function() {
				var field_name = $(this).attr("id").split("_")[2];
				$("#inputuser_"+user_id+"_"+field_name).val($("#viewuser_"+user_id+"_"+field_name).html());
				//$("#inputuser_"+user_id+"_"+field_name).trigger('change');
				// Aggiungo il change per i valori non nulli
				$(mandatory_fields_user).each(function() {
					$("#inputuser_"+user_id+"_"+this).trigger('change');
				});
				$(this).hide();
			});
			// Nascondo i link undo
			$("#userundolink_"+user_id).hide();
			// Abilito il link alle user info
			$("#userinfolink_"+user_id).show();
			// Unlocko lo status
			$("#selectuser_"+user_id+"_STATUS").removeAttr("disabled");
			// Aggiorno l'abilitazione alle firme
			$("#selectuser_"+user_id+"_ROLE").trigger('change');
			if (user_id == 'NEWUSER') {
				$("tr[id^='tr'][id$='_user_"+user_id+"']").remove();
			}
		});
	};
})(jQuery);
