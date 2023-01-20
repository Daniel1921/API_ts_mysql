## API REST EN TYPESCRIPT CON BASE DE DATOS MYSQL

Este proyecto es una api Rest usando las tecnologias: 

- express, dotenv y cors
- ts
- mysql

La idea basicamente es demostrar la comparación entre una api en js puro y una usando el superset ts. Para lograr esto en ts es necesario preconfigurar el poryecto en los archivos de tsc tal como lo son tslint y tscconfig.

# ¿ Como se enciende este server ? 

Cabe resaltar que es muy diferente a los proyectos de Nodejs con js puro, ya que este requiere de 2 consolas simultaneas, una que corra el js ya buildeado y otra que compile del ts a js al mismo tiempo antes que esta se inicialice para ello, el primer comando en la primera consola es "nodemon dist/app y el segundo comando en la segunda consola es "tsc --watch"