                                                                                CHARKBOT
Repositorios Necesarios:

                                https://github.com/lakedv/charkbot-app          >> Aplicación y base de datos
                                https://github.com/lakedv/charkbot-server       >> Conexión al bot

Comandos para arrancar la app: 
                                
                                -npm  install 
                                -npm  start         Desde "react-Bot"
                                -node server        Desde "src/mobs/mysql"                  Para iniciar la base de datos
                                -node server        Desde la carpeta "charkbot-server"      Para iniciar el bot

Requisitos:

            Base de datos MYSQL: 
                                
                                Nombre: Charkbot
                                Tablas: 2 (productos y usuarios)
                                 
                                 Tabla
                                usuarios: 
                                  id            int AI
                                  name          varchar 50
                                  email         varchar 50
                                  username      varchar 50
                                  password      varchar 50
                                
                                  Tabla
                                productos:
                                  id            int AI
                                  name          varchar 50
                                  value         varchar 30
                                  description   varchar 100
                                  IDuser        int FK

Proposito:
          Se plante la app como un "E-Comerce" en donde los usuarios publican sus productos, 
        el bot de la app funcionaria como un soporte tecnico para el usuario.

Como funciona:
              El usuario debe registrarse principalmente con el boton "Register".
              Una vez registrado puede acceder a las funcionalidades de la aplicación.
              En la pestaña "Add Product" el usuario puede agregar productos.
              En la pestaña "Contacto" puede acceder a nuestro bot.



Contributors:
                Mirarchi German     -     https://github.com/lakedv
                Pagano Matias       -     https://github.com/mpagano07
                Ponce Martin        -     https://github.com/mplp88