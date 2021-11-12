function buscarEmpresa(){

	if($("#nitEmpresa").val()!=""){
		$.ajax({
			url: 'php/ajax/busqueda_ajax.php',
			type: 'POST',
			data: 'Accion=buscarEmpresa&NIT='+$("#nitEmpresa").val(),
			success:function(msj){
				
				if(msj!=2)
					$("#divDatos").html("HOLA "+msj);
				else
					$("#divDatos").html("SU NIT NO SE ENCUENTRA REGISTRADO");
			},
		});	
	}
	else{
		alert("POR FAVOR INGRESE EL NIT DE SU EMPRESA");
	}

}
function AgregarEmpresa(){

	if($("#nitEmpresaR").val()!=""){
		$.ajax({
			url: 'php/ajax/busqueda_ajax.php',
			type: 'POST',
			data: 'Accion=AgregarEmpresa&nitEmpresaR='+$("#nitEmpresaRe").val()+'&NombreEmpresaR='+$("#NombreEmpresaR").val()+'&DireccionEmpresaR='+$("#DireccionEmpresaR").val()+
				  '&TelefonoEmpresaR='+$("#TelefonoEmpresaR").val()+'&CorreoEmpresaR='+$("#CorreoEmpresaR").val(),
			success:function(msj){
				alert("DATOS DE LA EMPRESA CREADOS O MODIFICADOS CORRECTAMENTE");
				location.reload();
			},
		});	
	}
	else{
		alert("HAY DATOS OBLIGATORIOS VACIOS");
	}

}
function EliminarEmpresa(){

	if($("#documentoPersonas").val()!=""){
		$.ajax({
			url: 'php/ajax/busqueda_ajax.php',
			type: 'POST',
			data: 'Accion=eliminarEmpresas&NIT='+$("#nitEmpresa").val(),
				  
			success:function(msj){
				
				alert("EMPRESA ELIMINADA CORRECTAMENTE");
				location.reload();
			},
		});	
	}
	else{
		alert("HAY DATOS OBLIGATORIOS VACIOS");
	}

}