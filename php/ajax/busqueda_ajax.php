<?php 
include("../conex.php");

//METODO PARA BUSCAR LA EMPRESA POR NIT
if($_POST["Accion"]=="buscarEmpresa"){
	//Se consutla la empresa
	$sql="SELECT * FROM tb_empresa WHERE NitEmpresa LIKE '$_POST[NIT]%'";
	$res=queryli($sql,1);

	if($Filas>0){
		echo $res['N_Empresa'];
	}
	else
		echo 2;
}
// METODO PARA AGREGAR O CREAR EMPRESAS
if($_POST["Accion"]=="AgregarEmpresa"){
	//Se consutla la empresa
	$sql="SELECT * FROM tb_empresa WHERE NitEmpresa = '$_POST[nitEmpresaR]'";
	
	$res=queryli($sql,1);

	if($Filas==0){
		$sql="INSERT INTO tb_empresa (idempresa,NitEmpresa,N_Empresa,Direccion_Empresa,Telefono_Empresa,Correo_Empresa) 
			   VALUES('','$_POST[nitEmpresaR]','$_POST[NombreEmpresaR]','$_POST[DireccionEmpresaR]','$_POST[TelefonoEmpresaR]','$_POST[CorreoEmpresaR]')";
			   echo "EMPRESA CREADA CORRECTAMENTE";
	}
	else{
		$sql="UPDATE tb_empresa 
				SET  N_Empresa='$_POST[NombreEmpresaR]',
				     DIreccion_Empresa='$_POST[DireccionEmpresaR]',
				     Telefono_Empresa='$_POST[TelefonoEmpresaR]',
				     Correo_Empresa='$_POST[CorreoEmpresaR]'
				WHERE NitEmpresa = '$_POST[nitEmpresaR]' ";	
		echo "DATOS DE LA EMPRESA MODIFICADOS";
	}
	queryli($sql);
}
//METODO PARA ELIMINAR empresas POR DOCUMENTO
if($_POST["Accion"]=="eliminarEmpresas"){
	//Se consutla la empresa
	$sql="SELECT * FROM tb_empresa WHERE NitEmpresa = '$_POST[NIT]'";
	
	$res=queryli($sql,1);	
	if($Filas==0){
		echo "ERROR AL ELIMINAR";
	}
	else{
		$sql="DELETE FROM  tb_empresa WHERE NitEmpresa = '$_POST[NIT]'";
		echo "EMPRESA ELIMINADA CORRECTAMENTE";
		
	}
	queryli($sql);
}

//METODO PARA BUSCAR PERSONAS POR DOCUMENTO
if($_POST["Accion"]=="buscarPersonas"){
	//Se consutla la empresa
	$sql="SELECT * FROM tb_personanatural WHERE identificacion = '$_POST[Documento]'";
	$res=queryli($sql,1);

	if($Filas>0){
		echo $res['Nombre'].' '.$res['Apellido'];
	}
	else
		echo 2;
}


// METODO PARA AGREGAR PEROSNAS 
if($_POST["Accion"]=="AgregarPersonas"){
	$sql="SELECT * FROM tb_personanatural WHERE identificacion = '$_POST[DocumentoI]'";
	
	$res=queryli($sql,1);

	if($Filas==0){
		$sql="INSERT INTO tb_personanatural (id_persona, Nombre, Apellido, Direccion, FechaNacimiento, Telefono, CorreElectronico, identificacion)
			   VALUES('','$_POST[Nombres]','$_POST[Apellidos]','$_POST[Direccion]','$_POST[FechaNacimiento]','$_POST[Telefono]','$_POST[Correo]','$_POST[DocumentoI]')";			   
			   
		echo "PERSONA CREADA CORRECTAMENTE";
	}
	else{
		$sql="UPDATE tb_personanatural 
				SET  
				 Nombre='$_POST[Nombres]', 
				 Apellido='$_POST[Apellidos]', 
				 Direccion='$_POST[Direccion]', 
				 FechaNacimiento='$_POST[FechaNacimiento]',
				 Telefono='$_POST[Telefono]', 
				 CorreElectronico='$_POST[Correo]'				    
				WHERE identificacion = '$_POST[DocumentoI]' ";	
				
		echo "DATOS DE LA PERSONA MODIFICADOS";
	}
	queryli($sql);	
}

//METODO PARA ELIMINAR POR DOCUMENTO
if($_POST["Accion"]=="eliminarPersonas"){
	//Se consutla la empresa
	$sql="SELECT * FROM tb_personanatural WHERE identificacion = '$_POST[DocumentoI]'";
	
	$res=queryli($sql,1);	
	if($Filas==0){
		echo "ERROR AL ELIMINAR";
	}
	else{
		$sql="DELETE FROM  tb_personanatural WHERE identificacion = '$_POST[DocumentoI]'";
		echo "PERSONA ELIMINADA CORRECTAMENTE";
		
	}
	queryli($sql);
}



?>