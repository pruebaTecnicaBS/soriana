# Soriana

Se crea un script en js, para la extracción de datos en el sitio:
https://www.soriana.com/

mediante la libreria **puppeteer para hacer scrapy, **jquery, para acceder al dom

Ejecución:

- tener instalado node.js
- acceder a la ruta del proyecto
- descargar las librerias con
  **npm update
  ejecución:
  **node index.js
- listará por linea de consola el listado de categorias
  ![Alt text](./img/1.png?raw=true "Title")
  ![Alt text](./img/2.png?raw=true "Title")

# incidencias

se mostraba un error al acceder al sitio de falta de permisos como este:
![Alt text](./img/3.png?raw=true "Title")
se soluciona al otorgar permisos al navegador
await page.setUserAgent(
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"
);
