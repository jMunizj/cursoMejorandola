$( document ).on( "ready", inicio );

function inicio () 
	{
		$( "#personalizar" ).on( "click", transicion );
	}

function transicion () 
	{
		var cambio_css = 
			{
				margin: 0,
				overflow: "hidden",
				padding : 0,
				width: 0
			};

		var cambiosPersonalizacion =
			{
				height : "auto",
				opacity : 1,
				width : "40%"
			}	

		$( "#historia" ).css( cambio_css );
		$( "#personalizacion" ).css( cambiosPersonalizacion );
		$( "#color div" ).on( "click", cambiarColor );
	}	

function cambiarColor (datos) 
	{
		var color = datos.currentTarget.id;
		var nuevoCoche = "img/c" + color + ".jpg";
		$( "#cochecito img" ).attr( "src", nuevoCoche );
	}	
