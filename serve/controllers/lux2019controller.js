const controller={};

controller.peliculas =(req,res) => {
    req.getConnection((err,conn)=>{
        conn.query('SELECT pregunta,archivo, respuesta2 , respuesta3 , respuesta4 , respuesta1 as respuestacorrecta FROM peliculas ORDER BY RAND() LIMIT 5',(err,npeliculas)=>{
            var datos=[];
            var i=1;
            npeliculas.forEach(element=> {
                    datos[i-1]={
                       file:element.archivo,
                       pregunta:element.pregunta,
                       opciones:[
                        element.respuesta2,
                        element.respuesta3,
                        element.respuesta4
                       ],
                       respuesta:element.respuestacorrecta 
                    };  
                i++;  
            });
            var datos2;
            datos2={
                succcess:true,
                content:datos
            }
            datos2=JSON.stringify(datos2);
            console.log(datos2);
            res.render('moviequiz',{
                data : datos2
            });
        });
    });
};

module.exports= controller; 