# R-Utiliza
El siguiente proyecto muestra el desarrollo una Aplicación Móvil que permite a usuarios compartir ideas de reutilización de materiales mediante videos, imagenes o guías.
<br/><b>Video demostrativo: https://youtu.be/qtX4d4mzTR8</b> 
<br/><b>Realizado por: </b> 
<br/>   - Miguel Torres
<br/>   - Yajaira Cuatis
## 1. Herramientas de Desarrollo
### IONIC
La aplicación móvil será híbrida por lo que Ionic es una buen framework para este tipo de aplicaciones ya que integra tanto la capa de diseño con estilo css y recursos como íconos, estilos, etc.

### FIREBASE
Firebase es una plataforma cuya función es desarrollar y facilitar la creación de apps de elevada calidad de una forma rápida ya que contiene diversas funciones que se pueden adaptar a las herramientas o plataformas que se usará para el desarrollo. Además de que es muy intuitiva al ofrecer APIs integradas, por otro lado, tambien se utlizó Firebase para el para el hosting y alamcenamiento de datos, imagenes y documentos.

## 2. Estructura y arquitectura
### ° Arquitectura
La Arquitectura de la Aplicación móvil se meustra en la siguiente imagen.<br/> 
<img src="https://github.com/Migueltorresp/App_Tesis/blob/dev/Captures/arquitectura.png" width="800">

### ° Estructura
Los datos almacenados en Firebase muestran las siguiente estructura.<br/>
<img src="https://github.com/Migueltorresp/App_Tesis/blob/dev/Captures/estructura.png" width="800">

## 3. Funcionalidades principales
Dentro del desarroLlo de la Aplicación Móvil se pudo recabar varios requerimientos y funcionalidades para la Aplicación Móvil, algunas de las más importantes son las siguientes:
### ° Iniciar sesión y registro de usuarios
El usuario puede iniciar sesión o registrase dentro de la aplicación usando un correo y una contraseña generada por el mismo usuario al momento de ingresar al formulario de registro, para esto fue necesario activar este método de autenticación en Firebase Authentication habilitando Email/Password.<br/>

<img src="https://github.com/Migueltorresp/App_Tesis/blob/dev/Captures/Screenshot_20210309-003454_MyApp.jpg" width="300" text-align=center>

### ° Visualización de la ventana principal
El usuario podrá ver todas las publicaciones de todos usuarios regsitrado en la ventana principal.<br/>
<img src="https://github.com/Migueltorresp/App_Tesis/blob/dev/Captures/Screenshot_20210316-000159_R-Utiliza.jpg" width="300">
### ° Guardar publicaciones de otros usuarios
El usuario podrá guardar las publicaciones que le parecieron más interesantes de otros usuarios y así poder acceder a esta información de manera más fácil, en esta lista se encontraran todos los datos de la publicación, así como los datos de la persona que lo publicó.<br/> 
<img src="https://github.com/Migueltorresp/App_Tesis/blob/dev/Captures/Screenshot_20210309-003140_MyApp.jpg" width="300">
### ° Seguir entre usuarios
Los usuarios tendrán la posibilidad de seguir a otros usuarios y así poder acceder a todas las publicaciones de los mismos.<br/>
<img src="https://github.com/Migueltorresp/App_Tesis/blob/dev/Captures/Screenshot_20210316-001415_R-Utiliza.jpg" width="300">
<img src="https://github.com/Migueltorresp/App_Tesis/blob/dev/Captures/Screenshot_20210316-001419_R-Utiliza.jpg" width="300">
<img src="https://github.com/Migueltorresp/App_Tesis/blob/dev/Captures/Screenshot_20210316-001436_R-Utiliza.jpg" width="300">

### ° CRUD de publicaciones
Los usuarios podrán crear, editar, eliminar y visualizar sus publicaciones.<br/>
<img src="https://github.com/Migueltorresp/App_Tesis/blob/dev/Captures/Screenshot_20210309-003113_MyApp.jpg" width="300">
<img src="https://github.com/Migueltorresp/App_Tesis/blob/dev/Captures/Screenshot_20210316-001542_R-Utiliza.jpg" width="300">

### ° Categorias de publicaciones
Muestra las categorías de las publicaciones dentro del aplicación móvil.<br/>
<img src="https://github.com/Migueltorresp/App_Tesis/blob/dev/Captures/Screenshot_20210316-002453_R-Utiliza.jpg" width="300">

### ° Reportar publicaciones
Realizar un reporte de alguna publicación que vulnere la temática principal de la aplicación que es reutilizar.<br/>
<img src="https://github.com/Migueltorresp/App_Tesis/blob/dev/Captures/Screenshot_20210316-004047_R-Utiliza.jpg" width="300">


### ° Comentar publicaciones
Los usuarios podrán comentra cualquier publicacion publicada.<br/>
<img src="https://github.com/Migueltorresp/App_Tesis/blob/dev/Captures/Screenshot_20210316-002422_R-Utiliza.jpg" width="300">

### ° Compartir publicaciones
Los usuarios podrán compartir las publicaciones creadas por ellos mismos o por otros usuarios.<br/>
<img src="https://github.com/Migueltorresp/App_Tesis/blob/dev/Captures/Screenshot_20210316-002438_R-Utiliza.jpg" width="300">
## 4. Versiones de Desarrollo
<img src="https://github.com/Migueltorresp/App_Tesis/blob/dev/Captures/ionic-info.jpg" width="800"/>

## 5. Instalación

###  1. Clonar el Repositorio
```bash
git clone https://github.com/Migueltorresp/App_Tesis.git
cd App_tesis
```

###  2. Instalar dependencias

```bash
npm install
```

###  3. Levatar el servidor local

```bash
ionic serve
```


## 6. Anexos
En el siguiente link se encuentra toda la documentacion como Manual Técnico, Manual de Instalación, Informe Técnico y los diferentes anexos del proyecto. <a href="https://github.com/Migueltorresp/Documentacion_Tesis">Link</a>
