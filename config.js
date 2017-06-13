/**
 * AUTH: yjsgoon
 * DATE: 2017. 6. 14
 * DESC: Server Configuration Values
 */

module.exports = {
    projectName : "Beering",
    version : {
        beer: 1,
        beer_eval: 1,
        beer_book: 1,
        pub: 1,
        brewery: 1,
        nation: 1,
        style: 1,
        field: 1
    },
    server : {
        event : "http://175.210.58.4:7070/events.json?accesskey=XkCUCNUV_4cxMx-Am-WRpzh5-7wx0dNW4Zau32KXyBMxOKvEch6pJTsinVsjSwt-",
        recommend : "http://175.210.58.4:8000/queries.json"
    }
//  "db" : {
//    "mysql" : "localhost"
//  }
} ;