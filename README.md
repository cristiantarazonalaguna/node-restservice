####Recordar para implementar
se instalo:
npm i express --save
npm i body-parser --save ##para  capturar la info del body cuando se envia por post
npm i mongoose-unique-validator --save par avalidaciones personalizadas

npm install bcrypt ### para encryptar el password

npm install underscore ### Sirve para escoger que campos seran actualizados

npm update ##### Se usa para actualizar todos los paquetes actualizados

npm install jwt #### Json web token

## esto es para crear variables de entotno para ocultar la informacion 
primero para saber cuales son nuestras bvariables de entorno colocamos el siguiente comando:
heroku config
para crear colocamos lo siguiente:
heroku config:set SEED='Este-es-el-seed-produccion'