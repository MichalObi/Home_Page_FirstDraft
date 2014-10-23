
				$( "#nav-hide" ).click(function() {
  				$( "#uk-navbar").hide("slow");
  				$(".hidden-button").show("slow")
				});

				$(".hidden-button").click(function() {
				$( "#uk-navbar").show("slow");
				$(".hidden-button").hide("slow");
				});

				$("#panel1").hover(function() {
					$("#opis1").fadeIn(700);			
				},
				function() {
				$("#opis1").fadeOut(700);
				}
				);

				$("#panel2").hover(function() {
				$("#opis2").fadeIn(700);			
				},
				function() {
				$("#opis2").fadeOut(700);
				}
				);

				$("#panel3").hover(function() {
				$("#opis3").fadeIn(700);			
				},
				function() {
				$("#opis3").fadeOut(700);
				}
				);