# Primer dia con Git y Github

Lista de comandos de git

* Para poder ver la version de git
ejecutamos en nuestra terminal:
```bash
git --version
git -v
```

* Para configurar el correo y nombre
(solo la primera vez en mi maquina)


```bash
git config --global user.email "klitatk.19.96@gmail.com"

git config --global user.name "Karla Teves"
```

* Para ver la configuracion de git
```bash
git config --list
```

* Para inicializar nuestro repositorio en git ejecutamos el comando 
```bash
git init
```
* Para ver el estado de nuestros cambios 
```bash
git status
```
* Para preparar nuestros archivos para la zona de stage
```bash
git add .
git add nombreDelArchivo.extension
```
* Crear el registro de los cambios realizados 
```bash
git commit -m "primer commit"
```

* Para ver una linea del tiempo de los commits q hemos realizado: 
 ```bash
 git log
 ```
 * Para poder ver el detalle de un commit especifico
 ```bash
 git show id-de-commit
 ```


