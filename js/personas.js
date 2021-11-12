function buscarpersonas(){

	if($("#documentoPersonas").val()!=""){
		$.ajax({
			url: 'php/ajax/busqueda_ajax.php',
			type: 'POST',
			data: 'Accion=buscarPersonas&Documento='+$("#documentoPersonas").val(),
			success:function(msj){
				
				if(msj!=2)
					$("#divDatos").html("HOLA "+msj);
				else
					$("#divDatos").html("SU DOCUMENTO NO SE ENCUENTRA REGISTRADO");
			},
		});	
	}
	else{
		alert("POR FAVOR INGRESE EL DOCUMENTO");
	}

}
function AgregarPersona(){

	if($("#identificacionP").val()!=""){
		$.ajax({
			url: 'php/ajax/busqueda_ajax.php',
			type: 'POST',
			data: 'Accion=AgregarPersonas&DocumentoI='+$("#identificacionP").val()+'&Nombres='+$("#Nombres").val()+'&Apellidos='+$("#Apellidos").val()+'&Direccion='+$("#Direccion").val()+
				  '&FechaNacimiento='+$("#FechaNacimiento").val()+'&Telefono='+$("#Telefono").val()+'&Correo='+$("#Correo").val(),
				  
			success:function(msj){
				alert("DATOS DE LA PERSONA CREADA O MODIFICADOS CORRECTAMENTE");
				location.reload();
			},
		});	
	}
	else{
		alert("HAY DATOS OBLIGATORIOS VACIOS");
	}

}

function EliminarPersona(){

	if($("#documentoPersonas").val()!=""){
		$.ajax({
			url: 'php/ajax/busqueda_ajax.php',
			type: 'POST',
			data: 'Accion=eliminarPersonas&DocumentoI='+$("#documentoPersonas").val(),
				  
			success:function(msj){
				
				alert("PERSONA ELIMINADA CORRECTAMENTE");
				location.reload();
			},
		});	
	}
	else{
		alert("HAY DATOS OBLIGATORIOS VACIOS");
	}

}