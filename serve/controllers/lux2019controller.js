const controller={};

controller.inicio=(req,res)=>{
    res.render('inicio');
};

controller.safilo=(req,res)=>{
    res.render('marcas/safilo');
};
controller.luxotica=(req,res)=>{
    res.render('marcas/luxotica');
};
controller.marchon=(req,res)=>{
    res.render('marcas/marchon');
};
controller.maikita=(req,res)=>{
    res.render('marcas/maikita');
};


controller.moviequiz =(req,res) => {
    req.getConnection((err,conn)=>{
        conn.query('SELECT pregunta,archivo, respuesta2 , respuesta3 , respuesta4 , respuesta1 as respuestacorrecta,image FROM peliculas ORDER BY RAND() LIMIT 5',(err,npeliculas)=>{
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
                       respuesta:element.respuestacorrecta,
                       image:element.image 
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
            res.render('juegos/moviequiz',{
                data : datos2
            });
        });
    });
};
controller.photoquiz =(req,res) => {
    req.getConnection((err,conn)=>{
        conn.query('SELECT pregunta,archivo2 as respuesta2 ,archivo 3 as respuesta3 , archivo4 as respuesta4 , archivo1 as respuestacorrecta,image FROM photos ORDER BY RAND() LIMIT 5',(err,npeliculas)=>{
            var datos=[];
            var i=1;
            npeliculas.forEach(element=> {
                    datos[i-1]={
                       pregunta:element.pregunta,
                       opciones:[
                        element.respuesta2,
                        element.respuesta3,
                        element.respuesta4
                       ],
                       respuesta:element.respuestacorrecta,
                       image:element.image 
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
            res.render('juegos/photoquiz',{
                data : datos2
            });
        });
    });
};
controller.carrera=(req,res)=>{
    res.render('juegos/carrera');
};
controller.runner=(req,res)=>{
    res.render('jegos/runner');
};
controller.calvinklein=(req,res)=>{
    res.render('juegos/calvinklein');
};
controller.jellyhipster=(req,res)=>{
    res.render('juegos/jellyhispter');
};

controller.endcarrera=(req,res)=>{
    res.render('finjuegos/endcarrera');
};
controller.endrunner=(req,res)=>{
    res.render('finjuegos/endrunner');
};
controller.endcalvinklein=(req,res)=>{
    res.render('finjuegos/endcalvinklein');
};
controller.endjellyhipster=(req,res)=>{
    res.render('finjuegos/endjellyhispter');
};
controller.endmoviequiz=(req,res)=>{
    res.render('finjuegos/endmoviequiz');
};
controller.endphotoquiz=(req,res)=>{
    res.render('finjuegos/endphotoquiz');
};

module.exports= controller; 